Template.listing.helpers({
  getAgg: function() {
    Meteor.subscribe("getHighestTrafficTimes");
    // return Aggregated.find( {}, { sort: { "intervalTime.dayofweek": 1 } });
    return Aggregated.find({});
  },
  calcTime: function() {
    var afternoon = this.intervalTime.hour >= 12 ? 'pm' : 'am',
      hour = (this.intervalTime.hour % 12 === 0) ? '12' : this.intervalTime.hour % 12,
      minute = (this.intervalTime.time < 10) ? '0' + this.intervalTime.time : this.intervalTime.time;
    return  hour + ':' + minute + afternoon;
  }
});
