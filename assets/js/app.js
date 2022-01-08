var listProductsCard= document.querySelectorAll("#ListproductsCard .itemProductCard")


document.addEventListener("DOMContentLoaded",(evt)=>{
    
})


listProductsCard.forEach(el=>{
    el.addEventListener("mouseenter",(evt)=>{
        console.log("hoverok");
        evt.stopPropagation();
        
    })
})

console.log(listProductsCard);