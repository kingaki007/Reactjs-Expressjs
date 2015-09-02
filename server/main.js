/**
 * Created by Engage Beyond on 9/1/2015.
 */
var express = require('express');
var parser = require('body-parser');

var React = require('react/addons');
var GroceryItem = require('./models/GroceryItems.js');


require('babel/register');
require('./database');

var app = new express();

app.get('/',function(req,res){
    //res.render('./../app/index.ejs',{});
    var application = React.createFactory(require('./../app/components/GroceryItemList.jsx'));

    GroceryItem.find(function(error,doc){
        var generated = React.renderToString(application({
            items:doc

        }));
        res.render('./../app/index.ejs',{reactOutput:generated});
    })

}).use(express.static(__dirname+'/../.tmp')).listen(3000,function(){console.log('listening to port 3000');});

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

require('./routes/items.js')(app);