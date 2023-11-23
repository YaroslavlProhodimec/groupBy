// function deepEqual(a, b) {
//   if (Number.isNaN(a) && Number.isNaN(b)) {
//     return true;
//   }
//   if (typeof a !== typeof b) {
//     return false;
//   }
// }
//
// const source = { a: 1, b: { c: 1 } };
// const test1 = { a: 1, b: { c: 1 } };
// const test2 = { a: 1, b: { c: 2 } };
// console.log(deepEqual(source, test1)); // -> true
// console.log(deepEqual(source, test2)); // -> false
// console.log(deepEqual(NaN, NaN)); // -> true
// console.log(deepEqual("test", "test!")); // -> false
// console.log(deepEqual()); // -> true
//
// console.log(Object.keys(source));

function groupBy(a, input2) {
  let hashMap = {};
  if (input2 !== "length") {
    for (let i = 0; i < a.length; i++) {
      let char = a[i];

      hashMap[input2(char)] = hashMap[input2(char)]
        ? (hashMap[input2(char)] = [...hashMap[input2(char)], char])
        : [char];
    }
  } else {
    for (let i = 0; i < a.length; i++) {
      let char = a[i];

      hashMap[char[input2]] = hashMap[char[input2]]
        ? (hashMap[char[input2]] = [...hashMap[char[input2]], char])
        : [char];
    }
  }
  return hashMap;
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
// -> { '4': [4.2], '6': [6.1, 6.3] }
console.log(groupBy(["one", "two", "three"], "length")); // -> { '3': ['one', 'two'], '5': ['three'] }
