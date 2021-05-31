//Products data array//
const productsData = [
    {
        //Product 1//
        id:`prod01`,
        name:`Eletric Guitar - Stratocaster`,
        category:`guitar`,
        regularPrice:`250.00`,
        price:`$179.00`,
        details:`The archetypical Stratocaster is a solid-body electric guitar with a contoured asymmetric double-cutaway...`,
        img:[`strato.jpg`,`strato.jpg`,`strato-white.jpg`,`strato-red.jpg`],
        color:`black`,
        type:`RH`        
    },
    {
        //Product 2//
        id:`prod02`,
        name:`Acoustic Guitar - Cutway`,
        category:`guitar`,
        regularPrice:`200.00`,
        price:`$138.00`,
        details:`An acoustic guitar is a musical instrument in the guitar family. Its strings vibrate a sound board on a...`,
        img:[`acoustic-cutway-front.jpg`,`acoustic-cutway-front-back.jpg`,`acoustic-cutway-front-back-black.jpg`,`acoustic-cutway-front.jpg`],
        color:`white`,
        type:`LH`     
    },
    {
        //Product 3//
        id:`prod03`,
        name:`Bass Guitar`,
        category:`bass`,
        regularPrice:`250.00`,
        price:`$210.00`,
        details:`The bass guitar, electric bass or simply bass, is the lowest-pitched member of the guitar family...`,
        img:[`bass-guitar.jpg`,`bass-guitar-pink.jpg`,`bass-guitar-back.jpg`,`bass-guitar.jpg`],
        color:`red`,
        type: `RH`       
    },
    {
        //Product 4//
        id:`prod04`,
        name:`Acoustic Bass`,
        category:`bass`,
        regularPrice:`480.00`,
        price:`$399.00`,
        details:`Here is a shot of this product that might entice a user to click and add it to their cart.`,
        img:[`acoustic-bass.jpg`,`acoustic-bass-ivory.jpg`,`acoustic-bass-back.jpg`,`acoustic-bass.jpg`],
        color:`black`,
        type:`RH`    
    },
    {
        //Product 5//
        id:`prod05`,
        name:`Eletric Guitar - Telecaster`,
        category:`bass`,
        regularPrice:`350.00`,
        price:`$285.00`,
        details:`Its simple yet effective design and revolutionary sound broke ground and set trends in electric.`,
        img:[`telecaster.jpg`,`telecaster-white.jpg`,`telecaster.jpg`,`telecaster-back.jpg`],
        color:`red`,
        type:`RH`      
    },
    {
        //Product 6//
        id:`prod06`,
        name:`Eletric Guitar - Les Paul`,
        category:`guitar`,
        regularPrice:`350.00`,
        price:`$275.00`,
        details:`Here is a shot of this product that might entice a user to click and add it to their cart.`,
        img:[`lespaul.png`,`lespaul-white.jpg`,`lespaul-bw.jpg`,`lespaul.png`],
        color:`white`,
        type:`RH`      
    },
]

//Table display//
console.table(productsData);


