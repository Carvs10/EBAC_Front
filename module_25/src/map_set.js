let myMap = new Map();
//insert obj into map
myMap.set("nome", "joao");
myMap.set("stack", "html, css, js");

const nome = console.log(myMap);
// returning value
myMap.get("nome");

// like length
myMap.size;
// check if map has some key
myMap.has("nome");
//remove all itens
// myMap.clear();

// iterator
for (let chave of myMap.keys()) {
  console.log(chave);
}

for (let valor of myMap.values()) {
  console.log(valor);
}
for (let [chave, valor] of myMap.entries()) {
  console.log(`${chave}: ${valor}`);
}

// remove item from Map
myMap.delete("stack");

const cpfs = new Set();

cpfs.add("740.377.860-01");
cpfs.add("478.218.760-20");
cpfs.add("349.091.870-30");

// cpfs.keys() ===  cpfs.values() => true

cpfs.forEach((value) => {
  console.log(value);
});

const arr = [
  "joao",
  "paula",
  "paulo",
  "barbara",
  "joao",
  "bruno",
  "marcio",
  "paula",
];

const uniqueArray = new Set([...arr]);
// transform it back to array
const noDuplicate = [...uniqueArray];
console.log(uniqueArray);
