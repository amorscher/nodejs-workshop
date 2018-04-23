const model = require('./model');
const view = require('./view');

function listAction(req, res) {
  const data = model.getAll();
  res.send(view.render(data));
}

module.exports = {
  listAction,
};
