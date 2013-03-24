class App.Views.SimpleSearchView extends App.Views.SearchView
  events:
    'change': 'doSearch'

  postInitialize: =>
    @$el.attr(
      results: 5
      autosave: "persist_search"
      placeholder: "Search..."
    )
    @

  selectResult: (model) ->
    @emptyResults()
    App.options.chosenResultsFunction(model)
