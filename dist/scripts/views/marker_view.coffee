class App.Views.MarkerView extends App.Views.DefaultMarkerView
  @titleRenderer: null
  @detailsRenderer: null
  @extractLocation: null

  display: (options = {}) =>
    classes = "#{@model.get("category_name")} custom-icon"
    icon = L.divIcon(className: classes)
    options.icon = icon
    super(options)

  classes: =>

  location: =>
    if App.Views.MarkerView.extractLocation
      App.Views.MarkerView.extractLocation @model
    else
      super()

  title: =>
    if App.Views.MarkerView.titleRenderer
      App.Views.MarkerView.titleRenderer @model
    else
      super()

  details: =>
    if App.Views.MarkerView.detailsRenderer
      App.Views.MarkerView.detailsRenderer @model
    else
      super()
