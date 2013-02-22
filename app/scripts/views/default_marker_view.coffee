class App.Views.DefaultMarkerView extends Backbone.View
  initialize: ->
    @map = App.map.map
    @display()
    @

  display: (options = {}) =>
    m = L.marker(@location(), options)
    m.bindPopup("#{@title()}#{@details()}")
    m.addTo(@map)

  location: =>
    console.log @model
    [@model.get("lat"), @model.get("lon")]

  title: =>
    """
      <h6>#{@model.get('display_name')}</h6>
    """

  details: =>
    """
      <note>#{@location().toString()}</note>
    """
