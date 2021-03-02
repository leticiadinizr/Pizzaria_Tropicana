const {Pool} = require("pg");
async function criarConexao() {
    const pool = new Pool({
        connectionString: '', 
        ssl: {
            rejectUnauthorized: false
        }
    });

let con = await pool.connect();
let res = await con.query(`create table funcionario (
  funcao varchar primary key, 
  nome varchar, 
  endereco serial, 
  telefone serial)`);
console.log(res);
con.release();

await con.query("insert into funcionario (nome, funcao) values ($1), ($2)",[ "Fun1", "Cozinheiro"]);
await con.query("insert into funcionario (nome, funcao) values ($1), ($2)",[ "Fun2", "Cozinheiro"]);
await con.query("insert into funcionario (nome, funcao) values ($1), ($2)",[ "Fun3", "Caixa"]);
await con.query("insert into funcionario (nome, funcao) values ($1), ($2)",[ "Fun4", "Entregador"]);
await con.query ("update funcionario set funcao = $1 where funcion = $2", ["Entregador, 1"]);
await con.query ("delete from funcionario where nome 'fun1'");
await con.query("select * from funcionario ");
 let tuplas = res.rows;
for(let tupla of tuplas) {
        console.log(tupla);
    }
con.release();
}

criarConexao();