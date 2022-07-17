const shades = ["shadeA", "shadeB", "shadeC", "shadeD"];

document.getElementById("shadeA").innerHTML = shades[0];
document.getElementById("shadeB").innerHTML = shades[1];
document.getElementById("shadeC").innerHTML = shades[2];
document.getElementById("shadeD").innerHTML = shades[3];


function numbersOnly(input) {
  var regex = /[^0-9]/gi;
  input.value = input.value.replace(regex, "");


  var inputA = document.getElementById('shadeA');
  var btn = document.getElementById('button1');
  var outputA = document.getElementById('output0');
  console.log(inputA);
}



var inputA = document.getElementById('input0');
console.log(inputA);
var outputA = document.getElementById('output0');

var inputB = document.getElementById('input1');
var outputB = document.getElementById('output1');

var inputC = document.getElementById('input2')
var outputC = document.getElementById('output2');

var inputD = document.getElementById('input3');
var outputD = document.getElementById('output3')

var bttn = document.getElementById('button1');


function fun1() {
  output0.innerHTML = inputA.value;
  output1.innerHTML = inputB.value;
  output2.innerHTML = inputC.value;
  output3.innerHTML = inputD.value;
}
button1.addEventListener('click', fun1);

let giveSum = document.querySelector(".outputMain")
let income = document.querySelector(".incomePerDay")
let  weeklyEarning = document.querySelector(".incomePerWeek")

function findSum() {
  output0.innerHTML = inputA.value;
  output1.innerHTML = inputB.value;
  output2.innerHTML = inputC.value;
  output3.innerHTML = inputD.value;

  reslt1 = parseInt(output0.innerHTML);
  reslt2 = parseInt(output1.innerHTML);
  reslt3 = parseInt(output2.innerHTML);
  reslt4 = parseInt(output3.innerHTML);
  let total = reslt1 + reslt2 + reslt3 + reslt4

  var btn = document.getElementById('button2');

  // console.log(total);
  giveSum.innerHTML = `${total}`

  let see = giveSum.innerHTML;
  const litrePrice = 45;
  // console.log(see);
  let dailyIncome = parseInt(see*litrePrice)
  console.log(dailyIncome);
  income.innerHTML = `${dailyIncome}`;


  let daysOfWeek = income.innerHTML;
  const daysAweek = 7;
  let weeklyIncome = parseInt(daysOfWeek*daysAweek);
  weeklyEarning.innerHTML = `${weeklyIncome}`;
  
}

button2.addEventListener('click', findSum);




// function getShadePrice(){
//   output0.innerHTML = inputA.value;
//   output1.innerHTML = inputB.value;
//   output2.innerHTML = inputC.value;
//   output3.innerHTML = inputD.value;

//   reslt1 = parseInt(output0.innerHTML);
//   reslt2 = parseInt(output1.innerHTML);
//   reslt3 = parseInt(output2.innerHTML);
//   reslt4 = parseInt(output3.innerHTML);
//   let total = reslt1 + reslt2 + reslt3 + reslt4

//   var btn = document.getElementById('button3');

//   // console.log(total);
//   income.innerHTML = `${total}`;

//   let numberOfShades = income.innerHTML;
//   const litrePrice = 45;

//   let dailyIncome = parseInt(numberOfShades*litrePrice)
//   console.log(dailyIncome);


// }

// button3.addEventListener('click', getShadePrice);












// var dIncome = function (price) {
//   output0.innerHTML = inputA.value;
//   output1.innerHTML = inputB.value;
//   output2.innerHTML = inputC.value;
//   output3.innerHTML = inputD.value;

//   reslt1 = parseInt(output0.innerHTML);
//   reslt2 = parseInt(output1.innerHTML);
//   reslt3 = parseInt(output2.innerHTML);
//   reslt4 = parseInt(output3.innerHTML);
//   let total = reslt1 + reslt2 + reslt3 + reslt4

//   giveSum.innerHTML = `${total}`

//   let pay = giveSum.innerHTML;

//   income.innerHTML = pay.innerHTML * (price);
//   var btnn = document.getElementById('button3');
// }

// dIncome("45");

// button3.addEventListener('click', dIncome);



//   var  = (outPutMain.innerHTML) * pricePerLitre;

//   console.log(pricePerLitre);
// }

// pricePerLitre(45);
