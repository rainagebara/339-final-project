const currentDate = document.querySelector(".currentDate");
days = document.querySelector(".days");
prevNextIcon = document.querySelectorAll(".scroll span");


let date = new Date()
var currYear = date.getFullYear();
var currMonth = date.getMonth();
var currDay = date.getDate();
var currDayofWeek = date.getDay();

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December']
var daysW31 = ['January', 'March' ,'May','July','August', 'October', 'December']
var daysW30 = ['February', 'April', 'June', 'September','November']
function renderCalendarOdd() {
    let lastDateofMonth = new Date(currYear, currMonth +1,0).getDate()
    var liTag = '';
    console.log(lastDateofMonth);
    var firstDay = new Date(currYear + "-" + currMonth + "-01").getDay();
    // firstDay.style.fontFamily = "Cambria, Cochin, Georgia, Times, Times New Roman, serif";
    console.log("This is the first day", firstDay);
    for(let i=0; i<=firstDay+2; i++)  {
console.log(i);
        liTag += '<li></li>';
    }
   

    for (let i = 1; i <= lastDateofMonth; i++) {

        liTag += '<li>' + i + '</li>';
        if(i==currDay) {
            console.log(currDay);
            document.querySelector("li").classList.add('active');
        }
        else {
            console.log(currDay);
            document.querySelector("li").classList.remove('active');
        }
        
    }

console.log(liTag);
    var writingDate = months[currMonth] + ", " + currYear;
    // writingDate.style.color = "navy"
    currentDate.innerHTML = writingDate;

    // writingDate.style.fontStyle = "Cambria";
    // writingDate.style.color = "navy";
    // currentDate.innerText = liTag;
    // currentDate.innerText = ${months[currMonth]} ${currYear};
    days.innerHTML = liTag;
}

function renderCalendarEven() {
    let lastDateofMonth = new Date(currYear, currMonth +1,0).getDate()
    var liTag = '';
    console.log(lastDateofMonth);
    var firstDay = new Date(currYear + "-" + currMonth + "-01").getDay();
    // firstDay.style.fontFamily = "Cambria, Cochin, Georgia, Times, Times New Roman, serif";
    console.log("This is the first day", firstDay);
    for(let i=0; i<=firstDay+1; i++)  {
console.log(i);
        liTag += '<li></li>';
    }
   
    for (let i = 1; i <= lastDateofMonth; i++) {

        liTag += '<li>' + i + '</li>';
        if(i==currDay) {
            console.log('THIS IS THE CURRENT DAY', currDay);
            document.querySelector("li").classList.add('active');
        }
        else {
            console.log(currDay);
            document.querySelector("li").classList.remove('active');
        }
        
    } 
}

window.addEventListener('load', renderCalendarOdd());

document.getElementById("prev").addEventListener("click", function(){
    console.log("prev clicked");
    currMonth = currMonth - 1;
    for (i = 0 ;i< daysW31.length; i++) {
       if (currMonth == daysW31[i]) {
        renderCalendarOdd();
       }
    }
    renderCalendarEven();
});
document.getElementById("next").addEventListener("click", function(){
    console.log("next clicked");
    currMonth = currMonth +1;
    for (i = 0 ;i< daysW31.length; i++) {
       if (currMonth == daysW31[i]) {
        renderCalendarOdd();
        return;
       }
    }
    for (i = 0 ;i< daysW31.length; i++) {
        if (currMonth == daysW30[i]) {
            renderCalendarEven();
            return;
        }
     }
    
});

days.addEventListener("click", function(){
    console.log("a date has been clicked", days);
    document.querySelector(".hidden").classList.remove("hidden");  
});
