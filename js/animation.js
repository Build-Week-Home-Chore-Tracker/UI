function hideMenu() {
  let toggleNav = document.getElementById("navbox");
  let toggleHideBox = document.getElementById("hidebox");
  let toggleHideBox2 = document.getElementById("hidebox2");
  let toggleHideBox3 = document.getElementById("hidebox3");
  let toggleHideBox0 = document.getElementById("hidebox0");

//  toggleNav.style.display = "none";

  if (toggleNav.style.display === "none" || toggleHideBox.style.display === "none" ) {
    toggleNav.style.display = "flex";
    toggleNav.style.flexFlow = "column";
    toggleHideBox0.style.display = "flex";
    toggleHideBox.style.fontSize = "4rem";
    toggleHideBox.style.display = "inline-block";
    toggleHideBox2.style.fontSize = "4rem";
    toggleHideBox2.style.display = "inline-block";
    toggleHideBox3.style.fontSize = "4rem";
    toggleHideBox3.style.display = "inline-block";
  }
  else {
    toggleHideBox0.style.display = "none";
    toggleHideBox.style.display = "none";
    toggleHideBox.style.fontSize = "2.2rem";
    toggleHideBox2.style.display = "none";
    toggleHideBox2.style.fontSize = "2.2rem";
    toggleHideBox3.style.display = "none";
    toggleHideBox3.style.fontSize = "2.2rem";
    toggleNav.style.flexFlow = "row";
  }
}
