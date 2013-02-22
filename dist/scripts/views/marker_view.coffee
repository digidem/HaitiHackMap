class App.Views.MarkerView extends App.Views.DefaultMarkerView
  display: (options = {}) =>
    classes = "#{@model.get("category_name")} custom-icon"
    icon = L.divIcon(className: classes)
    options.icon = icon
    super(options)

  classes: =>

  location: =>
    if App.options.extractLocation
      App.options.extractLocation @model
    else
      super()

  title: =>
    if App.options.titleTemplate
      @useTemplate App.options.titleTemplate
    else if App.options.titleRenderer
      @useFunction App.options.titleRenderer
    else
      super()

  details: =>
    if App.options.detailsTemplate
      @useTemplate App.options.detailsTemplate
    else if App.options.detailsRenderer
      @useFunction App.options.detailsRenderer
    else
      super()

  useTemplate: (template) =>
    compiled = _.template template
    compiled @model.attributes

  useFunction: (func) =>
    func @model
