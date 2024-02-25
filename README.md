# DOCUMENTAÇÃO

Este repositório vem com a configuração do NextAuth.js e algumas funções do banco de dados Postgresql para uma rápida iniciação de um novo projeto.
Este projeto esta com o next 14.0.0 mas utiliza o sistema de PAGES, pois a documentação do nextauth não esta clara ainda para o app router.

_PACOTES:_
<br/>
NEXT JS 14.0.0 (PAGE)<br/>
REACT.JS<br/>
TAILWINDCSS<br/>
NEXTHAUTH<br/>
PG (postgresql)<br/>
SEQUELIZE<br/>
ANIMATED_TAILWINDCSS<br/>

# PROCESSOS PARA CONFIGURAÇÂO

# 1 CREDENTIALS GOOGLE

Para que o usuário possa logar através de sua conta no google em seu app,
primeiro é necessário entrar no dashboard do google dev [GOOGLEDEV](https://console.cloud.google.com/apis) na parte de Credenciais:
Criar um novo projeto, e um novo _IDs do cliente OAuth 2.0_, não é necessário criar uma chave de api.

Se atentar a :<br/>
_Origens JavaScript autorizadas_:<br/>
Colocar as duas origens abaixo, uma para teste em localhost e outra para produção.<br/>
http://localhost:3000<br/>
https://seu-url-de-produção.vercel.app<br/>
<br/>
_URIs de redirecionamento autorizados_<br/>
Aqui é para onde será feita a chamada de callback, que deve ser as duas abaixo:<br/>
Para testar em desenvolvimento:<br/>
http://localhost:3000/api/auth/callback/google<br/>
Para produção:<br/>
https://seu-url-de-produção.vercel.app/api/auth/callback/google<br/>
<br/>
Para mais informalções visite a documentação do provedor google [aqui](https://next-auth.js.org/providers/google)<br/>

# 2 CONFIGURAÇÃO DO CALLBACK NO COMPONENTE<br/>

No arquivo _login-btn.jsx_ em components, você pode trocar o callback da função SignIn para testar em desenvolvimento ou para manter na produção.<br/>

# 3 VARIAVEIS DE AMBIENTE<br/>

Crie um arquivo .env.local e deposite as variaveis de ambiente com os seguintes préfixos:<br/>

_NEXTAUTH_<br/>
NEXTAUTH_URL=https://seu-app.vercel.app ou http://localhost:3000<br/>
NEXTAUTH_SECRET= crie um segredo forte aqui.<br/>

_GOOGLE PROVIDER_<br/>

# Variaveis que você recebe no credentials do id do cliente OAuth2.0<br/>

GOOGLE_CLIENT_ID=<br/>
GOOGLE_CLIENT_SECRET=<br/>

As variavéis de ambiente do banco de dados serão criadas pelo dashboard do seu projeto no vercel na aba storage automaticamente.<br/>

_IMPORTANTE_
As variavéis de ambiente no arquivo .env.local devem ser cadastradas também no dashboard do vercel em seu app para que o login funcione.<br/>
Basta ir no dashboard => settings => Environment Variables<br/>

# 4 CONFIGURAÇÕES EXTRAS<br/>

Este repositório já esta configurado para aceitar e mostrar as informações do usuário quando ele clica no botão Sign In.<br/>
Também está configurado para o usuário fazer o login, os dados como:<br/>
Nome, email e foto, serem registrados na tabela do banco de dados Users do postgresql automaticamente, após a criação do banco de dados no dashboard da vercel.<br/>

# REFERÊNCIA DE ARQUIVOS<br/>

PASTA COMPONENTS:<br/>
_login-btn.jsx_<br/>
Trata-se de um botão simples apenas para testar se o login está ocorrendo corretamente.<br/>
Para entender como a variavel const { data: session } = useSession();<br/>
funciona, basta dar uma olhada na documentação do NextAuth [aqui](https://next-auth.js.org/getting-started/example)<br/>

Para mais informações dos restantes dos arquivos leia a documentação dos pacotes:<br/>
[NEXTAUTH](https://next-auth.js.org/getting-started/introduction)<br/>
[SEQUELIZE](https://sequelize.org/docs/v6/getting-started/)<br/>
[TAILWINDCSS](https://tailwindcss.com/docs/installation)<br/>
[POSTGRESQL](https://www.postgresqltutorial.com/)<br/>
