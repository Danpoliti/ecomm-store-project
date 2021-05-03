# Web Design & Development 1
## E-Comm Webstore: PART 2

### Outline

Read and complete the steps in the following two documents:

- [Content walk through](https://www.notion.so/juneate/Webstore-Part-2-Content-82e34001fca54aac93b7d1e9053a5927)
- [Styling walk through](https://www.notion.so/juneate/Webstore-Part-2-Style-b057567610534569b33fb5bfdb34ce6b)

### Submission

- This project will be uploaded to your personal Github account as a public repository
- Commits must be made prior to the due dates to be considered
- Github Pages must be activated on your site can be viewed live on the web
- The live url must be added to appropriate field of the repository's "About" (top-right)
- Both urls (code, and live) will be collected prior to the first deliverable being due
- See the [project overview](https://www.notion.so/juneate/Project-Webstore-28443f753b344d60b0176a24e14f17c9) for details on submissions, as well as a form


## SHOW SELECTOR
 I tried to make the show selector box works, but I couldnt realized why was not working. The code is down below and also commented in the javascript file.

 <!-- /* productsList.innerHTML = `<h2 class="subheading">Results</h2>
                        <section class="show-filter">
                        <h4>Show</h4>
                        <label for="sort">Show</label>
                        <select name="sort" id="sort" onchange="displayProducts()">
                            <option value="price-high">Price, highest to lowest</option>
                            <option value="price-low">Price, lowest to highest</option>
                            <option value="newest">Newest releases</option>
                        </select>
                        </section>`


       

       
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
*/ -->


