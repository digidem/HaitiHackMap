class App.Views.MapView extends Backbone.View
  tagName: 'section'
  id: 'map'
  ZOOM: 14
  tileProvider: 'osm' # Current options are 'stamen' and 'osm'

  initialize: ->
    @render()
    @$el.height($(document).height())
    @tileProvider ?= "osm"
    @

  render: ->
    _.defer(@initMap)

  initMap: =>
    @map = L.map(@id)
    loc = [18.528984,-72.323686]
    @map.setView(loc, @ZOOM) # TODO: Center in country
    tiles = L.tileLayer(@tilesUrlPattern())
    @map.addLayer(tiles)

  tilesUrlPattern: ->
    switch @tileProvider
      when "stamen"
        "http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png"
      when "osm"
        "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
