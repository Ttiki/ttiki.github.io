const textParagraph = document.getElementsByClassName("text-format")
const textParagraphRandom = document.getElementsByClassName("c-k")
const textParagraphDate = document.getElementsByClassName("c-n")

const formattingRulesTable = document.getElementById("formatting-rules-table")
/* -------------------------------------------------------------------------- */
/*          Pupose: scan every tag with a class name of "text-format"         */
/*                               Then format it.                              */
/* -------------------------------------------------------------------------- */
if(formattingRulesTable != null){
    console.log("Formatting rule table found!")
    populateTable()
}

Object.entries(textParagraph).forEach(paragraph => {
    const paragraphText = paragraph[1].innerText
    paragraph[1].innerHTML = readString(paragraphText)
})

/* -------------------------------------------------------------------------- */
/*            Purpose: read every <span> with a class name of "c-k"           */
/*                         to randomize its character                         */
/* -------------------------------------------------------------------------- */
window.onload = setInterval(function(){
    Object.entries(textParagraphRandom).forEach(paragraph => {
        const paragraphText = paragraph[1].innerText
        paragraph[1].innerHTML = stringRandomizer(paragraphText)
    })
    Object.entries(textParagraphDate).forEach(paragraph=>{
        const paragraphText = paragraph[1].innerText
        paragraph[1].innerHTML = stringToDate(paragraphText)
    })
}, 20)

/* -------------------------------------------------------------------------- */
/*      Purpose: Read a string, then format it if it's using "§" symbols.     */
/*   This function also reads a json file containing every "§" rules to add   */
/*                         correct <span> to the code.                        */
/* -------------------------------------------------------------------------- */
function readString(string){

    //If no string as arg => exit
    if(string == undefined){
        console.log("Missing splash string as arg") 
        return false
    }
    const stringLength = string.length
    let splicedString = []
    let stringSlice = []
    let curChar
    let code = string
    let isNeedFormat = false

    //Cutting our string into slices for each different § rule encounter.
    for(let charPos = 0; charPos <= stringLength-1; charPos++){
        curChar = string.charAt(charPos)

        if(curChar == "§"){
            isNeedFormat = true
            code = ""
            splicedString.push(stringSlice)
            stringSlice = []
        }
        stringSlice.push(curChar)
    }   
    splicedString.push(stringSlice)

    if(isNeedFormat){
        //Reading through all the different rules in the json and formatting each slice.
        splicedString.forEach(slice => {
            Object.entries(s_rulesJson.rules).forEach(rule => {
                //If rule encounter
                if(rule[1].placeholder == slice[0] + slice[1]){ 
                    //Formatting
                    console.log("%cTRUE, FORMATING", "font-weight: bold")
                    slice.splice(0, 2)
                    slice.unshift(rule[1].code)
                    slice.push("</span>")
                }
            })
            //We compile each formatted slice into the final code string
            code += slice.join('') 
        })
    }   


    return code
}

/* -------------------------------------------------------------------------- */
/*    Purpose: Read from a random char library to change §k formated text.    */
/*               Avoid as much as possible as using the §k as it              */
/*                         needs to run every "frame"                         */
/* -------------------------------------------------------------------------- */
function stringRandomizer(string){
    //If no string as arg => exit
    if(string == undefined){
        console.log("Missing splash string as arg") 
        return false
    }
    const randCharArr = loadTxtFile("resources/randChar.txt")
    const charLibraryLength = randCharArr.length

    const stringLength = string.length

    let newString = []
    let randChar


    for(let i = 0; i < stringLength; i++){
        randChar = Math.floor(Math.random() * charLibraryLength)
        newString[i] = randCharArr[randChar]
    }

    return newString.join('').replace(/\s+/g, '')
}
/* -------------------------------------------------------------------------- */
/*                   PURPOSE: Change string to current date                   */
/* -------------------------------------------------------------------------- */
function stringToDate(string){
    //If no string as arg => exit
    if(string == undefined){
        console.log("Missing splash string as arg") 
        return false
    }
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    let date = new Date()
    string = date.toLocaleDateString("en-US", options)
    return string
}

/* -------------------------------------------------------------------------- */
/*             Purpose: Automaticaly write the rules table for the            */
/*                           formatting rules page.                           */
/*             Populates the table automaticaly with the code, an             */
/*                          example and a description                         */
/* -------------------------------------------------------------------------- */
function populateTable(){
    console.log("Populating...")
    const formattingRulesTableBody = document.getElementById("formatting-rules-table-body")

    Object.entries(s_rulesJson.rules).forEach(rule => {
        //Insert a new row for the new rule
        let row = formattingRulesTableBody.insertRow()

        //Insert new cells for the code, example and description
        let code = row.insertCell(0)
        code.innerHTML = "<kbd>" + rule[1].placeholder + "</kbd>"
        let example = row.insertCell(1)
        example.innerHTML = rule[1].code + "TEST</span>"
        let description = row.insertCell(2)
        description.innerHTML = rule[1].description
    })
}