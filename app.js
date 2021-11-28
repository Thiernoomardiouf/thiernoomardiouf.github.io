function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

/*   const navbar = document.querySelector(".navbar");
  a = navbar.querySelectorAll("a")
  
  a.forEach(function (element) {
    element.addEventListener("click", function () {
      for (let i = 0; i < a.length; i++) {
        a[i].classList.remove("active")
      }
      this.classList.add("active");
      document.querySelector(".navbar").classList.toggle("show");
    })
  })
  
  
  const hamBurger = document.querySelector(".hamburger");
  
  hamBurger.addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("show");
  }) */