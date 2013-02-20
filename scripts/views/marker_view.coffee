class App.Views.MarkerView extends Backbone.View
  initialize: (options) ->
    #{@map} = options
    {@type} = options
    @map = App.map.map
    @display()
    @

  display: ->
    options = {}
    unless @type == "default"
      classes = "#{@model.get("category")} custom-icon"
      icon = L.divIcon(className: classes)
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
    if window.details_callback
      window.details_callback(@model)
    else
      """
        <note>#{@location().toString()}</note>
      """
