var dateToday = document.querySelector('#currentDay');
var container = document.querySelector('.container')
var taskSlot = document.createElement('p')

var workHours = ['8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '11:16pm', '11:45pm']

var today = moment(). format("dddd, MMMM Do, YYYY");
var timeNow = moment(moment().format('LT'), 'h:mma');


// fill current date in top portion
dateToday.textContent = today;

// set up page with 8 hour work day increments

var buildTimes = function() {
  
  for (let i = 0; i < workHours.length; i++) {
    var row = document.createElement('div');
    row.className = 'row'
    container.appendChild(row)

    var smallCard = document.createElement('div')
    smallCard.className = 'col-2 card box1';
    // console.log(timeNow > moment(workHours[i],'h:mma'))
    row.appendChild(smallCard)


    var timeSlot = document.createElement('p')
    timeSlot.textContent = workHours[i];
    smallCard.appendChild(timeSlot)

    var largeCard = document.createElement('div')
    largeCard.className = 'col-9 card box2';


  // formatting for time past/present/future
    if(timeNow > moment(workHours[i], 'h:mma')) {
      smallCard.classList.add('bg-secondary');
      largeCard.classList.add('bg-secondary');
    } else if (timeNow < moment(workHours[i], 'h:mma')) {
      smallCard.classList.add('bg-success');
      largeCard.classList.add('bg-success');
    } else if (timeNow === moment(workHours[i], 'h:mma')) {
      smallCard.classList.add('bg-warning');
      largeCard.classList.add('bg-warning');
    }

    largeCard.innerHTML = '<p></p>'
    // appendChild(taskSlot)
    // taskSlot.textContent = "Testing";
    row.appendChild(largeCard);
    
   


    var button = document.createElement('div')
    button.className = 'col-1 card bg-info'
    row.appendChild(button)

    var saveImage = document.createElement('img')
    saveImage.src = '././floppy-disk.png'
    saveImage.className = 'color-1'
    button.appendChild(saveImage)
    // oops(i);
  }
};

buildTimes();

// create input fields
// task text was clicked
$(".row").on("click", "p", function() {
  // get current text of p element
  var text = $(this)
    .text()
    .trim();

  // replace p element with a new textarea
  var textInput = $("<textarea>").addClass("form-control").val(text);
  $(this).replaceWith(textInput);

  // auto focus new element
  textInput.trigger("focus");
});

// editable field was un-focused
$(".list-group").on("blur", "textarea", function() {
  // get current value of textarea
  var text = $(this).val();
}
)
