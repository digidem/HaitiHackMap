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
    @setup(options)
    @run()

  setup: (options) =>
    @setOptions(options)
    @addElements()
    L.Icon.Default.imagePath = options.imagesPath || "images"

  setOptions: (options) =>
    App.options =
      categoriesUrl: options.categoriesUrl
      extractLocation: options.extractLocation
      popupContentsRenderer: options.popupContentsRenderer
      popupContentsTemplate: options.popupContentsTemplate
      resultsUrl: options.resultsUrl
      appUrl: options.appUrl

  addElements: ->
    $('body').append($('<div/>').attr('id', 'app'))

    stylesheetPath = "styles/haiti_hack_map.css"
    stylesheetUrl = ""

    if App.options.appUrl
      stylesheetUrl = "#{App.options.appUrl}/#{stylesheetPath}"
    else
      stylesheetUrl = stylesheetPath

    stylesheet = $('<link/>').attr
      'rel': 'stylesheet'
      'href': stylesheetUrl

    $('head').append(stylesheet)

  run: ->
    new App.Router()

window.HaitiHackMap = HaitiHackMap
