import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";

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
//const analytics = getAnalytics(app);

const data = getDatabase(app);
const referencia = ref(data)

onValue(referencia, (res) => {
  const dataBD = res.val();
  mostraInformacaos(dataBD);
})


const terminoDeContrato = (value) => value ? " - " + value : " ";

function informacaoPessoal(dados) {
  return ` 
    ${dados.name}
    <span class="texto--block">${dados.age} anos</span>
    <span class="texto--block titulo--secundario">ONEhellper</span>
  `
}

function trabalhosRegistrados(dados) {
  return dados.trabalhos.map(({ empresa, ocupacao, admissao, recisaoContratual }) => {
    console.log(terminoDeContrato(recisaoContratual));
    return `
      <li class="texto">
        <span class="titulo--secundario">
          ${empresa} ( ${admissao} ${terminoDeContrato(recisaoContratual)} )
        </span> - ${ocupacao}
      </li>
    `
  }).join("")
}

function mostraInformacaos(dados){
  document.querySelector('[data-info="eu"]').innerHTML = informacaoPessoal(dados);
  document.querySelector('[data-info="trabalhos"]').innerHTML += `
    <ul>
      ${trabalhosRegistrados(dados)}
    </ul>
  `
}

