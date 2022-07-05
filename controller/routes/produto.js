const produtoBanco = require('../../model/repositories/produtoDB')

module.exports = function (app) {

  app.get("/cadastroP", function (req, res) {
    if (req.query.fail)
      res.render("produto/cadastroProduto", {
        mensagem: "Cadastro de novo produto",
      });
    else res.render("produto/cadastroProduto", { mensagem: null });
  });

  app.post("/cadastro/produto/edit/salvar", (req, res) => {
    var produto = {
      nome: req.body.nome,
      preco: req.body.preco,
      id: req.body.id,
    };
    try {
      produtoBanco.updateProduto(produto);
      res.render("produto/Sucesso", { mensagem: "alterado" });
    } catch (error) {
      res.render("produto/EditProduto", {
        title: "Edição Cadastro",
        mensagem: "Erro no cadastro",
      });
    }
  });

  app.post("/cadastro/produto/salvar", (req, res) => {
    try {
      var produto = {
        nome: req.body.nome,
        preco: req.body.preco,
      };
      produtoBanco.insertProduto(produto);
      res.render("produto/Sucesso", { mensagem: "de produto efetuado" });
    } catch (error) {
      res.render("produto/CadastroProduto", {
        title: "Cadastro",
        mensagem: "Erro no cadastro",
      });
    }
  });

  app.get("/lista/produto", async (req, res, next) => {
    try {
      const docs = await produtoBanco.selectProduto();
      res.render("produto/Lista", { mensagem: "Lista de produtos", docs });
    } catch (err) {
      next(err);
    }
  });

  app.get(
    "/delete/produto/:id",
    async (req, res, next) => {
      try {
        var id = req.params.id;
        var nome = req.params.nome;
        var preco = req.params.preco;
        await produtoBanco.deleteProduto(id, nome, preco);
        const docs = await produtoBanco.selectProduto();
        res.render("produto/Lista", {
          mensagem: "Produto comprado com sucesso, acompanhe seu processo de compra via e-mail.",
          docs,
        });
      } catch (err) {
        next(err);
      }
    }
  );

  app.get("/edit/produto/:id", async (req, res, next) => {
    try {
      var id = req.params.id;
      const produto = await produtoBanco.getProdutoId(id);
      res.render("produto/EditProduto", { mensagem: "", produto });
    } catch (err) {
      next(err);
    }
  });
};
