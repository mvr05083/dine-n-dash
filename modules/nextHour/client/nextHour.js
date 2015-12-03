Tracker.autorun( function(){
  Meteor.subscribe('nextHour', new Date() );
});
Template.nextHour.helpers({
  time : function(){
    return Aggregated.find({});
  }
})
