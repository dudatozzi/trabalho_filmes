// Função para criar os cartões de flashcard
function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    // Estrutura do conteúdo do cartao com dados dinâmicos
    cartao.innerHTML = `
    <div class="cartao__conteudo">
        <h3>${categoria}</h3>
        <div class="cartao__conteudo__pergunta">
            <p>${pergunta}</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p>${resposta}</p>
        </div>
    </div>
    `;

    let respostaEstaVisivel = false;

    // Função para virar o cartão (mostrar/ocultar a resposta)
    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel); // Alterna a classe 'active'
    }

    // Adiciona evento de clique para alternar entre pergunta e resposta
    cartao.addEventListener('click', viraCartao);

    // Adiciona o cartao ao container da página
    container.appendChild(cartao);
}

// Chamadas para criar os cartões de flashcards sobre filmes

criaCartao(
    'O Senhor dos Anéis',
    'Quem dirigiu o filme "O Senhor dos Anéis: A Sociedade do Anel"?',
    'O diretor é Peter Jackson.'
);

criaCartao(
    'Matrix',
    'Em que ano foi lançado o filme "Matrix"?',
    'O filme foi lançado em 1999.'
);

criaCartao(
    'Vingadores: Ultimato',
    'Qual é o nome do vilão principal em "Vingadores: Ultimato"?',
    'O vilão principal é Thanos.'
);

criaCartao(
    'Star Wars',
    'Em que ano foi lançado o primeiro filme da saga "Star Wars"?',
    'O primeiro filme foi lançado em 1977.'
);
