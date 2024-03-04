// Add animation to the skills section when the page is loaded
window.addEventListener('load', function() {
    var skillsSection = document.getElementById('skills');
    skillsSection.classList.add('animated-section');
});
const progressBars = document.querySelectorAll('.progress');

// Animate progress bars
progressBars.forEach(bar => {
    const level = bar.dataset.level;
    bar.style.width = `${level}%`;
});
const profilePic = document.querySelector('.profile-pic img');

profilePic.addEventListener('mouseover', () => {
  profilePic.style.transform = 'scale(1.1)';
});

profilePic.addEventListener('mouseout', () => {
  profilePic.style.transform = 'scale(1)';
});
// Get the elements to animate
const elementsToAnimate = document.querySelectorAll('.animated');

// Function to handle scroll event
function handleScroll() {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Loop through each element to check if it's in the viewport
    elementsToAnimate.forEach(element => {
        // Get the top position of the element relative to the viewport
        const elementTop = element.getBoundingClientRect().top;

        // If the top position of the element is below the viewport, add a class to animate it
        if (elementTop - window.innerHeight < 0) {
            element.classList.add('animate');
        } else {
            // If the element is above the viewport, remove the class
            element.classList.remove('animate');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial call to handleScroll to check if any elements are already in the viewport on page load
handleScroll();
// Get the navbar
const navbar = document.getElementById("navbar");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Function to handle scroll event
function handleScroll() {
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
