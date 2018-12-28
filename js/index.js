// demo comment for understanding bug fixing and gi working
var data = {
  format24Hrs:  true,
  previousDate: '',
  hideSeconds:  false
};

function startDigitalClock() {
  startTimmerToExecute();
}

function showCurrentDateAndTime() {
  var date = new Date();
  showCurrentTime(date);
  var currentDate = date.toDateString();
  if (data.previousDate !== currentDate) {
    data.previousDate = currentDate;
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

  if (data.format24Hrs === false) {
    if (h < 12) ampmSuffix=' am';
    else ampmSuffix=' pm';
    if (h < 24 && h > 12||h===0) h = Math.abs(h-12);
  }

  var min=date.getMinutes();
  var sec=date.getSeconds();

  // second's part of formatted string have to be saved in another variable secElement
  // when hideSeconds is true, set secElement to blank.
  // use the secElement in formatted string as it is, because its value has to be taken care of.
  var secElement = " : " + ("0" + sec).slice(-2);
  if (data.hideSeconds === true) secElement = "";

  var formattedString =(("0" + h).slice(-2)) +" : " + (("0" +min).slice(-2)) + secElement + ampmSuffix;

  return formattedString;
}

function changeButtonText(id,a) {
  document.getElementById(id).innerText=a;
}

function changeTimeFormatAndButtonText() {
    data.format24Hrs = !data.format24Hrs;

    if (!data.format24Hrs)
      changeButtonText("ctf","change to 24 hour format");
    else
      changeButtonText("ctf","change to 12 hour format");
}

function hideSecondAndButtonText()  {
    if (data.hideSeconds) {
      // hideSeconds = true implies button text is "Show seconds" and date string "does not show" seconds
      // hence set hideSeconds to false and change text in button to "Hide seconds"
       changeButtonText("ctf2","Hide Seconds");
    }
    else {
      // hideSeconds = false implies button text is "Hide second" and date string "shows" seconds
      // hence set hideSeconds to true and change text in button to "Show seconds"
       changeButtonText("ctf2","Show Seconds");
    }
    data.hideSeconds = !data.hideSeconds;
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
