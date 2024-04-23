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
    const startProjectBtn = document.getElementById('startProjectBtn');
    const moveRightLoader = document.getElementById('moveRightLoader');
    const wrokBtn1 = document.getElementById('wrokBtn1');
    const all = document.getElementById("all");

    // Check if dark mode is active
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Update button background color based on dark mode state
    if (isDarkMode) {
        startProjectBtn.style.backgroundColor = '#ffffff';
        startProjectBtn.style.color = '#000000'; 
        moveRightLoader.style.backgroundColor = 'rgb(15 23 42)';
        wrokBtn1.style.backgroundColor = 'white';
        wrokBtn1.style.color = 'black';
        all.style.backgroundColor = 'white';
        all.style.color = 'black';
    } else {
        startProjectBtn.style.backgroundColor = '#1f2937'; 
        startProjectBtn.style.color = '#ffffff';
        moveRightLoader.style.backgroundColor = 'rgb(243 244 246)';
        wrokBtn1.style.backgroundColor = 'rgb(15 23 42)';
        wrokBtn1.style.color = 'white';
    }
}

const lis = document.querySelectorAll('.li');

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

function handleScroll() {
    // Check if the scroll position is greater than 0
    if (window.scrollY > 0) {
        menu.classList.add('fixed', 'top-5', 'right-10', 'z-50', 'shadow-md');
        // Check if dark mode is enabled
        if (document.body.classList.contains('dark-mode')) {
            menu.style.backgroundColor = 'rgb(15, 23, 42)';
        } else {
            menu.style.backgroundColor = 'white';
        }
    } else {
        menu.classList.remove('fixed', 'top-0', 'z-50', 'shadow-md');
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
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    const project1 = document.getElementById("project1");
    const project2 = document.getElementById("project2");
    const project3 = document.getElementById("project3");
    const project4 = document.getElementById("project4");
    const project5 = document.getElementById("project5");
    const all = document.getElementById("all");
    const design = document.getElementById("design");
    const dev = document.getElementById("dev");

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
    const isDarkMode = document.body.classList.contains('dark-mode');

    const project1 = document.getElementById("project1");
    const project2 = document.getElementById("project2");
    const project3 = document.getElementById("project3");
    const project4 = document.getElementById("project4");
    const project5 = document.getElementById("project5");
    const all = document.getElementById("all");
    const design = document.getElementById("design");
    const dev = document.getElementById("dev");

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
    const isDarkMode = document.body.classList.contains('dark-mode');

    const project1 = document.getElementById("project1");
    const project2 = document.getElementById("project2");
    const project3 = document.getElementById("project3");
    const project4 = document.getElementById("project4");
    const project5 = document.getElementById("project5");
    const all = document.getElementById("all");
    const design = document.getElementById("design");
    const dev = document.getElementById("dev");

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




