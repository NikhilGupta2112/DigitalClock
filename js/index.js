// demo comment for understanding bug fixing and gi working
 var format24Hrs = true;
var previousDate = '';
var shdatechecker = true;
var shsecondchecker = true;
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
  return dateString;
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
  // var formattedStringesecon
   if (shsecondchecker===true)
  return formattedString;
   else return
}

function changeButtonText(id,a) {
  document.getElementById(id).innerText=a;
}

function changeTimeFormatAndButtonText() {
    format24Hrs=!format24Hrs;
    if(format24Hrs===false)
      changeButtonText("ctf","change to 24 hour format");
    else {
      changeButtonText("ctf","change to 12 hour format");
    }
}

function hideSecondAndButtonText()  {
  var date = new Date();
  var ss;
  shsecondchecker=!shsecondchecker;
  if(shsecondchecker===false) {
  }
}

function hideDateAndButtonText(src) {
  var dateElement = document.getElementById("date");
  var buttonText = '';
  if (src.innerText == "Hide Date") {
     // button text is hide and date is displayed on screen
     // Hence hide date and change text in button to show dateString
     buttonText = 'Show Date';
     dateElement.style.display = "none";
  }
  else {
    buttonText = 'Hide Date';
    dateElement.style.display = "block";
  }
  changeButtonText("ctf1", buttonText);
}
