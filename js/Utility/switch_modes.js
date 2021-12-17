var now = new Date();
var sunSetTime = new Date();
var sunRiseTime = new Date();

console.log("Actual month is :" + now.getMonth());
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
        sunSetTime.setHours(17);
        break;
}
console.log("Sunset time is: " + sunSetTime.getHours() + " and sunrine is: " + sunRiseTime.getHours());

//We check if the actual date is lower to the sunset hour
if(now.getHours()>sunSetTime.getHours() || now.getHours() < sunRiseTime.getHours()){
    console.log("Switching to night mode!");
    //Set style properties for each day element
    document.documentElement.style.setProperty("--bg-color", "#141414");
    document.documentElement.style.setProperty("--header-img", "url('../resources/media/img/backgrounds/headers/new_header_night.jpg')");
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--article-header", "#303030");
    document.documentElement.style.setProperty("--link-color", "#eee");

    document.documentElement.style.setProperty("--nav-color", "#eee");
    document.documentElement.style.setProperty("--nav-btn-bg-color", "rgba(0,0,0,0)");
    document.documentElement.style.setProperty("--nav-bg", "linear-gradient(180deg, rgba(75,75,75,1) 0%, rgba(50,50,50,1) 75%");


   
}