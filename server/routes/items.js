/**
 * Created by Engage Beyond on 9/1/2015.
 */
module.exports = function(app) {
    /*var items = [
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
    ];*/

    var GroceryItem = require('./../models/GroceryItems.js');

    app.route('/api/items').get(function(req,res){
        GroceryItem.find(function(error,doc){
            res.send(doc);
        })

    }).post(function(req,res){
        var item = req.body;
        var groceryItem = new GroceryItem(item);
        groceryItem.save(function(err,data){
            res.status(300).send();
        })
        //items.push(item);
    })

    app.route('/api/items/:id').delete(function(req,res){
        GroceryItem.findOne({
            _id : req.params.id
        }).remove();
    }).patch(function(req,res){
        GroceryItem.findOne({
            _id:req.body._id
        },function(error,doc){
            for(var key in req.body){
                doc[key] = req.body[key];
            }
            doc.save();
            res.status(200).send();
        })
    })
}