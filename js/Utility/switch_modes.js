var now = new Date();
var sunSetTime = new Date();
var sunRiseTime = new Date();

switch (now.getMonth()) {
    case 6 || 5: //July or June
        sunRiseTime.setHours(6);
        sunSetTime.setHours(22);
        break;
    case 7 || 4: //August or May
        sunRiseTime.setHours(7);
        sunSetTime.setHours(21);
        break;
    case 8 || 3: //September or April
        sunRiseTime.setHours(7);
        sunSetTime.setHours(20);
        break;
    case 9 || 2: //October or March
        sunSetTime.setHours(19);
        break;
    case 11 || 10 || 1 || 0: //November or December
        sunRiseTime.setHours(8);
        sunSetTime.setHours(17);
        break;
    default:
        sunRiseTime.setHours(8);
        sunSetTime.setHours(17); //17
        break;
}
//console.log("Sunset time is: " + sunSetTime.getHours() + " and sunrine is: " + sunRiseTime.getHours());

//We check if the actual date is lower to the sunset hour
if (now.getHours() > sunSetTime.getHours() || now.getHours() < sunRiseTime.getHours()) {
    //Set style properties for each day element
    document.getElementById("themeClass").href = "css/themes/dark.css"
}