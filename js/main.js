

 async function getApi(){
    var ahmed = await fetch("https://dummyjson.com/products");
    var zaki = await ahmed.json();
    var mohamed = zaki.products;
    var text="";
    for(var i=0; i<mohamed.length; i++){
    var cartoona = `
                    <div class="col-md-4 text-center my-4">
                    <img class="img-fluid" style="height:350px" src="${mohamed[i].images[0]}">
                    <h3>${mohamed[i].title}</h3>
                    <h5>${mohamed[i].description}</h5>
                    <h5>${mohamed[i].price}$</h5>
                    </div>
                    `;
                    text = text + cartoona;
                }
    
    document.querySelector(".test").innerHTML = text;
}
getApi();