const alunos = require("./data/alunos");
const professores = require("./data/professores");
const avaliacao = require("./data/avaliacao");
const categorias = require("./data/categorias");

module.exports = {
  alunos,
  professores,
  avaliacao,
  categorias
}


// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];

 

//   var brands = items.map((i) => i.manufacturer);
//   brands = [...new Set(brands)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     brands,
//     itemTypes,
//   };
// };