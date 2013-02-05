$ ->
  new App.Router()
  $(document).ajaxStart ->
    $(".loader").addClass("loading")

  $(document).ajaxStop ->
    $(".loading").removeClass("loading")

  $(document).ajaxComplete (data) ->
    @
