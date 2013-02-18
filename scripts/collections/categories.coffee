class App.Collections.Categories extends Backbone.Collection
  model: App.Models.Category
  #TODO
  url: ->
    if window.categories_url
      window.categories_url
    else
      "scripts/categories.json"

  initialize: ->
    @fetch()
    @

  filter: ->
