class App.Views.OSMResultView extends Backbone.View
  tagName: 'li'
  events:
    'click': 'handleClick'

  initialize: ->
    @render()
    @

  render: ->
    text = @model.get 'display_name'
    @$el.html(text).prop("title", text)
    @

  handleClick: (e) =>
    App.search.trigger 'result:select', @model