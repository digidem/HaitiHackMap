class App.Collections.Pois extends Backbone.Collection
  model: App.Models.Poi
  url: ->
    if window.results_url
      window.results_url
    else
      "scripts/results.json"

  initialize: ->
    _.defer(@grab)
    @

  grab: =>
    @fetch()
