const span = document.querySelector('header .present-year' ) //getting the span element
const year = new Date().getFullYear(); //How to get year and put it in a variable
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
//Function to change colors
function changeColor() {
    span.textContent = year; //putting the year as the text content of the span element
     //function to generate random number
    function generateRandomColors() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16); //how to generate random colors in hexadecimal, base 16
        return randomColor;
    }
    // timer for changing the colors
    setInterval(function(){
        span.style.color ="#" + generateRandomColors();
    }, 1000)
}
changeColor();
//Function to set date and time
function dateAndTime() {
    const dateAndTime = document.querySelector('header p');
    let time = new Date();
    let monthNum = time.getMonth();
    let day = time.getDay();
    let hours = time.getHours().toLocaleString();
    let minutes = time.getMinutes().toLocaleString();
    let seconds = time.getSeconds().toLocaleString();
    dateAndTime.textContent = `${month[monthNum]} ${day}, ${year} ${hours}:${minutes}:${seconds}`;
}
setInterval(dateAndTime, 1000);
;