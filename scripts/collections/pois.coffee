class App.Collections.Pois extends Backbone.Collection
  @resultsUrl: null
  model: App.Models.Poi

  url: ->
    App.Collections.Pois.resultsUrl || "scripts/results.json"

  initialize: ->
    _.defer(@grab)
    @

  grab: =>
    @fetch()
