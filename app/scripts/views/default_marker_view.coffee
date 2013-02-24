class App.Views.DefaultMarkerView extends Backbone.View
  initialize: ->
    @map = App.map.map
    @loadMarker()
    @show()
    @

  loadMarker: (options = {}) =>
    @marker = L.marker(@location(), options)
    @marker.bindPopup(@popupContents())

  location: =>
    [@model.get("lat"), @model.get("lon")]

  popupContents: =>
    """
      <h6>#{@model.get('display_name')}</h6>
      <note>#{@location().toString()}</note>
    """

  show: =>
    @map.addLayer @marker
