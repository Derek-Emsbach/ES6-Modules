export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"
    document.title = 'Olive'
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    let div = document.body.children[0]
    let newName = div.children[0]
    newName.innerText = 'Cory'
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

     let div = document.body.children[1]
     let paragraphOne = div.children[1]
    paragraphOne.innerText = 'Dogs and babies are really cool!'
    let paragraphTwo = div.children[2]
    paragraphTwo.innerText = 'San Diego is spanish for a whales vagina'
}
