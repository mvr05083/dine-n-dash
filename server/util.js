util = {
    _getDow : function( day ){
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return days[day.getDay()];
    },
    _testLog : function( test ){
      console.log('Test ' + test);
    },
    _createPoints : function() {
      console.log('Creating Points...');

      Points.remove({});
      var day = new Date().getDay();
      var data = [];
      var a = Aggregated.find({
        'intervalTime.dayofweek': day
      }, {
        sort: {
          "intervalTime.hour": 1,
          "intervalTime.time": 1
        }
      }).fetch();

      if (a) {
        _.each(a, function(d) {
          var dateTime = moment('2015-11-20 ' + (d.intervalTime.hour) + ':' + d.intervalTime.time + ':00', 'YYYY-MM-DD hh:mm:ss')._d;
          Points.insert({
            y: d.count,
            x: dateTime,
            old : false
          });
        });
      }
    }
};


var cron = new Meteor.Cron({
  events: {
    "0 0 * * *": util._createPoints,
    "* * * * *": util._createPoints
  }
});
