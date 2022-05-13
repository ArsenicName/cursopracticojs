
function calcularPrecioConDescuento(precio,descuento){

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;

}

function calcularPrecioConClick(){

 const inputPrice = document.getElementById ("inputPrice");
 
 const priceValue = inputPrice.value;

 const inputDiscount = document.getElementById ("inputDiscount");
 const discountValue = inputDiscount.value;
 const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue)

 const resultP = document.getElementById("ResultP");
 resultP.innerText = "El resultado del precio es " + precioConDescuento;
 


}


//<ul id="submenu"> 
       //       <li><a href="http://www.jochaho.com/wordpress/difference-between-svg-vs-canvas/">Difference between SVG vs. Canvas</a></li>
         //     <li><a href="http://www.jochaho.com/wordpress/new-features-in-html5/">New features in HTML5</a></li>
           //   <li><a href="http://www.jochaho.com/wordpress/creating-links-to-sections-within-a-webpage/">Creating links to sections within a webpage</a></li>

