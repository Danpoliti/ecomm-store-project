const bigImage = document.querySelector(`#bigimage`)
const theGallery = document.querySelector(`.product`)


const setThumb = function (event) {
    const whichOne = event.target

   if (whichOne.matches(`#thumb`)) {
    const imgSrc = whichOne.getAttribute(`src`)
    const imgAlt = whichOne.getAttribute(`alt`)

    bigImage.setAttribute(`src`, imgSrc)
    bigImage.setAttribute(`alt`, imgAlt)
   }
}
theGallery.addEventListener(`mouseover`, setThumb)


const navToggle = function() {
    document.querySelector(`.navigation`).classList.toggle(`hidden`)
}

document.querySelector(`.nav-toggle`).addEventListener(`click`,navToggle)