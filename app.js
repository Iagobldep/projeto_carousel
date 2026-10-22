const car = document.querySelector('#carrossel');
const btnEsquerda = document.querySelector('#btnEsquerda');
const btnDireita = document.querySelector('#btnDireita');
const cor = [
    'var(--azul-100)',
    'var(--azul-300)',
    'var(--azul-500)',
    'var(--rosa-500)',
    'var(--rosa-300)'
];

let indiceAtual = 0;

function atualizarCarrossel() {
    car.style.background = cor[indiceAtual];
}
btnDireita.addEventListener("click", () => {
    indiceAtual++;

    if (indiceAtual >= cor.length) {
        indiceAtual = 0;
    }
    atualizarCarrossel();
});

btnEsquerda.addEventListener("click", () => {
    indiceAtual--;

    if (indiceAtual < 0) {
        indiceAtual = cor.length - 1;
    }

    atualizarCarrossel();
});