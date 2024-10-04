//alert("我要學會javascript");
//console.log("大家好！");
const pi = 3.14159;
let 年齡 = 25;
console.log(年齡);

let city = "臺北市";
let street = "博愛300號";
let address = city + street;
console.log(address);

let cloth = 300;
let pants = 700;
let discount = 0.8;
let total = (cloth + pants) * discount;

//方法一
let sentence = "小明今天花了" + total + "元，其中衣服原價" + cloth +"元，褲子原價" + pants + "元"

//方法2 用反引號`(鍵盤左上)和$
let sentence2 = `小明今天花了${total}元，其中衣服原價${cloth}元，褲子原價${pants}元`

let total2 = 120;
let product = 7;
let avg = total2 / product;
console.log(avg);
console.log(avg.toFixed(2));
console.log(Math.round(avg));

//==是相等，但int 60和字串'60'會一樣，所以比較嚴謹的是===，不等於是!==

function sayHi()
{
    console.log("Hi");
}
sayHi();