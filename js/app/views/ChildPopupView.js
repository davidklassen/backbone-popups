var ChildPopupView = PopupView.extend({
  initialize: function () {
    ChildPopupView.__super__.initialize.call(this);
    
    this.template = $('#child-popup-template').html();
    
    this.context = {
      title: 'Child Title',
      content: 'Lorem ipsum dolor sit amet.'
    }
  }
});
