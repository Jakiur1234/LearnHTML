  //auto code value give 0
  localStorage.setItem("example","");
  //Show the title text
  var p = document.querySelector(".header-title");
  p.innerHTML = document.title;

  function openNav() {
    document.getElementById("mySidenav").style.width = "80%";
    overlay.style.display = "block";
    crossbtn.style.display = "block";
  }
