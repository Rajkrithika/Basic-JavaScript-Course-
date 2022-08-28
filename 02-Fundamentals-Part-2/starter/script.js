// const veggies1 = 'mint';
// const veggies2 = 'carrot';
// const veggies3 = 'spinach';
//
// const vegatables = ['mint', 'carrot', 'spinach','tomato', 6, 1000];
// console.log(vegatables);
// vegatables.push('beetroot', 'apple');
// console.log(vegatables);
// vegatables.unshift('beetroot');
// console.log(vegatables);
// vegatables.pop();
// console.log(vegatables);
// console.log(vegatables.indexOf('spinach'));
// console.log(vegatables.includes('kkkkkk'));
//
// if(vegatables.includes('terrr')){
//   console.log("happy tomato");
// }
// else {
// console.log("Sad tomato");
// }


// function CalcTip (bills){
//   let tips = [];
// let total = []
// bills.forEach((bill, i) => {
// let tip = 0;
//      if ((bill >= 50) && (bill<=300)){
//        tip = (bill /100)*15;
//     } else {
//     tip = (bill /100)*20;
//   }
//   total.push(bill+tip);
//   tips.push(tip);
// })
//
// console.log(total);
// console.log(tips);
// return tips;
// }
// const bills = [125, 555, 44];
// CalcTip(bills);
//


let fruits = {
  apples : 3,
  orange : 8,
  jackfruit : 7,
  fruitsName : "fruit 1",
  fruitsName2 : "fruit 2",
  basket: [43,"name"]
};
console.log(fruits);
console.log(fruits.orange);
console.log(fruits['fruitsName']);
fruits.names = "karnan";
console.log(fruits);



let bills = [22,295,176,440,37,105,10,1100,86,52];
let tips = [];
let totals = [];
