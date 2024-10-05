// Import the functions you need from the SDKs you need
import { initializeApp } from "./node_modules/firebase/app/dist/app/index";
import { getAnalytics } from "./node_modules/firebase/analytics/dist/analytics/index";
;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9kLsETz37DBoTilkK5PjNQg_ldZTIWCc",
  authDomain: "bdtrabalhos.firebaseapp.com",
  databaseURL: "https://bdtrabalhos-default-rtdb.firebaseio.com",
  projectId: "bdtrabalhos",
  storageBucket: "bdtrabalhos.appspot.com",
  messagingSenderId: "85437939350",
  appId: "1:85437939350:web:ad14c4db28e7e521918cb7",
  measurementId: "G-L11VNXDR9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics)

const terminoDeContrato = (value) => null ? " - . ." : " - " + value;

function informacaoPessoal(dados) {
  return ` 
    ${dados.name}
    <span class="texto--block">${dados.age} anos</span>
    <span class="texto--block titulo--secundario">ONEhellper</span>
  `
}

function trabalhosRegistrados(dados) {
  dados.trabalhos.map(({ empresa, cargo, dataInicio, dataFinal }) => {
    return `
    <li class="texto">
    <span class="titulo--secundario">
    ${empresa} ( ${dataInicio} ${terminoDeContrato(dataFinal)} )
        </span> - ${cargo}
      </li>
    `
  })
}

async function mostraInformacaos(){
  await fetch("https://bdtrabalhos-default-rtdb.firebaseio.com/")
    .then((response) => response.json())
    .then((dados) => {
      console.log(dados);
      document.querySelector('[data-info="eu"]').innerHTML = informacaoPessoal(dados);
      document.querySelector('[data-info="trabalhos"]').innerHTML = `
        <ul>
          ${trabalhosRegistrados(dados)}
        </ul>
      `
    })
}

//mostraInformacaos()