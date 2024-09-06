function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let sectionResultados = document.getElementById("resultados-pesquisa");
    // Obtém a seção de notícias
    let sectionNoticias = document.getElementById("secao-noticias");
    // Obtém o valor do campo de pesquisa
    let inputNome = document.getElementById("input-nome").value.trim();

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";

    // Limpa a seção de resultados
    sectionResultados.innerHTML = "";

    // Se o campo de pesquisa não estiver vazio, mostra os resultados e oculta as notícias
    if (inputNome) {
        for (let info of dados) {
            // Cria uma div para cada resultado, formatando o nome, descrição e links para redes sociais
            resultados += `
                <div class="item-resultado">
                    <h2><a href="#" target="_blank">${info.nome}</a></h2>
                    <p class="descricao-meta">${info.sobre}</p>
                    <a href="${info.redesSociais.twitch}" target="_blank">
                        <img src="images/twitch.png" alt="Twitch Logo" class="twitch-logo">
                    </a>
                    <a href="${info.redesSociais.youtube}" target="_blank">
                        <img src="images/youtube.png" alt="YouTube Logo" class="youtube-logo">
                    </a>
                </div>
            `;
        }
        // Atualiza o conteúdo da seção de resultados com o HTML gerado
        sectionResultados.innerHTML = resultados;
        // Oculta a seção de notícias
        sectionNoticias.style.display = "none";
        // Exibe a seção de resultados
        sectionResultados.style.display = "flex";
    } else {
        // Se o campo de pesquisa estiver vazio, mostra a seção de notícias e oculta os resultados
        sectionNoticias.style.display = "grid";
        sectionResultados.style.display = "none";
    }
}
