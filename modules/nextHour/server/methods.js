Meteor.methods({
  getNextHour : function(){
    var now = new Date(),
      temp = new Date,
      then = new Date(temp.setHours( temp.getHours() + 1 ));

    console.log(now.getHours() + ' -> ' + then.getHours());
    return Aggregated.find({
      "intervalTime.dayofweek" : now.getDay(),
      $or : [
        { $and : [{ "intervalTime.hour" : now.getHours()}, { "intervalTime.time" : {$gte : now.getMinutes()}}]},
        { $and : [{ "intervalTime.hour" : then.getHours()}, { "intervalTime.time" : {$lte : then.getMinutes()}}]}
      ]
    }, {
      limit : 1,
      sort: {
        count: 1
      }
    });
  }
})
