//show real products
var products = [
    {name:"White Chair", headline:"Devo ki Chair", price:"999",image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name:"Brown Chair", headline:"Desi Hindustani Chair", price:"1,500",image:"https://images.unsplash.com/photo-1549497538-303791108f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name:"Fan of India", headline:"Hawa khaye or maje udaye", price:"5,000",image:"https://images.unsplash.com/photo-1565151443833-29bf2ba5dd8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFufGVufDB8fDB8fHww"},
    {name:"Viral Stool", headline:"Yeh hai har ghar ka stool", price:"799",image:"https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29vZGVuJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D"},
    {name:"Wooden Shoe", headline:"Stylish and amazing Shoes of india", price:"4,999",image:"https://images.unsplash.com/photo-1638953173691-671b6c2692fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvb2RlbiUyMHByb2R1Y3RzfGVufDB8fDB8fHww"},
];

var popular = [
    {name:"White Chair", headline:"Devo ki Chair", price:"999",image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name:"Brown Chair", headline:"Desi Hindustani Chair", price:"1,500",image:"https://images.unsplash.com/photo-1549497538-303791108f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name:"Fan of India", headline:"Hawa khaye or maje udaye", price:"5,000",image:"https://images.unsplash.com/photo-1565151443833-29bf2ba5dd8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFufGVufDB8fDB8fHww"},
];

function addProducts(){
    var clutter = "";
products.forEach(function(product,index){
    clutter += ` <div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl hidden">
    <img class ="w-full h-full object-cover"src ="${product.image}" />
    </div>
    <div class="data w-full px-2 py-5">
        <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
        <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
                <h3 class="font-semibold opacity-20">${product.headline}</h3>
                <h4 class="font-semibold mt-2">&#8377; ${product.price}</h4>
            </div>
            <button data-index ="${index}" class="add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400"><i
            data-index ="${index}" class="add ri-add-line"></i></button>
        </div>
    </div>
</div> `
})
document.querySelector(".products").innerHTML = clutter;
}

function addPopularProducts(){
    var clutter = "";
    popular.forEach(function(product){
        clutter +=`<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20  flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
        <img class="w-full h-full object-cover"
        src="${product.image}"
        alt="">
        </div>
        <div class="data py-2 w-full">
        <h1 class="leading-none font-semibold">${product.name}</h1>
        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
        <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
        </div>
        </div>`
    })
}
let cart = [];
function addToCart(){
 document.querySelector(".products").addEventListener("click",function(details){
    if(details.target.classList.contains("add")){
     cart.push(products[details.target.dataset.index])
     console.log(cart);
    }
 })
}



function showCart() {
    const cartIcon = document.querySelector(".carticon");
    const cartExpand = document.querySelector(".cartexpnd");

    
    cartIcon.addEventListener("click", function() {
        
        if (cartExpand.style.display === "block") {
            
            cartExpand.style.display = "none";
        } 
        else {

            cartExpand.style.display = "block";
            var clutter ="";
            cart.forEach(function(prod,index){
                clutter +=`<div class="flex gap-2 bg-white p-2 rounded-lg">
                <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                <img class="w-full h-full object-cover object-center " src=${prod.image} /> </div>
                <div>
                <h3 class=" font-semibold">${prod.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">&#8377; ${prod.price}</h5>
                </div>
                </div>`;
            });
            cartExpand.innerHTML = clutter;
        }
    });
}

showCart()
addToCart()
addPopularProducts()
addProducts()
