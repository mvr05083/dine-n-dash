FlowRouter.route('/', {
  // subscriptions: function(params, queryParams) {
  //   this.register('nextHour', Meteor.subscribe('nextHour'));
  // },
  action: function(){
    BlazeLayout.render( 'layout', { main: 'home' });
  }
});

FlowRouter.route('/cyber', {
  // subscriptions: function(params, queryParams) {
  //   this.register('nextHour', Meteor.subscribe('nextHour'));
  //   this.register('graph', Meteor.subscribe('points'));
  // },
  action: function(){
    BlazeLayout.render( 'layout', { main: 'cyber' });
  }
});
