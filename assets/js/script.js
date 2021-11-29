var dateToday = document.querySelector('#currentDay');
var container = document.querySelector('.container')

var workHours = ['8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '11:00pm']

var today = moment(). format("dddd, MMMM Do, YYYY");
var timeNow = moment().format('LT', 'h:mma');
// console.log(today);
// console.log(timeNow)



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
    // smallCard.textContent = workHours[i];
    row.appendChild(smallCard)

    var timeSlot = document.createElement('p')
    timeSlot.textContent = workHours[i];
    smallCard.appendChild(timeSlot)

    var largeCard = document.createElement('div')
    largeCard.className = 'col-9 card box2';
    row.appendChild(largeCard)

    var button = document.createElement('div')
    button.className = 'col-1 card bg-info'
    row.appendChild(button)

    var saveImage = document.createElement('img')
    saveImage.src = '././floppy-disk.png'
    saveImage.className = 'color-1'
    button.appendChild(saveImage)
    oops(i);
  }

};
buildTimes();

function oops(time) {
// for (let i = 0; i < workHours.length; i++) {
console.log(workHours[time])
if(timeNow > workHours[time])  {
  document.querySelector('div.box1').classList.add('bg-secondary')
  document.querySelector('div.box2').classList.add('bg-secondary')
} else if(timeNow <= workHours[time]) {
  document.querySelector('div.box1').classList.add('bg-primary')
  document.querySelector('div.box2').classList.add('bg-primary')
}
}
// }




// compare times to determine if time has passed.
// for (let i = 0; i < workHours.length; i++) {
//   if(timeNow > workHours[i]){
//     document.querySelector('.row').classList.add('bg-secondary')
//   } else if (timeNow < workHours[i]) {
//     console.log(`oops, this is wrong`)
//   }
  
//}
