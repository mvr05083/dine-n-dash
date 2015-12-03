Meteor.publish("getHighestTrafficTimes", function(argument) {
  return Aggregated.find({}, {
    limit: 1000,
    sort: {
      count: -1
    }
  });
});
