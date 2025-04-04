const cobaia = document.getElementById('cobaia');
const botao = document.getElementById('botao');
const titulo = document.getElementById('titulo');

titulo.style.backgroundColor = 'blue';
titulo.style.color = 'yellow';
cobaia.style.backgroundColor = 'red';
cobaia.innerText = '0';

botao.addEventListener('click', (Event) => {
    let soma = 0;
    let contador = 0;
    let nota = 0;

    do {
        let input = prompt('digite a nota do parceiro (ou o numero 11 para finalizar)');

        if (!input) break; 
        
        nota = parseFloat(input);

        if (!isNaN(nota)) {
            if (nota !== 11 || nota >= 0 || nota <= 10) {
                soma += nota;
                contador++;
            }
        } else {
            alert('Digite um número válido!');
        }

    } while (nota !== 11);

    if (contador > 0) {
        const media = soma / contador;
        cobaia.innerText = media.toFixed(2);
    } else {
        cobaia.innerText = 'Sem notas válidas';
    }
});
