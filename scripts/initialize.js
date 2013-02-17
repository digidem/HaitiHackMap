(function() {

  $(function() {
    new App.Router();
    $(document).ajaxStart(function() {
      return $(".loader").addClass("loading");
    });
    $(document).ajaxStop(function() {
      return $(".loading").removeClass("loading");
    });
    return $(document).ajaxComplete(function(data) {
      return this;
    });
  });

}).call(this);
