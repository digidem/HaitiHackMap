(function() {

  $(function() {
    $(document).ajaxStart(function() {
      return $(".loader").addClass("loading");
    });
    return $(document).ajaxStop(function() {
      return $(".loading").removeClass("loading");
    });
  });

}).call(this);
