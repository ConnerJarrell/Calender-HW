// DOM Ready
$(document).ready(function() {
var submit = document.getElementsByTagName('button');
    
// Moment
var currentDay = moment().format('MMMM DD, YYYY');
// add current day to its html id
$('#currentDay').text(currentDay);
    
var hoursArray = ['9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm'];
    
