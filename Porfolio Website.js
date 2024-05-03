let moveRight = document.getElementById("move-right");

window.addEventListener('scroll', function() {
    let scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercentage = (window.scrollY / scrollableHeight) * 100; 

    if (scrollPercentage >= 100) {
        moveRight.style.width = '100%';
    } else {
        moveRight.style.width = scrollPercentage + '%';
    }
});

let typed = new Typed((".skills"), {
    strings : ["Web Developer", "Frontend Developer"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
})

function toggleDarkMode() {
    // Toggle dark mode class on the body
    document.body.classList.toggle('dark-mode');
    
    // Get the button element
    let icon = document.getElementById('darkModeToggle');
    let startProjectBtn = document.getElementById('startProjectBtn');
    let moveRightLoader = document.getElementById('moveRightLoader');
    let workBtn = document.getElementById('workBtn');
    let all = document.getElementById("all");
    let design = document.getElementById("design");
    let dev = document.getElementById("dev");

    // Check if dark mode is active
    let isDarkMode = document.body.classList.contains('dark-mode');

    // Update button background color based on dark mode state
    if (isDarkMode) {
        icon.style.transform = 'rotate(360deg)';
        startProjectBtn.style.backgroundColor = '#ffffff'; // White background color
        startProjectBtn.style.color = '#000000'; // Black text color
        moveRightLoader.style.backgroundColor = 'rgb(15 23 42)';
        workBtn.style.backgroundColor = 'white';
        workBtn.style.color = 'black';
        all.style.backgroundColor = 'white';
        all.style.color = 'black';
        design.style.backgroundColor = 'rgb(15 23 42)';
        design.style.color = 'white';
        dev.style.backgroundColor = 'rgb(15 23 42)';
        dev.style.color = 'white';
        scrollUp.style.backgroundColor = 'white';
        scrollUp.style.color = 'black';
    } else {
        icon.style.transform = 'rotate(180deg)';
        startProjectBtn.style.backgroundColor = '#1f2937'; // Original dark mode background color
        startProjectBtn.style.color = '#ffffff'; // Original dark mode text color
        moveRightLoader.style.backgroundColor = 'rgb(243 244 246)';
        workBtn.style.backgroundColor = 'rgb(15 23 42)';
        workBtn.style.color = 'white';
        all.style.backgroundColor = 'rgb(15 23 42)';
        all.style.color = 'white';
        design.style.backgroundColor = 'white';
        design.style.color = 'black';
        dev.style.backgroundColor = 'white';
        dev.style.color = 'black';
        scrollUp.style.backgroundColor = 'rgb(15 23 42)';
        scrollUp.style.color = 'white';
    }
}

let lis = document.querySelectorAll('.li');

// Add click event listener to each li
lis.forEach(li => {
    li.addEventListener('click', () => {
        // Reset style for all lis
        lis.forEach(l => {
            l.style.border = "none"; 
            l.style.borderRadius = "0"; 
        });      
        // Change style for the clicked li
        li.style.border = "1px solid rgb(51 65 85)"; 
        li.style.borderRadius = "9999px"; 
    });
});

let scrollUp = document.getElementById('scrollUp');

window.addEventListener('scroll', function() {
    // Get the vertical scroll position
    let scrollPosition = window.scrollY;

    // Check if the scroll position is greater than a certain threshold
    if (scrollPosition > 500) {
        // If so, move the element to the bottom with a negative offset
        scrollUp.style.bottom = '0px';
    } else {
        // If not, reset the element's position
        scrollUp.style.bottom = '-100px'; 
    }
});

function handleScroll() {
    // Check if the scroll position is greater than 0
    if (window.scrollY > 0) {
        // Add a CSS class to fix the position of the menu  
        menu.classList.add('fixed', 'top-5', 'right-10', 'z-50', 'shadow-md');
        // Check if dark mode is enabled
        if (document.body.classList.contains('dark-mode')) {
            // If dark mode is enabled, set the background color to rgb(15, 23, 42)
            menu.style.backgroundColor = 'rgb(15, 23, 42)';
        } else {
            // If dark mode is not enabled, set the background color to white
            menu.style.backgroundColor = 'white';
        }
    } else {
        // Remove the CSS class to restore the default position of the menu
        menu.classList.remove('fixed', 'top-0', 'z-50', 'shadow-md');
        // Reset the background color to its default value
        menu.style.backgroundColor = 'transparent';
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

function formAppear () {
    const form = document.getElementById("form");

    form.style.height = "100%";
    form.style.transition = "height 0.3s ease-in-out";
}

function allProject () {
    // Check if dark mode is active
    let isDarkMode = document.body.classList.contains('dark-mode');

    let project1 = document.getElementById("project1");
    let project2 = document.getElementById("project2");
    let project3 = document.getElementById("project3");
    let project4 = document.getElementById("project4");
    let project5 = document.getElementById("project5");
    let all = document.getElementById("all");
    let design = document.getElementById("design");
    let dev = document.getElementById("dev");

    project1.style.display = "block";
    project2.style.display = "block";
    project3.style.display = "block";
    project4.style.display = "block";
    project5.style.display = "block";

    if (isDarkMode) {
        all.style.backgroundColor = "white";
        all.style.color = "black";
        design.style.backgroundColor = "rgb(15 23 42)";
        design.style.color = "white";
        dev.style.backgroundColor = "rgb(15 23 42)";
        dev.style.color = "white";
    } else {
        all.style.backgroundColor = "rgb(15 23 42)";
        all.style.color = "white";
        design.style.backgroundColor = "white";
        design.style.color = "black";
        dev.style.backgroundColor = "white";
        dev.style.color = "black";
    }
} 

function design () {
    // Check if dark mode is active
    let isDarkMode = document.body.classList.contains('dark-mode');

    let project1 = document.getElementById("project1");
    let project2 = document.getElementById("project2");
    let project3 = document.getElementById("project3");
    let project4 = document.getElementById("project4");
    let project5 = document.getElementById("project5");
    let all = document.getElementById("all");
    let design = document.getElementById("design");
    let dev = document.getElementById("dev");

    project1.style.display = "block";
    project2.style.display = "none";
    project3.style.display = "block";
    project4.style.display = "block";
    project5.style.display = "block";

    if (isDarkMode) {
        all.style.backgroundColor = "rgb(15 23 42)";
        all.style.color = "white";
        design.style.backgroundColor = "white";
        design.style.color = "black";
        dev.style.backgroundColor = "rgb(15 23 42)";
        dev.style.color = "white";
    } else {
        all.style.backgroundColor = "white";
        all.style.color = "black";
        design.style.backgroundColor = "rgb(15 23 42)";
        design.style.color = "white";
        dev.style.backgroundColor = "white";
        dev.style.color = "black";
    }
}

function development () {
    // Check if dark mode is active
    let isDarkMode = document.body.classList.contains('dark-mode');

    let project1 = document.getElementById("project1");
    let project2 = document.getElementById("project2");
    let project3 = document.getElementById("project3");
    let project4 = document.getElementById("project4");
    let project5 = document.getElementById("project5");
    let all = document.getElementById("all");
    let design = document.getElementById("design");
    let dev = document.getElementById("dev");

    project1.style.display = "none";
    project2.style.display = "block";
    project3.style.display = "none";
    project4.style.display = "none";
    project5.style.display = "none";

    if (isDarkMode) {
        all.style.backgroundColor = "rgb(15 23 42)";
        all.style.color = "white";
        design.style.backgroundColor = "rgb(15 23 42)";
        design.style.color = "white";
        dev.style.backgroundColor = "white";
        dev.style.color = "black";
    } else {
        all.style.backgroundColor = "white";
        all.style.color = "black";
        design.style.backgroundColor = "white";
        design.style.color = "black";
        dev.style.backgroundColor = "rgb(15 23 42)";
        dev.style.color = "white";
    }
}
//Get fullyear
const getFullYear = document.getElementById('getFullYear');

document.addEventListener('DOMContentLoaded', () => {
    const getYear = new Date;
    getFullYear.textContent = getYear.getFullYear();
})




