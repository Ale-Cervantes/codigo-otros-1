const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Se corrigió el tipo de selector del name y del blog a class
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

// function displayUser(username) {
//   $n.textContent = 'cargando...';
//   // const response = await fetch(`${usersEndpoint}/${username}`);
//   const data = fetch(`${usersEndpoint}/${username}`);
//   // console.log(data);
//   console.log(data);
//   // Se cambiaron las comillas dobles por backticks para activar las plantillas literales
//   $n.textContent = `${data.name}`;
//   $b.textContent = `${data.blog}`;
//   $l.textContent = `${data.location}`;
// }

// function handleError(err) {
//   console.log('OH NO!');
//   console.log(err);
//   n.textContent = `Algo salió mal: ${err}`;
// }

//!V2 GMG
// function displayUser(username) {
//   $n.textContent = 'cargando...';
//   // const response = await fetch(`${usersEndpoint}/${username}`);
//   const data = fetch(`${usersEndpoint}/${username}`)
//   //Se anexa la "resolucion de la promesa"
//   .then(respuesta => respuesta.json())  //Conevrtimos en un JSON los datos que "respondió" la api
//   .then((pintarDOM) => {  //almacenamos los datos obtenidos en una fucnión flecha que devuelve una variable llamada pintarDOM
//                           // !Esta variable ya recibe el valor como un JSOn
//     console.log(pintarDOM); //Imprimimos TODO el objeto
//     // Se cambiaron las comillas dobles por backticks para activar las plantillas literales
//     // *Para poder "pintar el DOM" debemos decirle a las plantillas litarales que van a tomar los valores del objeto pintarDOM y NO de data que esta validando la conexión con la api como estaba al principio
//     $n.textContent = `${pintarDOM.name}`;
//     $b.textContent = `${pintarDOM.blog}`;
//     $l.textContent = `${pintarDOM.location}`;
//   })
//   .catch(error => {
//     reject(handleError(error));
//   });
// }

// function handleError(err) {
//   console.log('OH NO!');
//   console.log(err);
//   n.textContent = `Algo salió mal: ${err}`;
// }

// function displayUser(username) {
//   $n.textContent = 'cargando...';
//   // const response = await fetch(`${usersEndpoint}/${username}`);
//   const data = new Promise((resolve, reject) =>{
//   fetch(`${usersEndpoint}/${username}`)
//   //Se anexa la "resolucion de la promesa"
//   .then(respuesta => respuesta.json())  //Conevrtimos en un JSON los datos que "respondió" la api
//   .then((pintarDOM) => {  //almacenamos los datos obtenidos en una fucnión flecha que devuelve una variable llamada pintarDOM
//                           // !Esta variable ya recibe el valor como un JSOn
                          
//     console.log(pintarDOM); //Imprimimos TODO el objeto
//     // Se cambiaron las comillas dobles por backticks para activar las plantillas literales
//     // *Para poder "pintar el DOM" debemos decirle a las plantillas litarales que van a tomar los valores del objeto pintarDOM y NO de data que esta validando la conexión con la api como estaba al principio
//     $n.textContent = `${pintarDOM.name}`;
//     $b.textContent = `${pintarDOM.blog}`;
//     $l.textContent = `${pintarDOM.location}`;
//   })
//   .catch(error => {
//     reject(handleError(error));
//   });
// });
// }

// function handleError(err) {
//   console.log('OH NO!');
//   console.log(err);
//   n.textContent = `Algo salió mal: ${err}`;
// }

// //!V3 GMG

//Se le anexó un "async" pq es función asincrona
async function displayUser(username) {
  $n.textContent = 'cargando...';

  const data = await fetch(`${usersEndpoint}/${username}`)
  .then(respuesta => respuesta.json())
  .then(pintarDOM => { 
    console.log(pintarDOM);
    $n.textContent = `${pintarDOM.name}`;
    $b.textContent = `${pintarDOM.blog}`;
    $l.textContent = `${pintarDOM.location}`;
  })
  .catch(error => {
    console.log("No estoy funcionando" + error);
  });

  return data
}

function handleError(err) {
  console.log('OH NO!');