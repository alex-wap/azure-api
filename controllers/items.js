var mongoose = require('mongoose');
var Item = mongoose.model('Item');

module.exports = {
  index: function(req, res) {
    Item.find({}, function(err, items) {
      items.unshift({"instructions" : ["Route '/' will serve up the full collection of people.",
                                 "Route '/new/:item/' will add a item into the database. can be used for blank spaces, so adding Steve Jobs to our database, you'd type in the URL 'api.alexw.tech/new/Steve Jobs'.",
                                 "Route '/remove/:item/' will delete a item from the database.",
                                 "Route '/:item' will bring up the document of that particular item."
                                 ]});
      console.log(items);
      res.json(items);
    })
  },
  create: function(req, res) {
    var item = req.params.item
    var item = new Item({item: item});
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
    Item.find({item:item}, function(err, items) {
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
    Item.remove({item:item}, function(err) {
      if(err) {
        console.log('something went wrong');
      } else{
        res.redirect("/");
      }
    });
  }
}