// Set the date we're counting down to
var countDownDate = new Date("Jul 19, 2024 19:00:00").getTime();

// Update the count down every 1 second
var countdownFunction = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
    
    // Find the time difference between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the respective elements
    document.querySelector("#date-countdown div:nth-child(1) span").innerText = days;
    document.querySelector("#date-countdown div:nth-child(3) span").innerText = hours;
    document.querySelector("#date-countdown div:nth-child(5) span").innerText = minutes;
    document.querySelector("#date-countdown div:nth-child(7) span").innerText = seconds;
    
    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("date-countdown").innerHTML = "¡Llego el día!";
    }
}, 1000);
