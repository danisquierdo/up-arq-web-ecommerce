/**
 * Created by Dany on 6/25/2016.
 */
$(document).ready(function () {
   $('#horizontalTab').easyResponsiveTabs({
         type: 'default', //Types: default, vertical, accordion
     width: 'auto', //auto or any width like 600px
     fit: true   // 100% fit in a container
    });
   $('.flexslider').flexslider({
         animation: "slide",
     controlNav: "thumbnails"
   });

/*    simpleCart({
        cartColumns: [
            { attr: "prodId", Name: "ProductId", label: false },
            { attr: "price" , label: "Price", view: 'currency' }
        ]
    });*/
 });
