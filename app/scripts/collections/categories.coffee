class App.Collections.Categories extends Backbone.Collection
  model: App.Models.Category

  #TODO
  url: ->
    if App.options.categoriesUrl
      App.options.categoriesUrl
    else
      "scripts/categories.json"

  initialize: ->
    @fetch()
    @

  filter: ->
