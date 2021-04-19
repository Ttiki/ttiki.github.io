const outputList= document.querySelector("#main-library");
const inputSearchBar = document.querySelector("#game-collection_search-bar");
// const submitSearchBar = document.querySelector("#game-collection_search-submit");

var gameList = [];

//Create element and render
function renderGame(doc){
    //<a href="https://ttiki-blog.blogspot.com/" alt="_blank" title="Ttiki's Blog" class="snboard-link link-panel">
    //  <img src="resources\media\img\sn\ttiki-blog.png" alt="Ttiki's Blog" class="snboard-link-img" />
    //</a>

    //We create both elements
    let link = document.createElement('a');
    let linkImg = document.createElement('img');

    //Attributes for link
    link.setAttribute('href', doc.data().link);
    link.setAttribute('id', doc.id);
    link.setAttribute('alt', '_blank');
    link.setAttribute('title', doc.data().name);
    link.setAttribute('class', 'snboard-link link-panel');

    //Attribute for img
    linkImg.setAttribute('src', doc.data().img);
    linkImg.setAttribute('alt', doc.data().name);
    linkImg.setAttribute('class', 'snboard-link-img');

    //We add the image as a child of the link
    link.appendChild(linkImg);

    //We add the link-panel to the correct list display div
    outputList.appendChild(link);
}

//Getting data 
// firestoreDb.collection('library').orderBy('name').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         console.log(doc.data());
//         renderGame(doc);
//     })
// })

//Getting data REAL-TIME
firestoreDb.collection('library').orderBy('name').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        console.log(change.doc.data());

        //Only show 'added' doc and not removed ones
        if(change.type == 'added'){
            gameList.push(change.doc);
            renderGame(change.doc);
        }
    })
})

inputSearchBar.addEventListener('input', function () {
    for(let i = 0; i < gameList.length; i){
        if(this.value.test(gameList[i].doc.data().name)){
            renderGame(gameList[i].change.doc);
        }
    }
});