class App.Views.MarkerView extends Backbone.View
  initialize: (options) ->
    #{@map} = options
    @map = App.map.map
    @display()
    @

  display: ->
    #debugger
    m = L.marker(@location())
    m.bindPopup("#{@title()}#{@details()}")
    m.addTo(@map)

  location: ->
    [@model.get("lat"), @model.get("lon")]

  title: =>
    """
    <h6>#{@model.get('display_name')}</h6>
    """

  details: =>
    """
    <note>#{@location().toString()}</note>
    """
