class App.Views.MarkerView extends App.Views.DefaultMarkerView
  loadMarker: (options = {}) =>
    icon = L.divIcon(className: @classes())
    options.icon = icon
    super(options)

  classes: =>
    "#{@model.get("category_name")} custom-icon"

  location: =>
    if App.options.extractLocation
      App.options.extractLocation @model
    else
      super()

  popupContents: =>
    if App.options.popupContentsTemplate
      @useTemplate App.options.popupContentsTemplate
    else if App.options.popupContentsRenderer
      @useFunction App.options.popupContentsRenderer
    else
      super()

  useTemplate: (template) =>
    compiled = _.template template
    compiled @model.attributes

  useFunction: (func) =>
    func @model
