class App.Views.MarkerView extends Backbone.View
  initialize: (options) ->
    #{@map} = options
    {@type} = options
    @map = App.map.map
    @display()
    @

  display: ->
    #debugger
    options = {}
    unless @type == "default"
      console.log @model
      icon = L.divIcon(className: @model.get("category"))
      options.icon = icon

    m = L.marker(@location(), options)
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
