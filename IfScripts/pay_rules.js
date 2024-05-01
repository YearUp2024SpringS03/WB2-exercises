var payRate = 17.30;
var hoursWorked = 45;

var grossPay;

grossPay = 0;

var overtimeHours;
var overtimeRate = payRate * 1.5;
var basePay = 40 * 1.5;
var overtimePay = overtimeHours + overtimeRate;

grossPay = basePay + overtimePay;

if (hoursWorked <= 40){
    grossPay = payRate + hoursWorked;
}
else {
    grossPay = (40 * payRate) + ((hoursWorked - 40) * payRate * 1.5);
}
var message = "worked";

var message = " worked " + hoursWorked + " hours for " + grossPay;

console.log(message);