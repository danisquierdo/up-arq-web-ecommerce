/**
 * Created by Dany on 6/25/2016.
 */
simpleCart({

    cartStyle:'table',

    cartColumns: [
        /* Picture (same for every product right now) */
        { view: function(item, column) {
            return '<img src=\"/images/'+ item.get('image') +'\"/>';
        }, label: false },
        { attr: "name" , label: false } ,
        { attr: "price" , label: "Price", view: 'currency' } ,
        { view: "decrement" , label: false , text: "-" } ,
        { attr: "quantity" , label: "Qty" } ,
        { view: "increment" , label: false , text: "+" } ,
        { view: "remove" , text: "Remove" , label: false }
    ]


});

// $(document).ready(function(){
//     simpleCart.find().each(function (item,x) {
//
//         var items = $('#items');
//
//         var header = createElement('div');
//         header.addClass('cart-header');
//
//         var close = createElement('div');
//         close.addClass('close1');
//         header.append(close);
//
//         var i = createElement('div');
//         i.addClass('cart-sec');
//
//         var imgd = createElement('div');
//         imgd.addClass('cart-item');
//         imgd.addClass('cyc');
//
//         var img = createElement('img');
//         img.src(item.get('image'));
//         imgd.append(img);
//
//         i.append(imgd);
//
//         var info = createElement('div');
//         info.addClass('cart-item-info');
//
//         var name = createElement('h3');
//         name.innerHTML = item.get('name');
//         info.append(name);
//
//         i.append(info);
//
//         var clearfix = createElement('div');
//         clearfix.addClass('clearfix');
//
//         i.append(clearfix);
//         header.append(i);
//
//         items.append(header);
//     });
// });

simpleCart.bind("afterCreate", function(){
    $cart_table = $(".simpleCart_items table")
    $cart_table.addClass("table").addClass("table-hover")
});