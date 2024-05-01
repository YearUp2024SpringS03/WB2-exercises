"use strict"

// Declare Known values.
var federalTaxRate = 0.23;
var monthlySalary = 1000;

// Establish what needs to be calculated
var amountWithinId;

// Do the calculations.
amountWithinId = monthlySalary * federalTaxRate
amountWithinId = Math.round(amountWithinId * 100) /100;
//Display the results.
var message = "amount Withtheid: " + amountWithinId;

console.log(message);
