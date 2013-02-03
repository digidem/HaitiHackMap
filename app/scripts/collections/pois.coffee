class App.Collections.Pois extends Backbone.Collection
  model: App.Models.Poi
  url: "scripts/results.json"

  initialize: ->
    _.defer(@grab)
    @

  grab: =>
    @fetch()
