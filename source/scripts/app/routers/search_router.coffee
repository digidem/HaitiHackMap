class App.SearchRouter extends Backbone.Router
  routes:
    '': 'default'

  initialize: ->
    $el = $ "input[name='builtAddress']"
    App.search = new App.Views.SimpleSearchView el: $el
    @

  default: ->
    @
