
const loadInfGitHubPerfil = async () => {
  await fetch("https://api.github.com/users/Lancelotti-beta/repos")
    .then((resposta) => resposta.json())
    .then((dados) => {
      $container.innerHTML += dados
        .map((valor) => {
          console.log(dados)
          return (valor.homepage) ? `
            <li>
              <h3>${valor.name}</h3>
              <a href="${valor.homepage}" target="_blank">
                demo
              </a>
              <a href="${valor.html_url}" target="_blank">
                repo
              <a>
            </li>
          ` : " ";
        })
        .join("");
    });
};

loadInfGitHubPerfil();