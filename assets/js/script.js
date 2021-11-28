var dateToday = document.querySelector('#currentDay');
var container = document.querySelector('.container')


var today = moment(). format("dddd, MMMM Do, YYYY");
console.log(today);

var workHours = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM']



dateToday.textContent = today;

var buildTimes = function() {

for (let i = 0; i < workHours.length; i++) {
  var row = document.createElement('div');
  row.className = 'row'
  container.appendChild(row)

  var smallCard = document.createElement('div')
  smallCard.className = 'col-2 card';
  // smallCard.textContent = workHours[i];
  row.appendChild(smallCard)

  var timeSlot = document.createElement('p')
  timeSlot.textContent = workHours[i];
  smallCard.appendChild(timeSlot)

  var largeCard = document.createElement('div')
  largeCard.className = 'col-9 card';
  row.appendChild(largeCard)

  var button = document.createElement('div')
  button.className = 'col-1 card bg-info'
  row.appendChild(button)

  var saveImage = document.createElement('img')
  saveImage.src = '././floppy-disk.png'
  saveImage.className = 'color-1'
  button.appendChild(saveImage)


}
  
}

buildTimes();