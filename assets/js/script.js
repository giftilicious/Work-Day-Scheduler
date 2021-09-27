let taskEl = document.querySelector('.form-control');
let userInput = localStorage.getItem('inlineFormInputGroupUsername2');

// Shows today's date
let today = moment();
$("#currentDay").text(today.format('MMM Do, YYYY'));

// Current time
let currentTime = moment().format('LTS');
$("#currentHour").add('hide') 

// Past time
let pastTime = moment().startOf('hour').fromNow();


// moment().subtract(1, 'hour');

// Future time
let futureTime = moment().add(1, 'hour');


// To set the input section based on colour
// Past: taskEl.classList.add('past)
// Present: taskEl.classList.add('present)
// Future: taskEl.classList.add('future)
function setTimeStatus() {
    // let plannerTime = document.querySelector('#currentHour');
    
    if (currentTime) {
        console.log('present');
        taskEl.classList.add('.present')
    } else if (pastTime) {
        console.log('past');
        taskEl.classList.add('.past')
    } else {
        console.log('future');
        taskEl.classList.add('.future')
    }
}
setTimeStatus();

// Save user input on screen
// localStorage.getItem('inlineFormInputGroupUsername2');
// localStorage.setItem('inlineFormInputGroupUsername2');
