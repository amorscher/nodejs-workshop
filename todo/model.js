let data = ['sleep', 'eat', 'code', 'repeat'];

module.exports = {
  getAll() {
    return data;
  },
  delete(id){
    data = data.filter(it=>it !==id );
  }
};
