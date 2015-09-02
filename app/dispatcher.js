/**
 * Created by Engage Beyond on 9/1/2015.
 */
var guid = require('guid');
//register listeners and sends events to them

var listeners = {};

module.exports = {
    register:function(cb){
        var id = guid.raw();
        listeners[id] = cb;
        return id;
    },
    dispatch:function(payload){
        console.info('Dispatching...',payload);
        for(var id in listeners){
            var listener = listeners[id];
            listener(payload);
        }
    }
}