// Check if pickup location and destination are the same
document.addEventListener("DOMContentLoaded", function () {
    console.log('DOM is fully loaded');
    document.getElementById("onclick").addEventListener("click", function(event) {
        event.preventDefault();

        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let phoneNumber = document.getElementById("phoneNumber").value;
        let pickupLocation = document.getElementById("pickupLocation").value;
        let destination = document.getElementById("destination").value;
        let travelDate = document.getElementById("travelDate").value;

        if (pickupLocation === destination) {
            alert("Pickup Location and Destination cannot be the same!");
        } else {
            alert(`Hello ${firstName} ${lastName}, thank you for booking your ticket from ${pickupLocation} to ${destination} on ${travelDate}!`);
        }
    });
});


//book your journey button onclick scroll to booking form
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("scrollToBooking").addEventListener("click", function () {
        document.getElementById("book").scrollIntoView({ behavior: "smooth" });
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.counter');
    let hasAnimated = false;

    // Function to animate the counters
    function animateCounters() {
        // Only run the animation once
        if (hasAnimated) return;
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let current = 0;
            const increment = target / 100; // Adjust the speed of animation (target / steps)

            function updateCounter() {
                current += increment;
                if (current <= target) {
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target; // Ensure the final value is exactly the target
                }
            }
            updateCounter();
        });

        // Mark the counters as animated
        hasAnimated = true;
    }

    // Use Intersection Observer to detect when the section is in view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters(); // Trigger animation when section is in view
                observer.disconnect(); // Stop observing after animation starts
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    observer.observe(document.getElementById('our-numbers'));
});












