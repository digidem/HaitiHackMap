class App.Views.MarkersView extends Backbone.View

  initialize: (options) ->
    {@map} = options

    @children = _([])
    @listenTo @collection, 'reset', @addMarkers
    @on 'filter', @changeMarkers
    @

  addMarkers: =>
    @collection.each (model) =>
      @children.push(new App.Views.MarkerView(model: model, map: @map))

  changeMarkers: =>
    @children.each (child) =>
      category_names = child.model.get('category_names')

      if App.filters.hasCategorySelected(category_names)
        child.show()
      else
        child.hide()
