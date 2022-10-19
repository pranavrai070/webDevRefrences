function bmiCalculator(weight,height){
    var calc=(weight/(height*height));
    console.log("your BMI is " + Math.round(calc) + " .");
}
var weight=prompt("what is your weight?");
var height=prompt("What is your height?");
// var bmi = bmiCalculator(65, 1.8);
bmiCalculator(weight,height);
 