
class Produto {
    constructor() {
        this.id = 1;
        this.arryProduto = [];
    }  
    salvar() {
        var produto = this.lerDados();
        console.log(produto);
    }
    lerDados() {
        var produto = {}
        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.preco = document.getElementById('preco').value;
        return produto;
    }
    validaCampos() {
    }
    cancelar() {  
    }
}
var produto = new Produto();
