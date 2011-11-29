function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function () {

  $('#popup-button').click(function () {
    var popup = new PopupView();  
    $('body').append(popup.render().el);
  });
  
  $('#child-popup-button').click(function () {
    var popup = new ChildPopupView();  
    $('body').append(popup.render().el);
  });

});