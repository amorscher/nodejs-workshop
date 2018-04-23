const model = require('./model');
const view = require('./view');

function listAction(req, res) {
  const data = model.getAll();
  res.render(__dirname + '/views/list.ejs', { data, baseUrl: req.baseUrl });
  // res.send(view.render(data));
}

function createFormAction(req, res) {
  const data = model.getAll();
  res.render(__dirname + '/views/form.ejs', { baseUrl: req.baseUrl });
  // res.send(view.render(data));
}

function saveAction(req, res) {
  let data = req.body;
  model.save(data);
  res.redirect(req.baseUrl);
  // res.send(view.render(data));
}

function deleteAction(req, res) {
  // console.log(req.params.id);
  // delete stuff
  model.delete(parseInt(req.params.id));
  res.redirect(req.baseUrl);
}

module.exports = {
  listAction,
  deleteAction,
  createFormAction,
  saveAction,
};
