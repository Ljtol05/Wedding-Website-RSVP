document.getElementById("rsvpForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default submission

  // Validate Guest Count
  const guests = document.getElementById("guests").value;
  if (guests < 1 || guests > 5) {
    alert("Guest count must be between 1 and 5.");
    return;
  }

  // Show Loader
  const loader = document.getElementById("loader");
  const confirmationMessage = document.getElementById("confirmationMessage");
  loader.style.display = "block";

  // Submit Form Using Fetch API
  fetch(this.action, {
    method: "POST",
    body: new FormData(this),
    mode: "no-cors" // Necessary for Google Forms
  })
  .then(() => {
    // Hide Loader
    loader.style.display = "none";

    // Show Confirmation Message
    confirmationMessage.style.display = "block";

    // Reset Form
    this.reset();
  })
  .catch((error) => {
    loader.style.display = "none";
    alert("Something went wrong. Please try again later.");
    console.error("Form submission error:", error);
  });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Preserve Scroll Position on Reload
window.addEventListener('beforeunload', function () {
  sessionStorage.setItem('scrollPosition', window.scrollY);
});

window.addEventListener('load', function () {
  if (sessionStorage.getItem('scrollPosition') !== null) {
    window.scrollTo(0, parseInt(sessionStorage.getItem('scrollPosition')));
    sessionStorage.removeItem('scrollPosition');
  }
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function () {
    localStorage.setItem('scrollPosition', window.scrollY);
  });
});

window.addEventListener('load', function () {
  if (localStorage.getItem('scrollPosition') !== null) {
    window.scrollTo(0, parseInt(localStorage.getItem('scrollPosition')));
    localStorage.removeItem('scrollPosition');
  }
});

// Set the date we're counting down to
var countDownDate = new Date("Jan 18, 2025 13:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the elements with id="days", id="hours", id="minutes", id="seconds"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);