Meteor.methods({
  // generateLineGraphArray: function() {
  //   Points.remove({});
  //
  //   var day = new Date().getDay();
  //   var data = [];
  //   var a = Aggregated.find({
  //     'intervalTime.dayofweek': day
  //   }, {
  //     sort: {
  //       "intervalTime.hour": 1,
  //       "intervalTime.time": 1
  //     }
  //   }).fetch();
  //
  //   if (a) {
  //     _.each(a, function(d) {
  //       var dateTime = moment('2015-11-20 ' + (d.intervalTime.hour) + ':' + d.intervalTime.time + ':00', 'YYYY-MM-DD hh:mm:ss')._d;
  //       Points.insert({
  //         y: d.count,
  //         x: dateTime
  //       });
  //     });
  //     return;
  //   }
  // },
  // getPoints : function(){
  //   return Points.find().fetch();
  // }
});
