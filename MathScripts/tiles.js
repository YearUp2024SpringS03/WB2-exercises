"use strict";

// Define our variables

var roomWidth = 10, roomLength = 13;



var tileBox = 12



var area = roomWidth * roomLength;


 var numOfBox = Math.ceil(area / tileBox);


 var newnumOfBox = Math.ceil(0.1 * numOfBox) + numOfBox;

 //define the result to display

 var result = ('The number of boxes you need to buy is ' + newnumOfBox + ' boxes.');

 // display the result

 console.log(result)