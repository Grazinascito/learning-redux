//Reducer function
//precisa ser uma função pura, ou seja, nada de mutações no estado hein, nada de usar array.push
function todos(state, action) {
  if (action.type === "ADD_TODO") {
    return state.concat([action.todo]);
    
    // O concat retorna um novo array, combinando o array original com os elementos novos
    //obs: state.concat([action.todo]) é a mesma coisa que o spread operator: [...state, action.todo]
  }
  return state
}

function createStore() {
  // A store possui quatro partes:

  // 1. The state
  // 2. Get the state
  // 3. Listen to changes on the state
  // 4. Update the state

  let state;
  let listners = [];
  const getState = () => state;
  const subscribe = (listener) => {
    listners.push(listener); //subscribe

    return () => {
      listners = listeners.filter((l) => l !== listener);
    };
  };
  const updateState = () => {};

  return {
    getState,
    subscribe, // to listerns the changes in our state
    updateState,
  };
}

//  Agora, precisamos criar uma coleção com todos os eventos
// possiveis que podem ocorrer na nossa aplicação
// esses eventos são basicamente objetos javascript que recebem o nome de actions

//Uma action é uma maneira de dizer qual o tipo de transformação vamos querer fazer em nosso estado.

const action = {
  type: "LIKE_TWEET",
  id: 950788310443724800,
  uid: "tylermcginnis",
};

 //[] state 
 //{} action