document.addEventListener('DOMContentLoaded', function() {
    let products = document.querySelector('.prd');
    let url = `https://api.escuelajs.co/api/v1/products?offset=0&limit=10`;
    let opset = 0;
    async function fetchProducts(url) {
        try {
            let data = await fetch(url);
            opset = opset + 5;
            if (data.ok) {
                let response = await data.json();

                for (let i = 0; i < response.length; i++) {
                    let description = response[i].description;
                    let title = response[i].title;
                    products.innerHTML += `
            <div class="product col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                <div class="thumb">
                    <a class="image"> 
                        <img class="image" src="${response[i].images[1]}" alt="${
                         response[i].category.name
                        }" class="product-img">
                    </a>
                    
           
                <div class="content">
                    <h5 class="title">${
                    title.length > 18 ? title.substring(0, 18).concat(' ...') : title
                }</h5>
                <h5 class="product-category">${response[i].category.name}</h5>
                <span class="price">
                   <span class="new">$${response[i].price}</span>
                   <a href="#!" data-productId="${
                     response[i].id
                   }" class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
                </span>
                </div>


            </div>
      
          
            </div>
            `;
                }
            }
        } catch (err) {
            console.log(err);
        }
    }
    fetchProducts(url);

    window.addEventListener('scroll', function() {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 3 / 4) {
            setTimeout(() => {
                fetchProducts(
                    `https://api.escuelajs.co/api/v1/products?offset=${opset}&limit=10`
                );
            }, 1000);
        }
    });
});

