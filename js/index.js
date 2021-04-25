//Products data array//
const productsData = [
    {
        id:1,
        name:`Eletric Guitar - Stratocaster Black/Red`,
        category:`eletric guitar`,
        price:`$179.00`,
        details:`The archetypical Stratocaster is a solid-body electric guitar with a contoured asymmetric double-cutaway...`,
        img:[`strato.jpg`,`strato_back.jpg`,`strato-white.jpg`,`strato-red.jpg`],
        color:[`red`,`white`,`black`],
        type:[`RH`,`LH`],
        


    }
]

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
theGallery.addEventListener(`click`, setThumb)