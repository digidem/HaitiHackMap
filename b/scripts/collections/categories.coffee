class App.Collections.Categories extends Backbone.Collection
  model: App.Models.Category
  #TODO
  url: "scripts/categories.json"

  initialize: ->
    @fetch()
    @

  filter: ->
