

var a = [5,8,55,77,98];
var odd = [];
var result = function (a) {
  for (var i = 0; i <= a.length; i++) {
    if (a[i] % 2 == 1) {
      odd.push(a[i]);
    }
  }
  return odd;
};
console.log(result(a));

