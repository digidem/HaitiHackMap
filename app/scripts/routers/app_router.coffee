class App.Router extends Backbone.Router
  routes:
    '': 'default'

  initialize: ->
    @$el = $ '#app'
    App.search = new App.Views.SearchView()
    App.map = new App.Views.MapView()
    App.categories = new App.Collections.Categories()
    App.filters = new App.Views.FiltersView(collection: App.categories)
    App.pois = new App.Collections.Pois()
    App.markersView = new App.Views.MarkersView
      collection: App.pois,
      map: App.map.map

    @$el.append(App.search.el).append(App.map.el)
    @addAside()
    @addScrollToTop()

  addAside: ->
    aside = $("<aside></aside>").addClass('clearfix')
    aside.append(App.filters.el)
    @$el.prepend(aside)

  addScrollToTop: ->
    scrollToTop = new App.Views.ScrollToTopView()
    $(App.map.el).append(scrollToTop.el)

  default: ->
    @
