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
      cat = child.model.get('category_name')
      if App.filters.isCategorySelected(cat)
        child.show()
      else
        child.hide()
