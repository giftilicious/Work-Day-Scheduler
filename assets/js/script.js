let timeblockEl = document.querySelector('#currentHour');

// Time Section
let today = moment();
$("#currentDay").text(today.format('MMM Do, YYYY'));

let currentTime = today.hours()


// Colour Coding
$('.card-header').each(function () {
    let cardTime = $(this).data('time')
    if (currentTime > cardTime) {
        $(this).parent().siblings('.input-group').children('.form-control').addClass('past')
    } else if (currentTime === cardTime) {
        $(this).parent().siblings('.input-group').children('.form-control').addClass('present')
    } else {
        $(this).parent().siblings('.input-group').children('.form-control').addClass('future')
    }
});

// Store user's input // Put input into local storage
$('.btn').on('click', function (event) {
    let text = $(this).parent().siblings('.input-group').children('.form-control').val()
    localStorage.setItem('Task', text);
    event.preventDefault();
});
