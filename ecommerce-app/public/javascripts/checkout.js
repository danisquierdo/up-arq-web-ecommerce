/**
 * Created by Dany on 6/25/2016.
 */
simpleCart({

    cartStyle:'table',

    cartColumns: [
        /* Picture (same for every product right now) */
        { view: function(item, column) {
            return '<img src=\"/images/'+ item.get('image') +'\"  height=\"50%\"/>';
        }, label: false },
        { attr: "name" , label: false } ,
        { attr: "price" , label: "Price", view: 'currency' } ,
        { view: "decrement" , label: false , text: "-" } ,
        { attr: "quantity" , label: "Qty" } ,
        { view: "increment" , label: false , text: "+" } ,
        { view: "remove" , text: "Remove" , label: false }
    ]


});


simpleCart.bind("afterCreate", function(){
    $cart_table = $(".simpleCart_items table")
    $cart_table.addClass("table").addClass("table-hover")
});