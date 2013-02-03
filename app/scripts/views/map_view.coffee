class App.Views.MapView extends Backbone.View
  tagName: 'section'
  id: 'map'

  initialize: ->
    @render()
    @listenTo App.search, "result:select", @centerMap
    @

  render: ->
    _.defer(@initMap)

  initMap: =>
    @map = L.map(@id)
    @map.setView([19, -72], 10) # TODO: Center in country
    tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')
    tiles.addTo(@map)

  centerMap: (model) ->
    @map.setView(loc, 10)
    new App.Views.MarkerView(model: model, map: @map)
