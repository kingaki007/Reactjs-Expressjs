/**
 * Created by Engage Beyond on 9/1/2015.
 */
var mongoose = require('mongoose');
var GroceryItem = require('./models/GroceryItems.js');


mongoose.connect('mongodb://localhost/grocery',function(){
    console.log("connected");

    //mongoose.connection.db.dropDatabase();

    var items = [
        {
            name: "Ice cream"
        }, {
            name: "Waffles"
        }, {
            name: "Candy",
            purchased: true
        }, {
            name: "Snarks"
        }
    ];

    items.forEach(function(item){
        new GroceryItem(item).save();
    })
});