function fastSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mark = arr[0];
  let arrLeft = [];
  let arrRight = [];
  for (let item in arr) {
    if (item == 0) {
      continue;
    }
    const i = arr[item];
    if (i < mark) {
      arrLeft.push(i);
    } else {
      arrRight.push(i);
    }
  }
  return [...fastSort(arrLeft), mark, ...fastSort(arrRight)];
}

let arr = [47, 29, 71, 99, 78, 19, 24, 47];

function fastSort1(arr, left, right) {
  if (left >= right) {
    return;
  }

  let mark = arr[left];
  let start = left;
  let end = right;

  while (start < end) {
    // 必须从右往左 因为取的元素是左边第一个
    while (start < end && mark <= arr[end]) {
      end--;
    }
    arr[start] = arr[end];

    while (start < end && arr[start] < mark) {
      start++;
    }
    arr[end] = arr[start];
  }
  arr[start] = mark;

  fastSort1(arr, left, start - 1);
  fastSort1(arr, start + 1, right);
}

fastSort1(arr, 0, arr.length - 1);
