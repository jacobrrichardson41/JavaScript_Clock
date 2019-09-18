 //We need a way to get the current time and have that be updated each secomd.

 //To do this, we are going to create a function that contains a timer to call itself again each second.
 console.log("test");

 function showTime() {
     var date = new Date(); //This gets us the current date and time
 
     var hour = date.getHours(); //0-23
     var minute = date.getMinutes(); //0-59
     var seconds = date.getSeconds(); //0-59
     var period = "AM";//We're going to assume that we're in AM to start 

     //We need to make sure the hour is properly represented in 12-hr time, and we also need to determine whether we should display AM or PM

     //With our hours being between 0 and 23, 0 would equal 12AM and anything 12 or above is a PM hour

     if(hour ===0){
         period = "AM";
     } else if (hour >= 12) {
         period = "PM";
     }

     if (hour === 0) {// If hour equals 0, change it to 12
         hour = 12;
      }
      if (hour > 12) {
          hour = hour -12;// If hour is greater than 12, subtract 12 from it -13 === 
      }
          hour = ( hour <10) ? ("0" + hour) : hour; //If hour is less than 10, set hour equal to 0 plus the value of the hour, otherwise, keep hour the same by setting it equal to itself 
          minute = ( minute < 10) ? ("0" + minute) : minute;
          seconds = (seconds < 10) ? ("0" + seconds) : seconds;



          //String to store the current time
     var time = hour + ":" + minute + ":" + seconds + " " + period;
      
     document.getElementById("clockDisplay").innerText = time;  

     //GETTING THE DATE

     var dayOfWeek = date.getDay();//Returns a value between 0 and 6 that corrensponds to the current day of the week.
     var dayOfMonth = date.getDate(); //Return the current day in the month (1-31)
     var month = date.getMonth(); //Returns a value between 0 and 11 that corresponds to the current month


     var date = getDayOfTheWeek(dayOfWeek) + ", " + 
     getMonth(month) + " ," + dayOfMonth;
    
     document.getElementById("dateDisplay").innerText = date;





      setTimeout (showTime, 1000); //Schedule the showTime function to be called after 1000ms (1 second)
    }


function getDayOfTheWeek(dayNum) {
    switch (dayNum) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3: 
            return "Wednesday";
        case 4: 
            return "Thursday";
        case 5:
            return "Friday";
        case 6: 
            return "Saturday";
    }
}

function getMonth(monthNum) {
    switch (monthNum) {
        case 0:
            return "January";
        case 1:
            return "Febuary";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7: 
            return "August";
        case 8: 
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";   
    }
}
    
showTime();