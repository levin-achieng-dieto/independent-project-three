const shades=["shadeA", "shadeB", "shadeC", "shadeD"];

document.getElementById("shadeA").innerHTML=shades[0];
document.getElementById("shadeB").innerHTML=shades[1];
document.getElementById("shadeC").innerHTML=shades[2];
document.getElementById("shadeD").innerHTML=shades[3];


function numbersOnly(input)
{
  var regex = /[^0-9]/gi;
  input.value=input.value.replace(regex, "");


  var inputA = document.getElementById('shadeA');
  var btn = document.getElementById('button1');
  var outputA = document.getElementById('output0');
}

var inputA = document.getElementById('input0');
// var bttn = document.getElementById('button1');
var outputA = document.getElementById('output0');

var inputB = document.getElementById('input1');
var outputB = document.getElementById('output1');

var inputC = document.getElementById('input2')
var outputC = document.getElementById('output2');

var inputD = document.getElementById('input3');
var outputD = document.getElementById('output3')

var bttn = document.getElementById('button1');

// var inputB = dicument.getElementById('input1');
// var bttn = document.getElementById('button1');
// var outputB = document.getElementById('output1');

function fun1 (){
  output0.innerHTML = inputA.value;
  output1.innerHTML = inputB.value;
  output2.innerHTML = inputC.value;
  output3.innerHTML = inputD.value;
}
button1.addEventListener ('click', fun1);


// const inputB = document.getElementById('input1');
// const bttn = document.getElementById('button1');
// const outputB = document.getElementById('output1');

// function fun1 (){
//   output0.innerHTML = inputA.value;
// }
// button1.addEventListener ('click', fun1);

// const inputA = document.getElementById('input0');
// const bttn = document.getElementById('button1');
// const outputA = document.getElementById('output0');

// function fun1 (){
//   output0.innerHTML = inputA.value;
// }
// button1.addEventListener ('click', fun1);


// const inputA = document.getElementById('input0');
// const bttn = document.getElementById('button1');
// const outputA = document.getElementById('output0');

// function fun1 (){
//   output0.innerHTML = inputA.value;
// }
// button1.addEventListener ('click', fun1);