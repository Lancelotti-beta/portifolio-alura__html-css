const $lista = document.querySelector('[data-info="repo"]')

const loadInfGitHubPerfil = async () => {
  await fetch("https://api.github.com/users/Lancelotti-beta/repos")
    .then((resposta) => resposta.json())
    .then((dados) => {
      $lista.innerHTML += dados
        .map((valor) => {
          console.log(dados)
          return (valor.homepage) ? `
            <li class="card">
                <h3>${valor.name}</h3>
                <p>uma descricão</p>
                <div class="card__botao">
                    <span class="botao">
                        <a href="${valor.html_url}">repo</a>
                    </span>
                    <span class="botao">
                        <a class="botao__link" href="${valor.homepage}">demo</a>
                    </span>
                </div>
            </li>
          ` : " ";
        })
        .join("");
    });
};

loadInfGitHubPerfil();