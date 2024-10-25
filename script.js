console.log("Javascript");

async function generateCards() {
    let cards = await fetch(`http://127.0.0.1:3000/alldresses/`)
    let response = await cards.text()
    let div = document.createElement('div')
    div.innerHTML = response
    console.log(div);
    let anchors = div.getElementsByTagName('a')
    console.log(anchors);
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
        if (e.href.includes('/alldresses/')) {
            let folder = e.href.split('/alldresses').slice(1);
            console.log(folder);
            let cards = await fetch(`http://127.0.0.1:3000/alldresses${folder}info.json`)
            let response = await cards.json()
            let collectionContainer = document.querySelector(".collection-container")
            collectionContainer.innerHTML = collectionContainer.innerHTML + `<div class="collection-cards">
            <img src="./alldresses${folder}cover.webp" alt="">
            <p>${response.title}</p>
            </div>`
        }
    }
    // return response
}

async function main() {
    await generateCards()
}

main()