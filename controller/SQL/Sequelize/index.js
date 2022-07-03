(async () => {
  const database = require("./dborm");
  const { Cliente } = require("./cliente");

  console.log(" Criar tabela =======================================");
  const resultado = await database.sequelize.sync();

  console.log(resultado);

  console.log("Criar um registro ===================================");
  const inserirCliente = await Cliente.create({
    nome: "Lucas Aguiar Barreto de Souza",
    idade: 12,
    endereco: "Supermercado Pepe",
  });
  console.log(inserirCliente);

  console.log("Buscar um registro ===================================");
  const cliente = await Cliente.findByPk(1);
  console.log(cliente);

  console.log("Alterar um registro ==================================");
  const clienteAlterar = await Cliente.findByPk(1);
  clienteAlterar.nome = "Icaro Freitas";
  const resultadoSave = await clienteAlterar.save();
  console.log(resultadoSave);

  console.log("Buscar todos registro ================================");
  const clientes = await Clientes.findAll(1);
  console.log(clientes);

  console.log("Deletar o registro ===================================");
  const clienteDelete = await Cliente.findAll(1);
  clienteDelete.destroy();
})();
