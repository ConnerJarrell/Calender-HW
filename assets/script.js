// DOM Ready
$(document).ready(function() {
var submit = document.getElementsByTagName('button');
    
// Moment
var currentDay = moment().format('MMMM DD, YYYY');
// add current day to its html id
$('#currentDay').text(currentDay);
    
var hoursArray = ['9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm'];
    
function timeblockCreation(){
    for (i = 0; i < hoursArray.length; i++){
        var newRow = $('<div>')
        $(newRow).attr({class: 'row', id: 'row' + (i + 1) });
        $('.container').append(newRow);
        // left side time column
        var hour = $("<div>");
        $(hour).attr({ class: "hour col-1", id: 9 + i }).text(hoursArray[i]);
        // text ares for client input
        var description = $("<div>");
        $(description).attr("class", "description col-10");
        var descriptionRow = $("<div>").attr({ class: "row", id: "description" + (i + 1) });
        $(description).append(descriptionRow);
        //Cells with saved items
        var textArea = $("<textarea>").attr({ class: "col-12", id: "textareabutton" + (i + 1) }).text(localStorage.getItem("myEventbutton" + (i + 1)));
        $(descriptionRow).append(textArea);
        //Save button
        var saveBtn = $("<button>");
        $(saveBtn).attr({ class: "saveBtn col-1 ", id: "button" + (i + 1) }).text("Save to schedule");
        $(newRow).append(hour, description, saveBtn);
    };
};

timeblockCreation();
        
    // store inputs in local storage
    // clear calendar
    
     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // DOM Ready Close
});