//Function to display products in the HTML//
const displayProducts = function(){

    let productsList = document.querySelector('.results');
    //let sortValue = document.querySelector(`#sort`).value
    /*
    let sortValue = document.querySelector(`#sort`).value;
    document.querySelector(`#sort`).value = sortValue
                   */
productsList.innerHTML = `<h2 class="subheading">Results</h2>
                        <section class="show-filter">
                        <h4>Show</h4>
                        <label for="sort">Show</label>
                        <select name="sort" id="sort" onchange="displayProducts()">
                            <option value="price-high">Price, highest to lowest</option>
                            <option value="price-low">Price, lowest to highest</option>
                            <option value="newest">Newest releases</option>
                        </select>
                        </section>`


       

       /*
       productsData.sort(function(a, b){
           
            if(sortValue == 'price-high')
            {
                if(parseInt(a.price) > parseInt(b.price))
                    return 1
                if(parseInt(b.price) < parseInt(a.price))
                    return -1
                return 0
            }else if(sortValue == 'price-low')
            {
                if(parseInt(a.price) < parseInt(b.price))
                    return 1
                if(parseInt(b.price) > parseInt(a.price))
                    return -1
                return 0
            }
            return 0
        })
*/

//Color and Type filters//
//conditionals and injection of HTML to index.html//
    productsData.forEach((prod) => {

        let FilterDefault1 = false
        let FilterDefault2 = false

        if(!document.querySelector(`#filter-black`).checked && !document.querySelector(`#filter-white`).checked && !document.querySelector(`#filter-red`).checked)
            FilterDefault1 = true
        
        if(!document.querySelector(`#left-handed`).checked && !document.querySelector(`#right-handed`).checked)
            FilterDefault2 = true

        if(document.querySelector(`#filter-black`).checked && prod.color == document.querySelector(`#filter-black`).value ||
        document.querySelector(`#filter-white`).checked && prod.color == document.querySelector(`#filter-white`).value ||
        document.querySelector(`#filter-red`).checked && prod.color == document.querySelector(`#filter-red`).value || FilterDefault1){

            if(document.querySelector(`#left-handed`).checked && prod.type == document.querySelector(`#left-handed`).value ||
            document.querySelector(`#right-handed`).checked && prod.type == document.querySelector(`#right-handed`).value || FilterDefault2)
            {
                let oneProduct = document.createElement(`article`);
                oneProduct.classList.add(`product`);
                oneProduct.innerHTML =`
                <div class="product-grid">
                <img src="img/${prod.img[0]}" alt="Product Image" class="product-img" id="bigimage">
                <img src="img/${prod.img[1]}" alt="Product Image" class="thumb-img">
                <img src="img/${prod.img[2]}" alt="Product Image" class="thumb2-img">
                <img src="img/${prod.img[3]}" alt="Product Image" class="thumb3-img">
            </div>
            <h3><a href="product.html">${prod.name} - ${prod.color}</a></h3>
            <header class="product-header">

                <data value="179" class="product-price"><del>$${prod.regularPrice}</del><br><ins>${prod.price}</ins></data>
                <p class="details">${prod.details}
                <a href="https://en.wikipedia.org/wiki/Fender_Stratocaster#:~:text=The%20archetypical%20Stratocaster%20is%20a,made%20from%20alder%20or%20ash.&text=Most%20Stratocasters%20have%20three%20single,control%20and%20two%20tone%20controls.">see more</a></p>
                <div class="product-rating">
                <h4>Rating</h4>
                    <span class="material-icons">star</span><span class="material-icons">star</span><span
                    class="material-icons">star</span><span class="material-icons">star</span><span
                    class="material-icons">star_half</span>
                </div>
                <form class=product-filter>
                <fieldset>
                    <legend>Colours</legend>
                    <ul>
                    <li><label><input type="radio" name="colour" value="r" > Red</label></li>
                    <li><label><input type="radio" name="colour" value="w" > White</label></li>
                    <li><label><input type="radio" name="colour" value="b" > Black</label></li>
                    </ul>
                </fieldset>
                <fieldset>
                    <legend>Type</legend>
                    <ol>
                    <li><label><input type="radio" name="size" value="rhanded" > RH</label></li>
                    <li><label><input type="radio" name="size" value="lhanded" > LH</label></li>
                    </ol>
                </fieldset>
                </form>
                <div class="add-cart">
                <button type="button" class="add-cart"><span class="material-icons">shopping_cart</span> Add to Cart</button>
                <button type="button" class="product-favorite"><span class="material-icons">favorite</span></button>
                </div>
            </header>`
            productsList.appendChild(oneProduct);
            }
        }
    });
}

displayProducts()

document.querySelector(`#filter-black`).addEventListener(`click`, displayProducts)
document.querySelector(`#filter-white`).addEventListener(`click`, displayProducts)
document.querySelector(`#filter-red`).addEventListener(`click`, displayProducts)

document.querySelector(`#right-handed`).addEventListener(`click`, displayProducts)
document.querySelector(`#left-handed`).addEventListener(`click`, displayProducts)


const navToggle = function() {
    document.querySelector(`.navigation`).classList.toggle(`hidden`)
}

document.querySelector(`.nav-toggle`).addEventListener(`click`,navToggle)