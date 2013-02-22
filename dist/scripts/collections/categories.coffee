class App.Collections.Categories extends Backbone.Collection
  model: App.Models.Category
  #TODO
  url: ->
    if App.Collections.Categories.categoriesUrl
      App.Collections.Categories.categoriesUrl
    else
      "scripts/categories.json"

  initialize: ->
    @fetch()
    @

  filter: ->
