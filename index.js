const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const rotas = require('./servicos');
app.use('/', rotas);
app.listen(port, () => {
  console.log(`Servidor ouvindo porta ${port}`);
});
