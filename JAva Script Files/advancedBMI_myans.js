function bmiCalculator (weight, height) {
var ybmi=weight/Math.pow(height,2);
ybmi=Math.round(ybmi);

if(ybmi<18.5){
    alert("Your BMI is "+ ybmi+"so you are underweight.");
}

if(ybmi>=18.5 && ybmi<=24.9){
    alert("Your BMI is "+ ybmi+"so you are normalweight.");
}

if(ybmi>24.9){
    alert("Your BMI is "+ ybmi+"so you are overweight.");
}
   



//     return interpretation;
}

bmiCalculator(20,1.8);

