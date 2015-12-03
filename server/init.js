Meteor.startup(function() {
  Aggregated.remove({});

  var t = Transactions.aggregate([{
    "$group": {
      "_id": {
        "time": "$time",
        "hour": "$hour",
        "dayofweek": "$dow.value"
      },
      "count": {
        "$sum": 1
      }
    }
  }, {
    "$sort": {
      "_id.dayofweek": 1,
      "_id.hour": 1,
      "_id.time": 1
    }
  }]);

  _.each(t, function(entry) {
    Aggregated.insert({
      _id: new Meteor.Collection.ObjectID()._str,
      intervalTime: entry._id,
      count: entry.count
    });
  });

  // util._createPoints();

  /**
   * UNCOMMENT TO ADD DATES TO Transactions
   */
  // console.log( 'Stating import...' );
  // Transactions.remove({});
  // var text = Assets.getText('cyber-transactions.csv');
  // var insertData = text.split('\r\n');
  // _.each(insertData, function(d){
  //   let date = new Date(d);
  //    console.log(d);
  //   Transactions.insert({
  //     date : date,
  //     dow : {
  //       name : _getDow( date ),
  //       value : date.getDay()
  //     },
  //     hour : date.getHours(),
  //     time : date.getMinutes() - ( date.getMinutes() % 5 )
  //   });
  // });
  // console.log('Finished import.');

});
