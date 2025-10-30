const Cliente = require('./cliente');
const getLista = async (req, res) => {
  const clientes = await Cliente.findAll();
  res.status(200).json(clientes);
};
const getCliente = async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.clienteId);
  if (cliente) return res.status(200).json(cliente);
  return res.status(404).json({ message: 'Cliente não encontrado' });
};
const inserir = async (req, res) => {
  const cliente = await Cliente.create(req.body);
  res.status(201).json({ message: `Cliente inserido com clienteId: ${cliente.clienteId}` });
};
const alterar = async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.clienteId);
  if (cliente) {
    await cliente.update(req.body);
    return res.status(200).json({ message: `Cliente modificado com clienteId: ${cliente.clienteId}` });
  }
  return res.status(404).json({ message: 'Cliente não encontrado' });
};
const excluir = async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.clienteId);
  if (cliente) {
    await cliente.destroy();
    return res.status(200).json({ message: `Cliente excluído com clienteId: ${cliente.clienteId}` });
  }
  return res.status(404).json({ message: 'Cliente não encontrado' });
};
module.exports = { getLista, getCliente, inserir, alterar, excluir };
