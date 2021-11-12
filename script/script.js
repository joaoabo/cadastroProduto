
class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }  

    salvar() {
        let produto = this.lerDados(); // ler os dados do formulário

        if(this.validaCampos(produto)) { // se os campos estiverem preenchidos
            this.adicionar(produto);
        }
        this.listaTabela();
        this.cancelar();
        //console.log(this.arrayProdutos);// imprimir o array
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerHTML = ''; // limpando o tbody

        for(let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow(); // criando uma linha na tabela

            let td_id = tr.insertCell(); // criando uma coluna na tabela
            let td_produto = tr.insertCell(); // criando uma coluna na tabela
            let td_valor = tr.insertCell(); // criando uma coluna na tabela
            let td_acoes = tr.insertCell(); // criando uma coluna na tabela

            td_id.innerHTML = this.arrayProdutos[i].id; // inserindo o id na coluna
            td_produto.innerHTML = this.arrayProdutos[i].nomeProduto; // inserindo o nome do produto na coluna
            td_valor.innerHTML = this.arrayProdutos[i].preco; // inserindo o preço do produto na coluna

            td_id.style.textAlign = 'center'; // alinhando o texto da coluna
            td_produto.style.textAlign = 'center'; // alinhando o texto da coluna   
            td_valor.style.textAlign = 'center'; // alinhando o texto da coluna

            let  imgEdit = document.createElement('img'); // criando uma imagem
            imgEdit.src = 'img/edit.png'; // inserindo a imagem

            let  imgExcluir = document.createElement('img'); // criando uma imagem
            imgExcluir.src = 'img/excluir.png'; // inserindo a imagem

            td_acoes.appendChild(imgEdit); // inserindo a imagem na coluna
            td_acoes.appendChild(imgExcluir); // inserindo a imagem na coluna
        }
    }


    adicionar(produto) {
        this.arrayProdutos.push(produto); // adicionando o produto no array
        this.id++; // incrementa o id, sempre que adicionar um produto
    }

    lerDados() {
 // dentro de lerDados, vamos ler os dados do formulário e colocar em um objeto       
       let produto = {} // criando um objeto

       produto.id = this.id; // atribuindo o id
       produto.nomeProduto = document.getElementById('produto').value; // atribuindo o nome do produto
       produto.preco = document.getElementById('preco').value; // atribuindo o preço do produto

       return produto;
    }
// dentro de validaCampos, vamos validar os campos do formulário
    validaCampos(produto) {
        if (produto.nomeProduto == '') {
            alert('Preencha o campo produto');
            return false;
        }

        if (produto.preco == '') {
            alert('Preencha o campo preco');
            return false;
        }
        return true;
    }
// Aqui temos outra maneira de fazer a mesma coisa, no codigo na linha de cima.
// let msg = '';
// if (produto.nomeProduto == '') {
//     msg += '- Preencha o campo produto \n';
// }
// if (produto.preco == '') {
//     msg += '- Preencha o campo preco \n';
// }
// if (msg != '') {
//     alert(msg);
//     return false;
// }
// return true;

    cancelar() { 
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = ''; 

    }
}
var produto = new Produto();
