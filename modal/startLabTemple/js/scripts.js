import { temples } from "../data/temples.js"
// console.log(temples)

import { url } from "../data/temples.js"
// console.log(url)

const showHere = document.querySelector("#showHere")
//GET A REFERENCE TO THE HTML DIALOG ELEMENT
const mydialog = document.querySelector("#mydialog")
const mytitle = document.querySelector("#mydialog h2")
const myclose = document.querySelector("#mydialog button")
const myinfo = document.querySelector("#mydialog p")
myclose.addEventListener("click", () => mydialog.close())


// loop through the array of json items
function displayItems(data) {
    console.log(data)
    data.forEach(x => { 
        console.log(x)  
        const photo = document.createElement("img") //create image element
        photo.src = `${url}${x.path}` // (must have no spaces) image path from json file (using template literal as boxticks)
        photo.alt=x.name

        // add an event listener to each division on the page.
        photo.addEventListener("click", () => showStuff(x));

        showHere.appendChild(photo)
    }); //end loop
} //end function

//START DISPLAYING ALL ITEMS IN THE JSON FILE

displayItems(temples)

function showStuff(x) {
    mytitle.innerHTML = x.name
    myinfo.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as Temple Number ${x.number}` //with an x as paremeter of array function for 'data'

    mydialog.showModal()
}