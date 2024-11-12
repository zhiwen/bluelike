/**
 * common Utils
 */
module.exports = {

}

function isBlankString(value) {
  return value == undefined || value == "" || value == '' || value.length == 0;
}

function generateRandomIdx(len) {
  if (len <= 0) {
    return 0;
  }
  var idx = Math.floor(Math.random() * len);
  return idx;
}

function getRandomData(arr) {
  var idx = generateRandomIdx(arr.length);
  var data = arr[idx];
  return data;
}

function arraySortingDesc(itm1, itm2) {
  var order1 = (itm1.order == undefined ? 0 : itm1.order);
  var order2 = (itm2.order == undefined ? 0 : itm2.order);
  if (order1 < order2) {
    return 1;
  } else if (order1 > order2) {
    return -1;
  } else {
    return 0;
  }
}

function arrayListPagination(arrayList, pageSize) {
  var arr = [];
  let subArr = [];
  arr.push(subArr);
  arrayList.forEach(itm => {
    subArr.push(itm);
    if (subArr.length >= pageSize) {
      subArr = [];
      arr.push(subArr);
    }
  });
  return arr;
}

module.exports.isBlankString = isBlankString;
module.exports.generateRandomIdx = generateRandomIdx;
module.exports.getRandomData = getRandomData;
module.exports.arraySortingDesc = arraySortingDesc;
module.exports.arrayListPagination = arrayListPagination;

