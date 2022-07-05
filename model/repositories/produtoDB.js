const produtoDB = require('../../controller/SQL/db')

async function selectProduto(){
    const conn = await produtoDB.connect();
    const [rows] = await conn.query('SELECT * FROM produto;');
    return rows;
}

async function insertProduto(produto){
    const conn = await produtoDB.connect();
    const sql = 'INSERT INTO produto(nome, preco) VALUES (?,?);';
    const values = [produto.nome, produto.preco];
    return await conn.query(sql, values);
}

async function deleteProduto(id){
    const conn = await produtoDB.connect();
    const sql = 'DELETE FROM produto where id=?;';
    return await conn.query(sql, [id]);
}

async function updateProduto(produto){
    const conn = await produtoDB.connect();
    const sql = 'UPDATE produto SET nome=?, preco=? where id=?;';
    const values = [produto.nome, produto.preco, produto.id];
    return await conn.query(sql, values);
}

async function getProdutoId(id){
    const conn = await produtoDB.connect();
    const sql = 'SELECT * FROM produto where id=?;';
    const values = [id];
    const [rows] = await conn.query(sql, values);
    if(rows.length > 0) return rows[0];
    else return null;
}

module.exports = {selectProduto, insertProduto, deleteProduto, updateProduto, getProdutoId};
