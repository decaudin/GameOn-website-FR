// Add the 'active' class to the navbar elements on click

const links = document.querySelectorAll('.main-navbar a');

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        links.forEach(link => {
            link.classList.remove('active');    
        })
        this.classList.add('active');
    })
})

// Burger Menu

const editNav = () => {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
