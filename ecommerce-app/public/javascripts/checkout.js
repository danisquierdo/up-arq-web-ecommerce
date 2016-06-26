/**
 * Created by Dany on 6/25/2016.
 */
simpleCart({

    cartColumns: [
        { attr: "name" , label: false , view: function(item, column){
            var h3 = document.createElement("h3");
            var a = document.createElement("a");
            a.innerText = item.name();
            a.surroundContents(h3);
            return h3.innerHTML;
        } } ,
        { attr: "price" , label: "Price", view: 'currency' } ,
        { view: "decrement" , label: false , text: "-" } ,
        { attr: "quantity" , label: false, view: function(item, column){
            var ul = document.createElement("ul");
            ul.addClass('qty');
            var li = document.createElement("li");
            li.innerHTML = "<p>"+item.quantity()+"</p>";
            li.surroundContents(ul);
            return ul.innerHTML;
        } } ,
        { view: "increment" , label: false , text: "+" } ,
        { attr: "total" , label: "SubTotal", view: 'currency' } ,
        { view: "remove" , text: "Remove" , label: false }
    ]

});