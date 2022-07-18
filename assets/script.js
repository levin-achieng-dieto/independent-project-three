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
let  yearlyEarning = document.querySelector(".incomePerYear")
let  sales = document.querySelector(".incomeInLeapYear")

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


  giveSum.innerHTML = `${total}`
  let see = giveSum.innerHTML;


  const litrePrice = 45;
  let dailyIncome = parseInt(see*litrePrice)
  console.log(dailyIncome);
  income.innerHTML = `${dailyIncome}`;


  let daysOfWeek = income.innerHTML;
  const daysAweek = 7;
  let weeklyIncome = parseInt(daysOfWeek*daysAweek);
  weeklyEarning.innerHTML = `${weeklyIncome}`;

  let daysInYear = weeklyEarning.innerHTML;
  const weeksInYear = 52;
  let yearlyIncome = parseInt(weeksInYear*daysInYear);
  yearlyEarning.innerHTML = `${yearlyIncome}`;



//   // let daysInLeapYear = yearlyEarning.innerHTML;
//   // function
  
  let myDaysIncome = income.innerHTML;
  console.log(myDaysIncome);

  var sales = {};


  function isLeapYear(year){
    if (parseInt(year) % 4 === 0){
      januaryEarning = parseInt (myDaysIncome)*31;
      februaryEarning = parseInt (myDaysIncome)*29;
      marchEarning = parseInt (myDaysIncome)*31;
      aprilEarning = parseInt (myDaysIncome)*30;
      mayEarning = parseInt (myDaysIncome)*31;
      juneEarning = parseInt (myDaysIncome)*30;
      julyEarning = parseInt (myDaysIncome)*31;
      augustEarning = parseInt (myDaysIncome)*31;
      septemberEarning = parseInt (myDaysIncome)*30;
      octoberEarning = parseInt (myDaysIncome)*31;
      novemberEarning = parseInt (myDaysIncome)*30;
      decemberEarning = parseInt (myDaysIncome)*31;


      sales['januaryEarning'] = januaryEarning;
      sales['februaryEarning'] = februaryEarning;
      sales['marchEarning'] = marchEarning;
      sales['aprilEarning'] = aprilEarning;
      sales['mayEarning'] = mayEarning;
      sales['juneEarning'] = juneEarning;
      sales['julyEarning'] = julyEarning;
      sales['augustEarning'] = augustEarning;
      sales['septemberEarning'] = septemberEarning;
      sales['octoberEarning'] = octoberEarning;
      sales['novemberEarning'] = novemberEarning;
      sales['decemberEarning'] = decemberEarning;


      return sales;
    }
  }
  console.log(isLeapYear(2000));
}

button2.addEventListener('click', findSum);


