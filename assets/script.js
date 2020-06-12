$(document).ready(function() {
var submit = document.getElementsByTagName('button');
    
var currentDay = moment().format('MMMM DD, YYYY');
$('#currentDay').text(currentDay);
    
var hoursArray = ['9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm'];
    
function timeblockCreation(){
    for (i = 0; i < hoursArray.length; i++){
        var newRow = $('<div>')
        $(newRow).attr({class: 'row', id: 'row' + (i + 1) });
        $('.container').append(newRow);
        
        var hour = $("<div>");
        $(hour).attr({ class: "hour col-1", id: 9 + i }).text(hoursArray[i]);
        
        var description = $("<div>");
        $(description).attr("class", "description col-10");
        var descriptionRow = $("<div>").attr({ class: "row", id: "description" + (i + 1) });
        $(description).append(descriptionRow);
        
        var textArea = $("<textarea>").attr({ class: "col-12", id: "textareabutton" + (i + 1) }).text(localStorage.getItem("myEventbutton" + (i + 1)));
        $(descriptionRow).append(textArea);
    
        var saveBtn = $("<button>");
        $(saveBtn).attr({ class: "saveBtn col-1", id: "button" + (i + 1) }).text("Save Appt");
        $(newRow).append(hour, description, saveBtn);
    };
};

timeblockCreation();

$('button').click(function () {
    event.preventDefault();
    var currentID = $(this).attr('id')
    var toStore = $(('#textarea' + currentID)).val();
    localStorage.setItem(('textarea' + currentID), toStore);
});

$('textarea').keyup(function () {
    event.preventDefault();
    var toStore = $(this).val();
    var thisEvent = $(this).attr('id');
    localStorage.setItem(thisEvent, toStore);
});




function findTime() {
    for (var i = 0; i < hoursArray.length; i++){
        var realTime = moment().hour(9 + i);
        if (moment().isBefore(realTime)) {
            $('#description' + (i + 1)).addClass('future');
        } else if (moment().isAfter(realTime)) {
            $('#description' + (i + 1)).addClass('past');
        } else {
            $('#description' + (i + 1)).addClass('present');
        }
    };
};

findTime();

    
$('clear-contents').click(function () {
    localStorage.clear();
    location.reload();
});


});