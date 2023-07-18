# ShopBudget

ShopBudget é um aplicativo para ajudar você a adicionar itens com seus respectivos preços de supermercado e gerenciar suas compras. Ele também possui um recurso de carrinho de compras que permite adicionar itens e salvar o histórico das compras recentes.

**Observação: Este repositório é fornecido apenas para download do código-fonte. O código foi projetado para uso pessoal e não é aberto para contribuições ou alterações.**

## Configuração do Firebase Realtime Database

Este aplicativo utiliza o Firebase Realtime Database para armazenar os dados dos itens e históricos de compras. Siga as etapas abaixo para configurar o Firebase em seu projeto:

1. Crie uma conta no [Firebase Console](https://console.firebase.google.com) se você ainda não tiver uma.

2. Crie um novo projeto no Firebase Console e anote o ID do projeto.

3. No Firebase Console, acesse as configurações do projeto e encontre a seção "Realtime Database". Clique em "Criar banco de dados" e escolha o modo "Produção" ou "Teste".

4. Copie as credenciais de configuração do banco de dados, incluindo a chave de API, o ID do projeto e a URL do banco de dados.

5. Crie um arquivo chamado "env.js" na raiz do projeto e adicione as credenciais do banco de dados no seguinte formato:

```javascript
// env.js

const firebaseConfig = {
  apiKey: 'sua_chave_de_api',
  projectId: 'seu_id_do_projeto',
  databaseURL: 'url_do_banco_de_dados',
  etc: 'etc...',
};

export default firebaseConfig;
```

Certifique-se de substituir os valores `'sua_chave_de_api'`, `'seu_id_do_projeto'` e `'url_do_banco_de_dados'` pelas suas próprias credenciais do Firebase Realtime Database.

## Instalação

Siga as instruções abaixo para baixar o código-fonte do aplicativo:

1. Faça o download ou clone este repositório em sua máquina local:

```
git clone https://github.com/Jullyheder/ShopBudget.git
```

2. Navegue até o diretório do projeto:

```
cd ShopBudget
```

## Uso

Após baixar o código-fonte, você pode usar o aplicativo em seu ambiente local. Aqui estão as etapas para configurar e executar o aplicativo:

1. Certifique-se de ter o ambiente de desenvolvimento React Native e o Expo CLI configurados em sua máquina. Você pode encontrar instruções detalhadas sobre como configurar o ambiente em [React Native - Get Started](https://reactnative.dev/docs/environment-setup) e [Expo - Get Started](https://docs.expo.dev/get-started/installation/).

2. Instale as dependências do projeto usando o gerenciador de pacotes de sua preferência (npm ou yarn):

```
npm install
```
ou
```
yarn install
```

3. Inicie o aplicativo usando o Expo Go:

```
expo start
```

Isso abrirá a página do Expo Developer Tools no navegador.

4. Em seu dispositivo móvel, instale o aplicativo Expo Go através da App Store (iOS) ou Google Play Store (Android).

5. Abra o aplicativo Expo Go em seu dispositivo móvel e faça login com sua conta do Expo.

6. No aplicativo Expo Go, acesse a guia "Projects" e toque em "Scan QR Code". Escaneie o código QR fornecido pela página do Expo Developer Tools. Isso iniciará o aplicativo ShopBudget em seu dispositivo.

## Contribuição

Este repositório é fornecido apenas para download do código-fonte do aplicativo. O código foi projetado para uso pessoal e não é aberto para contribuições ou alterações.

Agradecemos por seu interesse no aplicativo ShopBudget!

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE). Sinta-se à vontade para usar, modificar e distribuir este projeto de acordo com os termos da licença.

## Contato

Se você tiver alguma dúvida ou precisar de suporte relacionado ao aplicativo ShopBudget, entre em contato [jullyheder@hotmail.com](mailto:jullyheder@hotmail.com).
