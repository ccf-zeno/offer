// 找出全部重复的数字
function findRepeatStr(arr) {
  let set = new Set();
  let set2 = new Set();
  for (let i in newArr) {
    let item = newArr[i];
    if (set.has(item)) {
      set2.add(item);
    } else {
      set.add(item);
    }
  }
  return set2.keys();
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 4, 7, 2, 2, 2, 2, 2];
console.log(findRepeatStr(arr));

// 随便找出一个重复的数字
function findRepeatStr2(arr) {
  let set = new Set();
  for (let i in newArr) {
    let item = newArr[i];
    if (set.has(item)) {
      return item;
    } else {
      set.add(item);
    }
  }
  return null;
}
