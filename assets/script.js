const shades=["shadeA", "shadeB", "shadeC", "shadeD"];

document.getElementById("shadeA").innerHTML=shades[0];
document.getElementById("shadeB").innerHTML=shades[1];
document.getElementById("shadeC").innerHTML=shades[2];
document.getElementById("shadeD").innerHTML=shades[3];


function numbersOnly(input)
{
  var regex = /[^0-9]/gi;
  input.value=input.value.replace(regex, "");


  const inputA = document.getElementById('shadeA');
  const btn = document.getElementById('button1');
  const outputA = document.getElementById('output0');
}