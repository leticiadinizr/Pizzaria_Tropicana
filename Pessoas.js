class Pessoa {
    constructor(nome, sobrenome, endereco, telefone) {
        this.nome = nome;
        this.sobrenome = sobrenome;   
        this.endereco = endereco;
        this.nomeCompleto = nome + " "+ sobrenome;
        this.telefone = telefone;
    }
class Cliente extends Pessoa {
    constructor( nome, sobrenome, pedido, endereco, telefone) {
        super(nome, sobrenome, endereco, telefone)
        this.pedido = pedido;
        this.nomeCompleto = nome + " "+ sobrenome;
    }
class Funcionario extends Pessoa {
    constructor( nome, sobrenome, funcao, endereco, telefone) {
        super(nome, sobrenome, endereco, telefone)
        this.funcao = funcao;
        this.nomeCompleto = nome + " "+ sobrenome;
    }