const cardsContainer = document.querySelector(".cards-container");
const url = "https://reqres.in/api/users?page=1";

const getUser = async () => {
  const response = await axios.get(url); //Await espera a resposta da requisição
  const data = response.data; //Atribui a resposta a uma variavel

  const user = data.data.map((dadosUser) => {
    //Map percorre o array e retorna um novo array
    return {
      //Retorna um objeto com os dados que eu quero
      img: dadosUser.avatar,
      email: dadosUser.email,
      nome: `${dadosUser.first_name} ${dadosUser.last_name}`,
    };
  });

  const cardsUser = user.map((dadosUser) => {
    //Percorre o array de objetos e retorna um novo array
    return cards(dadosUser); //Retorna a função cards com os dados do usuario
  });
  cardsContainer.append(...cardsUser); //Adiciona os cards no container
};

window.document.onload = getUser(); //Inicializa a função getUser

const cards = (dadosUser) => {
  //Função que retorna o html do card
  const card = document.createElement("div"); //Cria um elemento div
  card.classList.add("card"); //Adiciona a classe card
  card.innerHTML = ` 
        <button type="button" class="edit-icon"><img class="edit-icon" src="assets/img/pencil.svg" alt="edit-button"></button>
        <div class="card-content"> 
        <img class="foto-usuario" src="${dadosUser.img}" alt="foto-usuario">
            <h2 class="card-name">${dadosUser.nome}</h2>
            <p class="card-content">${dadosUser.email}</p>
        </div>
    `;
  return card; //Retorna o card
};
