Meteor.publish("points", function() {
  return Points.find({}, {fields : { old : 0 } });
});
