var s_rulesJson = loadJson("resources/rules.json")
var s_ttikiIconsJson = loadJson("resources/ttiki_icons.json")

/* -------------------------------------------------------------------------- */
/*                      Load json file into a string var                      */
/* -------------------------------------------------------------------------- */
function loadJson(jsonFile) {
    let xmlhttp = new XMLHttpRequest()
    xmlhttp.open("GET", jsonFile, false)
    xmlhttp.send()
    if (xmlhttp.status==200) {
        var result = xmlhttp.responseText
    }
    return JSON.parse(result)
}

/* -------------------------------------------------------------------------- */
/*       Purpose: Read splash.txt and writes every entry inside the arr       */
/*              This is just to load the list inside the script!              */
/*            Each string still needs to be treated (effect, etc.)            */
/* -------------------------------------------------------------------------- */
function loadTxtFile(filePath) {
    let result = []
    let xmlhttp = new XMLHttpRequest()
    xmlhttp.open("GET", filePath, false)
    xmlhttp.send()
    if (xmlhttp.status==200) {
        const lines = xmlhttp.responseText.split('\n')
        const linesLength = lines.length 
        for(let line = 0; line < linesLength; line++){
            result.push(lines[line])
        }
      
    }
    return result
}