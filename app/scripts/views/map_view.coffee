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
    console.log 'initMap'
    @map = L.map(@id)
    @map.setView([19, -72], 10) # TODO: Center in country
    tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')
    tiles.addTo(@map)

    ###
    var map = L.map(this.domElement);
      map.setView([location.lat, location.lon], 13);

      var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                  { attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' }
                 );
       tiles.addTo(map);
    ###

  centerMap: (model) ->
    location = [model.get("lat"), model.get("lon")]
    @map.setView(location, 14)
    L.marker(location).addTo @map