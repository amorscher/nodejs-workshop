let data = [
  { id: 1, title: 'sleep' },
  { id: 2, title: 'eat' },
  { id: 3, title: 'code' },
  { id: 4, title: 'repeat' },
];

module.exports = {
  getAll() {
    return data;
  },
  delete(id){
    data = data.filter(it=>it.id !== id );
  }
};
