class App.Router extends Backbone.Router
  routes:
    '': 'default'

  initialize: ->
    @$el = $ '#app'
    App.search = new App.Views.SearchView()
    App.map = new App.Views.MapView()
    @$el.append(App.search.el)
      .append(App.map.el)

  default: ->
    @