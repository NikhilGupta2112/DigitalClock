// demo comment for understanding bug fixing and gi working
var format24Hrs = true;
var previousDate = '';
function startDigitalClock() {
  startTimmerToExecute();
}

function showCurrentDateAndTime() {
  var date = new Date();
  showCurrentTime(date);
  var currentDate = date.toDateString();
  if (previousDate !== currentDate) {
    previousDate = currentDate;
    showCurrentDate(date);
  }
}

function startTimmerToExecute() {
  setInterval(showCurrentDateAndTime, 1000);
}

function showCurrentTime(date) {
  var fs_time =  formatTime(date);
  printDataInDom("time", fs_time);
}

function showCurrentDate(date){
  var dd = date.getDate();
  var dy = toUpperSen(dayName(date.getDay()));
  var mm = toUpperSen(monthName(date.getMonth()));
  var yy = date.getFullYear();
  var dateString = `${dy}, ${dd} ${mm} ${yy}`;
  printDataInDom("date", dateString);
}

function dayName(dy){
    var days = ["sunday", "monday", "tuesday", "wednesday","thursday", "friday", "saturday"];
    return days[dy];
}

function toUpperSen(da){
  return da[0].toUpperCase() + da.substr(1);
}

function monthName(mm) {
    var month = ["january", "february", "april", "may", "march", "june", "july", "august", "september","october","november", "december"];
    return month[mm];
}

function printDataInDom(id, d) {
  document.getElementById(id).innerHTML = d;
}

function formatTime(date) {
  var h = date.getHours();
  var ampmSuffix = '';

  if (format24Hrs === false) {
    if (h < 12) ampmSuffix=' am';
    else ampmSuffix=' pm';
    if (h < 24 && h > 12||h===0) h = Math.abs(h-12);
  }

  var min=date.getMinutes();
  var sec=date.getSeconds();
  var formattedString =(("0" + h).slice(-2)) +" : " + (("0" +min).slice(-2)) +" : " +(("0" + sec).slice(-2))   + ampmSuffix;

  return formattedString;
}

function changeButtonText(a) {
  document.getElementById("ctf").innerText=a;
}

function changeTimeFormatAndButtonText() {
    format24Hrs=!format24Hrs;
    if(format24Hrs===false)
      changeButtonText("change to 24 hour format");
    else {
      changeButtonText("change to 12 hour format");
    }
}
