import {useState, useContext, useEffect} from 'react';
import { CartContext } from '../../contexts/auth';
import ProductHeader from '../../components/ProductHeader';
import SearchItem from '../../components/SearchItem';
import CartHistoricItems from '../../components/CartHistoricItems';
import TotalValue from '../../components/TotalValue';

import {
  Container,
  Select,
  SelectView,
  LoadingAI,
  ListCartHistoric,
} from './styles';

export default function CartHistoric() {
  const { cartHistoric } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState('');
  const [totalSum, setTotalSum] = useState(0);
  const [dates, setDates] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(cartHistoric);

  useEffect(() => {
    setLoading(true);
    setDates([]);

    const keys = Object.keys(cartHistoric);
    keys.sort();
    keys.reverse();

    keys.map((val, id) => {
      const data = {
        id: id,
        date: val
      }
      setDates(date => date.concat(data));
    })

    if (selected) {
      const filteredList = cartHistoric[selected].filter((item) =>
        item.nameProduct.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filteredList);

      const totalSum = cartHistoric[selected].reduce((accumulator, product) => accumulator + Number(product.total.replace(',', '.')), 0);
      setTotalSum(String(totalSum.toFixed(2).replace('.', ',')));
    }

    setLoading(false);
  }, [cartHistoric, searchValue, selected]);

  return (
    <Container>
      <ProductHeader/>

      <TotalValue total={totalSum}/>

      <SelectView>
        <Select
          selectedValue={selected}
          onValueChange={(itemValue) =>
            setSelected(itemValue)
          }
          dropdownIconColor='#C4B282'
        >
          {dates.map((val) =>
            <Select.Item key={val.id} label={val.date} value={val.date} />
          )}
        </Select>
      </SelectView>

      <SearchItem
        clearInput={() => setSearchValue('')}
        searchValue={searchValue}
        changeValue={(val) => setSearchValue(val)}
      />

      { loading ? (
        <LoadingAI size="large" color='#85005B' />
      ) : (
        <ListCartHistoric
          data={filteredData}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
            <CartHistoricItems
              data={item}
            />
          }
        />
      )}
    </Container>
  );
}
