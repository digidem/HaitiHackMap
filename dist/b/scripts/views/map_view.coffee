class App.Views.MapView extends Backbone.View
  tagName: 'section'
  id: 'map'
  ZOOM: 14
  tileProvider: 'stamen' # Current options are 'stamen' and 'osm'

  initialize: ->
    @render()
    @$el.height($(document).height())
    @listenTo App.search, "result:select", @resultSelected
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

  resultSelected: (model) ->
    marker = new App.Views.MarkerView(model: model, map: @map, type: "default")
    @map.panTo(marker.location())

  tilesUrlPattern: ->
    switch @tileProvider
      when "stamen"
        "http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png"
      when "osm"
        "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
