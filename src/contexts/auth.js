import React, { createContext, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  getDatabase,
  ref,
  push,
  child,
  get,
  set,
  update,
  remove
} from "firebase/database";
import { app } from '../services/firebase';

export const CartContext = createContext({});

const dbRef = ref(getDatabase(app));
const dbGet = getDatabase(app);

function CartProvider({ children }) {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartHistoric, setCartHistoric] = useState({});
  const [loadingProduct, setLoadingProduct] = useState(false);
  const [loadingCart, setLoadingCart] = useState(false);

  useEffect(() => {

    getProducts();
    getCart();
    getCartHistoric();

  }, [])

  // Retorna os produtos cadastrados
  async function getProducts() {
    setProducts([]);

    // Products
    setLoadingProduct(true);

    await get(child(dbRef, 'products'))
    .then((snapshot) => {
      snapshot.forEach((childItem) => {
        let data = {
          id: childItem.key,
          nameProduct: childItem.val().nameProduct,
          price: convertPriceComma(childItem.val().price)
        };

        setProducts(prod => prod.concat(data));
      });
    })
    .catch((err) => {
      console.error(err);
    })

    setLoadingProduct(false);
  }

  // Adiciona um novo produto.
  async function addProduct(name, price) {
    await push(ref(dbGet, 'products'), {
      nameProduct: name,
      price: price,
    }).then(() => {
      getProducts();
    }).catch((err) => {
      console.error(err);
    })
  }

  // Edita um produto.
  async function editProduct(id, name, price) {
    await update(ref(dbGet, `products/${id}`), {
      nameProduct: name,
      price: price,
    }).then(() => {
      getProducts();
    }).catch((err) => {
      console.error(err);
    })
  }

  // Retorna os produtos que estiverem no carrinho
  async function getCart() {
    setLoadingCart(true);
    setCart([]);

    await get(child(dbRef, 'cartProducts'))
    .then((snapshot) => {
      snapshot.forEach((childItem) => {
        let data = {
          id: childItem.key,
          amount: childItem.val().amount,
          nameProduct: childItem.val().nameProduct,
          price: convertPriceComma(childItem.val().price),
          total: convertPriceComma(childItem.val().total)
        };

        setCart(prod => prod.concat(data));
      });
    })
    .catch((err) => {
      console.error(err);
    })

    setLoadingCart(false);
  }

  // Adiciona item ao carrinho de compra
  async function addProductCart(data) {
    const indexItem = cart.findIndex(p => p.id === data.id)
    if (indexItem === -1) {
      await set(ref(dbGet, `cartProducts/${data.id}`), {
        amount: data.amount,
        nameProduct: data.nameProduct,
        price: data.price,
        total: data.total
      })
      .then(() => {
        getCart();
      }).catch((err) => {
        console.error(err);
      })
    } else {
      const amount = cart[indexItem].amount + data.amount;
      const totalValue = amount * data.price;
      editProductCart(data.id, amount, totalValue);
    }
  }

  // Editar quantidade no carrinho de compra
  async function editProductCart(id, amount, total) {
    await update(ref(dbGet, `cartProducts/${id}`), {
      amount: amount,
      total: total,
    }).then(() => {
      getCart();
    }).catch((err) => {
      console.error(err);
    })
  }

  // deleta item do carrinho de compra
  async function deleteProductCart(id) {
    await remove(ref(dbGet, `cartProducts/${id}`)
    ).then(() => {
      getCart();
    }).catch((err) => {
      console.error(err);
    })
  }

  async function deleteCart() {
    await remove(ref(dbGet, 'cartProducts')
    ).then(() => {

    }).catch((err) => {
      console.error(err);
    })
  }

  // Retorna Histórico do carrinho de compra de meses anteriores.
  async function getCartHistoric() {
    setCartHistoric([]);

    await get(child(dbRef, 'cartHistoric'))
    .then((snapshot) => {
      let data = {};

      snapshot.forEach((childItem) => {
        const date = childItem.val().lastDate.date;
        const prods = childItem.val().products;

        data[date] = [];

        prods.forEach((prod, key) => {
          data[date].push({
            id: key,
            amount: prod.amount,
            nameProduct: prod.nameProduct,
            price: convertPriceComma(prod.price),
            total: convertPriceComma(prod.total),
          });
        });

      });

      setCartHistoric(data);
    })
    .catch((err) => {
      console.error(err);
    })
  }

  // Adiciona a lista no histórico fazendo algumas validações.
  async function addObjectCartHistoric(dateNow, valid) {
    const data = await getCartHistoricValid();

    // update em item já existente!
    if (valid) {
      const indexDateNow = data.findIndex(item => item.date === dateNow);
      const indexData = data[indexDateNow].id;

      editProductCartHistoric(indexData);

      setTimeout(() => {
        navigation.navigate('Produtos');
      }, 2000);
      return;
    }

    // Máximo de 6 item no histórico, remove o item mais antigo!
    if (data.length === 6) {
      const idDelete = data[0].id;

      deleteProductCartHistoric(idDelete);
    }

    // Adiciona um lista nova!
    await push(ref(dbGet, 'cartHistoric'), {
      "lastDate": {
        date: dateNow
      },
      "products": cart.map(item => ({
        amount: item.amount,
        nameProduct: item.nameProduct,
        price: convertPricePoint(item.price),
        total: convertPricePoint(item.total)
      }))
    }).then(() => {
      getCartHistoric();
      setCart([]);
      deleteCart();
    }).catch((err) => {
      console.error(err);
    })

    setTimeout(() => {
      navigation.navigate('Produtos');
    }, 3000);
  }

  // Get CartHistoric para validações com id e data.
  async function getCartHistoricValid() {
    let data = [];
    await get(child(dbRef, 'cartHistoric'))
      .then((snapshot) => {

        snapshot.forEach((childItem) => {
          const key = childItem.key;
          const date = childItem.val().lastDate.date;
          data.push({
            id: key,
            date: date,
          })
        });
      })
      .catch((err) => {
        console.error(err);
      })
    return data;
  }

  // Dá um update no item caso ele já existir no cartHistoric.
  async function editProductCartHistoric(id) {
    await update(ref(dbGet, `cartHistoric/${id}`), {
      "products": cart.map(item => ({
        amount: item.amount,
        nameProduct: item.nameProduct,
        price: convertPricePoint(item.price),
        total: convertPricePoint(item.total)
      }))
    }).then(() => {
      getCartHistoric();
      setCart([]);
      deleteCart();
    }).catch((err) => {
      console.error(err);
    })
  }

  // Deleta caso tiver 6 item no histórico.
  async function deleteProductCartHistoric(id) {
    await remove(ref(dbGet, `cartHistoric/${id}`)
    ).then(() => {
      getCartHistoric();
    }).catch((err) => {
      console.error(err);
    })
  }

  // Convert ponto para vírgula para front.
  function convertPriceComma(price) {
    let priceString = String(price.toFixed(2))
    priceString = priceString.replace('.', ',');

    return priceString;
  }

  // Convert vírgula para ponto para back.
  function convertPricePoint(price) {
    let priceNumber = price.replace(',', '.');
    priceNumber = Number(priceNumber);

    return priceNumber;
  }

  return(
    <CartContext.Provider value={{
      products,
      addProduct,
      editProduct,
      loadingProduct,
      cart,
      addProductCart,
      editProductCart,
      deleteProductCart,
      loadingCart,
      cartHistoric,
      addObjectCartHistoric,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;
