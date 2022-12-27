var count = 0
const togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#password");
    togglePassword.addEventListener("click", function () {
        // toggle the type attribute
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
        
        // toggle the icon
        this.classList.toggle("bi-eye");
    });

    // prevent form submit
    const form = document.querySelector("form");
    form.addEventListener('submit', function (e) {
        e.preventDefault();
    });

    function popupFunction(){
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }


    // kk
    
    function dropdownActive(){
        var x = document.getElementById("dropdownDiv");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }

    function dropdownActiveMedical(){
      // console.log(count)
      var x = document.getElementById("dropdownDivMedical");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
  }
  
  function dropdownActiveDoctor(){
    var x = document.getElementById("dropdownDivDoctor");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
  }

  // Sidebar
  function myFunction(){
    var element = document.getElementById("main-wrapper");
    element.classList.toggle("sidebarSmall"); 
    // element.classList.toggle("contentLarge");
    
}
    
  