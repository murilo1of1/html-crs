const formulario = document.getElementById('formulario');
const tabela = document.getElementById('tabela');

let registroLista = JSON.parse(localStorage.getItem('registros')) || [];

formulario.addEventListener("submit", (Event) => {
    Event.preventDefault();

    let nome = document.getElementById('inputNome').value.trim();
    let data = document.getElementById('inputData').value.trim();

    const [ano, mes, dia] = data.split('-');
    data = `${dia}/${mes}/${ano}`;

    if (!nome || !data) {
        alert('Por favor informe nome/data!');
        return;
    }

    if (verificaDuplicado(nome, data)) {
        alert('dados duplicados nao sao aceitos');
        return;
    }
        
    const novoRegistro = { inputNome: nome, inputData: data}
    console.log(novoRegistro);

    registroLista.push(novoRegistro)
    atualizaTabela();
    salvarDados();
    formulario.reset();
});

function atualizaTabela() {
    tabela.innerHTML = `
    <thead>
        <tr>
            <th>Nome</th>
            <th>Data</th>
            <th>Ação</th>
        </tr>
        </thead>
    <tbody></tbody> 
    `;

    registroLista.forEach((item, index) => {
        const tr = document.createElement('tr');

        const textoRiscado = item.concluido ? 'riscado' : '';

    tr.innerHTML = `
        <td class="${textoRiscado}">${item.inputNome}</td>
        <td class="${textoRiscado}">${item.inputData}</td>
        <td>
            <button class="btn btn-success btn-sm me-2" onclick="marcarConcluido(${index})">
            Concluir
            </button>
            <button class="btn btn-danger btn-sm" onclick="removerRegistro(${index})">
            Excluir
            </button>
        </td>
        `;
      tabela.appendChild(tr)
    })
  }

function verificaDuplicado(nome, data) {
    return registroLista.some(registro =>  registro.inputNome.toLowerCase() == nome.toLowerCase() && data == registro.inputData)
}

function removerRegistro(index) {
    registroLista.splice(index, 1); 
    atualizaTabela(); 
    salvarDados();
  }

function marcarConcluido(index) {
    registroLista[index].concluido = true; 
    atualizaTabela();
    salvarDados();
  }

  function salvarDados() {
    localStorage.setItem('registros', JSON.stringify(registroLista));  
  }
  
  document.addEventListener('DOMContentLoaded', atualizaTabela);
