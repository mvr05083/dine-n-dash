Meteor.publish('nextHour', function( nowDate ) {
  var now = nowDate,
    temp = new Date,
    then = new Date(temp.setHours( temp.getHours() + 1 ));

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
});
