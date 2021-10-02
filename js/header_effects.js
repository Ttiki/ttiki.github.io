window.onload = function() {
    randomIconImg()
}
/* -------------------------------------------------------------------------- */
/*              PURPOSE: Parallax effect for the background image             */
/*                                of the header                               */
/* -------------------------------------------------------------------------- */
document.getElementById("parallax-body").onscroll = function parallaxScrollBgImg() { 
    let scrolltotop = document.scrollingElement.scrollTop
    let target = document.getElementById("parallax-header")
    let xvalue = "center"
    let factor = 0.5
    let yvalue = scrolltotop * factor
    target.style.backgroundPosition = xvalue + " " + yvalue + "px"
}

/* -------------------------------------------------------------------------- */
/*                       PURPOSE: Dropdown menu function                      */
/* -------------------------------------------------------------------------- */
document.addEventListener('click', e => {
    const isDropdownBtn = e.target.matches("[data-dropdown-button]")
    if(!isDropdownBtn && e.target.closest('[data-dropdown]') != null) return
    
    let currentDropDown
    if(isDropdownBtn){
        currentDropDown = e.target.closest('[data-dropdown]')
        currentDropDown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown =>{
        if(dropdown === currentDropDown)return
        dropdown.classList.remove('active')
    })
})

/* -------------------------------------------------------------------------- */
/*                 PURPOSE: Randomly select an icon image from                */
/*                   resrouces>media>img>icons>ttiki folder                   */
/*              And assign it to the icon logo in the header div              */
/* -------------------------------------------------------------------------- */
function randomIconImg(){
    //Select img eleme,t
    const icon_imgDiv = document.getElementById("ttiki-logo-header-icon")

    //Chose a random number between 0 & num of img element inside dir 
    let randIcon = Math.floor(Math.random() * s_ttikiIconsJson.icons.length)
    console.log("Random image index = " + randIcon)

    const icon = s_ttikiIconsJson.icons[randIcon] //We asign the chosen img for facility
    console.log(icon)

    //We change the img element's attributes (alt & src) to change our img element.
    icon_imgDiv.setAttribute("alt", icon.alt)
    icon_imgDiv.setAttribute("src", s_ttikiIconsJson.defaultPath + icon.name)
}

/* -------------------------------------------------------------------------- */
/*                   PURPOSE: Open or closes the mobile nav                   */
/* -------------------------------------------------------------------------- */
function openNav() {
  document.getElementById("mobile-nav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobile-nav").style.width = "0";
}