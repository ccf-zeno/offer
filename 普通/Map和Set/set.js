const s1 = new Set();
console.log(s1.size); // 0

const s2 = new Set(["a", "b"]);
console.log(s2.size); // 2

const s3 = new Set(["a", "a", "b", "b"]);
console.log(s3.size); // 2
const arr = [...s3];
console.log(arr); // ['a','b'];

const s4 = new Set();
s4.add("a").add("b");
console.log(s4.size); // 2

const r1 = s4.delete("c");
console.log(s4.size); // 2
console.log(r1); // false

const r2 = s4.has("d");
console.log(r2); // false

s4.clear();
console.log(s4.size); // 0

const s5 = new Set(["a", "b", "c"]);
s5.forEach((value) => {
  console.log(value); // a b c
});
