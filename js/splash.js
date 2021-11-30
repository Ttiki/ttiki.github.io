/* -------------------------------------------------------------------------- */
/*        GLOBAL Purpose: Display a random splash text on page loading.       */
/*                 Reading from slpash.txt in resources folder                */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                               Var declaration                              */
/* -------------------------------------------------------------------------- */

/*List of splashes
Will bepopulated by splashList.txt later.*/
var splashList = []
var splashListSize
var randSplashNumber
var randSplash
const splashTitle = document.getElementById("splash-subtitles")

if(splashTitle != null){

    /* -------------------------------------------------------------------------- */
    splashList = loadTxtFile("resources/splash.txt")

    splashListSize = splashList.length
    randSplashNumber = Math.floor(Math.random() * splashListSize)
    randSplash = splashList[randSplashNumber]
    console.log("Random splash " + randSplash + " (n°" + randSplashNumber +")")
    delete splashList //Save memory by deleting the arr, we won't need it anymore

    splashTitle.innerHTML = readString(randSplash)
}