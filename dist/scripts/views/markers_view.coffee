class App.Views.MarkersView extends Backbone.View
  initialize: (options) ->
    {@map} = options

    @children = _([])
    @listenTo @collection, 'reset', @addMarkers
    @

  addMarkers: =>
    @collection.each (model) =>
      @children.push(new App.Views.MarkerView(model: model, map: @map))
