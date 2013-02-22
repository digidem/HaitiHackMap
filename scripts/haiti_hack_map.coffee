# This is the map app that is rendered.
#
# Usage:
#
#   var options = {};
#   new HaitiHackMap(options);
#
class HaitiHackMap
  # Constructor
  #
  # options: An optional Hash containing some options that will be forwarded to
  #          the right place.
  #          resultsUrl:      A String containing the URL from which to get the
  #                           POI results to be rendered in the map
  #          detailsRenderer: A function that takes an object with the
  #                           representation gotten from resultsUrl.
  constructor: (options = {}) ->
    @options = options
    @setup()
    @run()

  setup: =>
    L.Icon.Default.imagePath = @options.leafletImagesPath || "images"
    App.Views.MarkerView.detailsRenderer = @options.detailsRenderer
    App.Views.MarkerView.titleRenderer = @options.titleRenderer
    App.Views.MarkerView.extractLocation = @options.extractLocation
    App.Collections.Pois.resultsUrl = @options.resultsUrl
    App.Collections.Categories.categoriesUrl = @options.categoriesUrl

  run: =>
    new App.Router()

window.HaitiHackMap = HaitiHackMap
