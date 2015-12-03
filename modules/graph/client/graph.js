Template.graph.helpers({
  isLoaded: function() {
    return (Session.get('graphData')) ? false : true;
  }
})


Template.graph.onRendered(function() {
  Meteor.subscribe("points", {
    onReady: function() {
      if (!Session.get('graphData')) {
        // Meteor.call('getPoints', function(err, result) {
        var points = Points.find().fetch();
        var data = [];
        var dataSeries = {
          color: "#993333",
          type: "area"
        };
        var dataPoints = [];
        _.each(points, function(p) {
          dataPoints.push({
            x: p.x,
            y: p.y
          });
        });
        dataSeries.dataPoints = dataPoints;
        data.push(dataSeries);
        Session.set('graphData', data);

        _drawChart(data);
        // });
      } else {
        _drawChart(Session.get('graphData'));
      }
    }
  });

});


function _drawChart(data) {
  var chart = new CanvasJS.Chart("chartContainer", {
    zoomEnabled: true,
    axisX: {
      valueFormatString: "h:mmtt",
      labelAngle: -30
    },
    axisY: {
      includeZero: false
    },
    legend: {
      horizontalAlign: "right",
      verticalAlign: "center"
    },
    data: data // random generator below
  });
  chart.render();
}
