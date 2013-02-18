$ ->
  $(document).ajaxStart ->
    $(".loader").addClass("loading")

  $(document).ajaxStop ->
    $(".loading").removeClass("loading")
