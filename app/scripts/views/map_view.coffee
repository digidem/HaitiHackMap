class App.Views.MapView extends Backbone.View
  tagName: 'section'
  id: 'map'
  ZOOM: 14

  initialize: ->
    @render()
    @$el.height($(document).height())
    @listenTo App.search, "result:select", @resultSelected
    @

  render: ->
    _.defer(@initMap)

  initMap: =>
    @map = L.map(@id)
    loc = [18.528984,-72.323686]
    @map.setView(loc, @ZOOM) # TODO: Center in country
    tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')
    tiles.addTo(@map)

  resultSelected: (model) ->
    marker = new App.Views.MarkerView(model: model, map: @map, type: "default")
    @map.setView(marker.location(), @ZOOM)
