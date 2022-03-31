import '@babel/polyfill'

const fn = () => {
  console.log('1')
};


const arr = [1,2,3]
const list = [...arr];
console.log(list);

const obj = { a: 1 };
const copy_obj = { ...obj, b: 2 };

console.log(Array.from([1,2,3]))

const symbol = Symbol('sybmol_demo');
console.log(symbol);

for (let item of list) {
  console.log(item);
}


