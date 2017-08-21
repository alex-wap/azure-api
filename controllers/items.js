var mongoose = require('mongoose');
var Item = mongoose.model('Item');

module.exports = {
  index: function(req, res) {
    Item.find({}, function(err, items) {
      items.unshift({"instructions" : ["Route '/' will serve up the full collection of items.",
                                 "Route '/new/:item/' will add an item into the database. Spaces are preserved e.g. 'domain.com/new/buy groceries' => buy groceries.",
                                 "Route '/remove/:item/' will delete an item from the database.",
                                 "Route '/:item' will bring up the document of that particular item."
                                 ]});
      // console.log(items);
      res.json(items);
    })
  },
  create: function(req, res) {
    console.log("creating:", req.params.item);
    var item = req.params.item
    var item = new Item({name: item});
    item.save(function(err) {
      if(err) {
        console.log('something went wrong');
      } else {
        console.log('successfully added a item!');
        res.redirect('/');
      }
    })
  },
  show: function(req, res) {
    console.log(req.params)
    var item = req.params.item
    Item.find({name:item}, function(err, items) {
      if(err) {
        console.log('something went wrong');
      } else { 
        console.log('successfully got the item!');
        res.json(items);
      }
    })
  },
  destroy: function(req, res) {
    console.log(req.params)
    var item = req.params.item
    Item.remove({name:item}, function(err) {
      if(err) {
        console.log('something went wrong');
      } else{
        res.redirect("/");
      }
    });
  }
}