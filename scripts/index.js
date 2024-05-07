// Add the 'active' class to the navbar elements on click

const links = document.querySelectorAll('.main-navbar a');

links.forEach(link => {
    link.addEventListener("click", function() {
        links.forEach(link => {
            link.classList.remove('active');    
        })
        this.classList.add('active');
    })
})

// Burger Menu added class for opening

const editNav = () => {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
