let timeblockEl = document.querySelector('#currentHour');
let taskEl = document.querySelector('.form-control').value;
let saveBtn = document.querySelector('.btn');

// let userInput = localStorage.setItem('inlineFormInputGroupUsername2');

// Time Section
let today = moment();
//let hourFormatted = today.format("HH")
$("#currentDay").text(today.format('MMM Do, YYYY'));
let currentTime = today.hours()
// Current time
// let currentTime = moment().format('LTS');
// $("#currentHour").text(moment(today).format('hh:mm:ss'));
// // Past time
// let pastTime = moment().startOf('hour').fromNow();
// // moment().subtract(1, 'hour');
// // Future time
// let futureTime = moment().add(1, 'hour');
// console.log(currentTime, pastTime, futureTime);
console.log(currentTime)


// Colour Coding
$('.card-header').each(function() {
    let cardTime = $(this).data('time')
    console.log(cardTime)
    if (currentTime > cardTime) {
        $(this).parent().siblings('.input-group').children('.form-control').addClass('past')
    } else if (currentTime === cardTime) {
        console.log('present')
        $(this).parent().siblings('.input-group').children('.form-control').addClass('present')
    } else {
        $(this).parent().siblings('.input-group').children('.form-control').addClass('future')
    }
});

// Store user's input
$('.btn').on('click', function() {
    let text = $(this).parent().siblings('.input-group').children('.form-control').val()
    console.log(text)
});


// Put input into local storage


///////////////////////////////////////////////////



// Save user input on screen
// localStorage.getItem('inlineFormInputGroupUsername2');
// localStorage.setItem('inlineFormInputGroupUsername2');
function renderTasks() {
    let taskInput = localStorage.getItem('inlineFormInputGroupUsername2')
        
}

taskButton.addEventListener("click", function(event)
 {
    event.preventDefault();
    localStorage.setItem(taskInput)
 });

// To set the input section based on colour
// Past: taskEl.classList.add('past)
// Present: taskEl.classList.add('present)
// Future: taskEl.classList.add('future)
// function setTimeStatus() {
//     // let plannerTime = document.querySelector('#currentHour');
    
// function timeblockColor() {
//     if (currentTime) {
//         console.log('present');
//         taskEl.classList.add('.present')
//     } else if (pastTime) {
//         console.log('past');
//         taskEl.classList.add('.past')
//     } else {
//         console.log('future');
//         taskEl.classList.add('.future')
//     }
// } 

// setTimeStatus();

//if currentHour < dataAttrValue)
// {
//     then apply my css classes
// }

// use forEach to loop through 'data-time' id