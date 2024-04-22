let typed = new Typed((".skills"), {
    strings : ["Web Developer", "Frontend Developer"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
})

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

// Get the menu element
const menu = document.getElementById('menu');

// Function to handle scroll event
function handleScroll() {
    // Check if the scroll position is greater than 0
    if (window.scrollY > 0) {
        // Add a CSS class to fix the position of the menu
        menu.classList.add('fixed', 'top-5', 'right-10', 'z-50', 'bg-white', 'shadow-md');
    } else {
        // Remove the CSS class to restore the default position of the menu
        menu.classList.remove('fixed', 'top-0', 'z-50', 'bg-white', 'shadow-md');
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
    all.style.backgroundColor = "rgb(15 23 42)";
    all.style.color = "white";
    design.style.backgroundColor = "white";
    design.style.color = "black";
    dev.style.backgroundColor = "white";
    dev.style.color = "black";
}

function design () {
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
    all.style.backgroundColor = "white";
    all.style.color = "black";
    design.style.backgroundColor = "rgb(15 23 42)";
    design.style.color = "white";
    dev.style.backgroundColor = "white";
    dev.style.color = "black";
}

function development () {
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
    all.style.backgroundColor = "white";
    all.style.color = "black";
    design.style.backgroundColor = "white";
    design.style.color = "black";
    dev.style.backgroundColor = "rgb(15 23 42)";
    dev.style.color = "white";
}



