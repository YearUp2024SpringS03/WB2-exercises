"use strict";

//Let's define our known variables

var numPpl = 38;

var vanSeat = 15;

var VanCost = 250;

// Let's define the unknown variables

var numOfVans;

var totalCost;

var costPerPerson;

var collectedCost;

var leftOver;

// define the formulas now

numOfVans = Math.ceil(numPpl / vanSeat);



totalCost = numOfVans * VanCost;


 
costPerPerson = Math.ceil(totalCost / numPpl);



collectedCost = costPerPerson * numPpl

 

leftOver = collectedCost - totalCost


                                
// Let's define the result to display

var result;

result = ('The amount of money we need to charge per person is ' + costPerPerson + '$' + ' , which multiplys out to our ' + numPpl +' number of people to be ' + collectedCost + '$.' + ' The cost for ' + numOfVans + ' number of vans is ' + totalCost + '$.' + ' We have a leftover amount of ' + leftOver + '$ as we have rounded the floating numbers.')

// Let's display the result

console.log(result);