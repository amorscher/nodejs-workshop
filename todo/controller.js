const model = require('./model');
const view = require('./view');

function listAction(req, res) {
  const data = model.getAll();
  res.send(view.render(data));
}

function deleteAction(req, res) {
  console.log(req.params.id);
  // delete stuff
  model.delete(parseInt(req.params.id));
  res.redirect(req.baseUrl);
}

module.exports = {
  listAction,
  deleteAction,
};
