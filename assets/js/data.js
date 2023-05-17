document.addEventListener('DOMContentLoaded', function() {
    let products = document.querySelector('.prd');
    let url = `https://ec2-13-250-36-132.ap-southeast-1.compute.amazonaws.com:8080/product/list/${id}`;
    let opset = 0;
    //
    // const headers = new Headers();
    // headers.append('Authorization', 'eyJraWQiOiJhNWRmN2Q2Mi05MWU3LTQ3YzMtOGI0ZS01MTEyZmY0MjhjM2QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoidHNvdGFuQGdtYWlsLmNvbSIsImV4cCI6MTY4Mzk2NzM0NSwiaWF0IjoxNjgzOTY3Mjg1LCJzY29wZSI6InJlYWQifQ.k78VFe0Id_qLssul4sYHZHXad88cn8ydavy-oKuunm77ypSp_pa_Y1N0Dxc4KfA-QZ0RKekEbLR98Z7c7uf_R2ViyBSs9jRvmcpF7MkeOnjV_rLFgKMCHq8_TAH-nqa3z7JEMhA30-rvfbLR1Nr-O0_JzTfuE_HJrOnneAKSl1tlNgStfboXbZl1DsYPHaNeqZd4XM_vTWPHCWb-atEEohFDiVdX1QUmS-0LSvHRUvEIaw2154CTLP-ChVBhfnzRNvzWCKQhsBNhYnnTMAo3Zs21SQNGPCcvlnquHnXiXfryNOtqoRDhnc7QgOGowkuvifK_niiAo357vhNca7kOKQ');

    async function fetchProducts(url) {
        try {
            let data = await fetch(url);
            opset = opset + 5;
            if (data.ok) {
                let response = await data.json();

                for (let i = 0; i < response.length; i++) {
                    let description = response[i].name;
                    let title = response[i].name;
                    products.innerHTML += `
            <div class="product col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                <div class="thumb">
                    <a class="image"> 
                      <img class="image" src="data:image/png;base64, ${response[i].imgUrl}" alt="" class="product-img">
                    </a>
                    
           
                <div class="content">
                    <h5 class="title">${
                    title.length > 18 ? title.substring(0, 18).concat(' ...') : title
                }</h5>
<!--                    TODO : name bolboh-->
                <h5 class="product-category">${response[i].category}</h5>
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
                   'url'
                );
            }, 1000);
        }
    });
});


// category & product id section

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');