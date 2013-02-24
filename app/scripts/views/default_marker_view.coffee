class App.Views.DefaultMarkerView extends Backbone.View
  initialize: ->
    @map = App.map.map
    @display()
    @

  display: (options = {}) =>
    m = L.marker(@location(), options)
    m.bindPopup(@popupContents())
    m.addTo(@map)

  location: =>
    [@model.get("lat"), @model.get("lon")]

  popupContents: =>
    """
      <h6>#{@model.get('display_name')}</h6>
      <note>#{@location().toString()}</note>
    """
