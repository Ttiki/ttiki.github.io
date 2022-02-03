const outputList = document.querySelector("#main-library")
const inputSearchBar = document.getElementById("game-collection_search-bar")
    // const submitSearchBar = document.querySelector("#game-collection_search-submit")

var gameList = []

//Create element and render
function renderGame(doc) {
    //We create both elements
    let link = document.createElement('a')
    let linkImg = document.createElement('img')

    //Attributes for link
    link.setAttribute('href', doc.data().link)
    link.setAttribute('id', doc.id)
    link.setAttribute('alt', '_blank')
    link.setAttribute('title', doc.data().name)
    link.setAttribute('class', 'snboard-link link-panel')

    //Attribute for img
    linkImg.setAttribute('src', doc.data().img)
    linkImg.setAttribute('alt', doc.data().name)
    linkImg.setAttribute('class', 'snboard-link-img')

    //We add the image as a child of the link
    link.appendChild(linkImg)

    //We add the link-panel to the correct list display div
    outputList.appendChild(link)

    displayGame(link)

    return link
}

//Getting data
firestoreDb.collection('library').orderBy('name').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
        renderGame(doc)
    })
})

//Getting data REAL-TIME
firestoreDb.collection('library').orderBy('name').onSnapshot(snapshot => {
    let changes = snapshot.docChanges()
    let i = 0
    changes.forEach(change => {
        //console.log(change.doc.data())

        //Only show 'added' doc and not removed ones
        if (change.type == 'added') {
            gameList.push(renderGame(change.doc))
            i++
        }
    })
})

function searchTable() {
    // Declare variables
    var filter, i

    filter = inputSearchBar.value.toUpperCase()
    console.log(filter)
        // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < gameList.length; i++) {
        if (gameList[i].getAttribute("title").toUpperCase().indexOf(filter) > -1) {
            displayGame(gameList[i])
        } else {
            hideGame(gameList[i])
        }
    }
}

function displayGame(link) {
    link.setAttribute("style", "display:block")
}

function hideGame(link) {
    link.setAttribute("style", "display:none")
}