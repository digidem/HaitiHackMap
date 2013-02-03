class App.Views.FiltersView extends Backbone.View
  tagName: "ul"
  className: "filters"
  events:
    "change input": 'handleClick'

  initialize: ->
    @render()
    @listenTo @collection, "reset", @render
    @

  render: ->
    @$el.html(@collection.map (model) ->
      "<li><label><input type='checkbox' checked='checked' />#{model.get 'name'}</label></li>"
    )

  handleClick: =>
    @collection.filter()
