# desafio-reqres

<p align="center">
<a href="https://croesym.github.io/projeto-reqres/">DEMO DO PROJETO AQUI!</a>
<p/>
<h3> Página que simula uma aplicação que consiste em gerenciar usuários de um sistema. </h3> <br>

**Login**: Este código define uma função JavaScript para um recurso de login. Ele usa a API DOM (Document Object Model) para selecionar vários elementos na página por seus atributos id, como o formulário de login, os campos de entrada para o nome de usuário e a senha e um botão para enviar o formulário.

Quando o botão de login é clicado, a função checkLogin é chamada com os valores dos campos de entrada de nome de usuário e senha como argumentos. A função itera por meio de uma matriz de dados do usuário armazenados na variável userData e verifica se o nome de usuário e a senha fornecidos correspondem a qualquer um dos dados na matriz. Se houver uma correspondência, a função retornará verdadeiro. Se não, retorna falso.

Se a função **checkLogin** retornar true, uma mensagem de alerta é exibida ao usuário e o navegador é redirecionado para outra página. Se **checkLogin** retornar falso, uma mensagem de erro será exibida na página.

Percebe-se também que, ele está tentando recuperar o userData do sessionStorage do navegador e analisá-lo como json, se não estiver disponível será um array vazio.

![login-page](https://user-images.githubusercontent.com/87200550/214335391-eb282c3e-8178-4b52-b81e-c5378ca3be9e.png)
<br>

**Cadastro:** Quando o botão de registro é clicado, a função registerUser é chamada. Essa função verifica se os campos estão vazios, se o e-mail é válido, se as senhas são iguais e se a senha tem pelo menos 6 caracteres, e se o usuário já está cadastrado.

Se as validações passarem, é criado um objeto com os dados do usuário e salva no session storage, é exibida uma mensagem de sucesso e redireciona para outra página. Caso contrário, é exibida uma mensagem de erro específica.

![register-page](https://user-images.githubusercontent.com/87200550/214335553-20343140-ef8f-453f-b0f1-a0314085669a.png)
<br>

**Lista de Usuários**: Esse código define uma função JavaScript que faz uma chamada de API para um terminal específico, recupera dados de usuários e cria uma representação visual dos dados na forma de cartões.

Ele começa selecionando o elemento com a classe cards-container do DOM e definindo uma variável url que contém o endpoint da API.

A função getUser é então definida como uma função assíncrona, que envia uma solicitação GET para o terminal de API especificado usando a biblioteca axios. Em seguida, ele espera pela resposta e a atribui aos dados da variável.

Em seguida, a função mapeia a matriz contida na resposta e cria uma matriz de objetos que contém apenas os dados específicos necessários: avatar, e-mail e nome e sobrenome do usuário.

Em seguida, ele mapeia essa nova matriz de objetos e chama uma função de cartões que pega os dados do usuário e cria um elemento de cartão com eles. Em seguida, ele anexa todos os cartões ao contêiner.

Por fim, a função é chamada no evento onload do documento, para que seja executada quando a página for carregada.

A função cards cria um elemento div e adiciona o cartão de classe a ele. Em seguida, define o HTML interno do div para conter os dados passados ​​para a função, como avatar, email e nome, dentro dos elementos apropriados, como imagem e parágrafos. Em seguida, ele retorna o elemento do cartão criado.

![user-page](https://user-images.githubusercontent.com/87200550/214335905-852f2376-7bff-4dd7-89e3-94c48007aeba.png)
<br>

