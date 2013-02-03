class App.Views.SearchView extends Backbone.View
  tagName: "section"
  id: "search"

  events:
    'input [type="search"]' : 'handleInput'

  initialize: ->
    @collection = new App.Collections.OSMResults()
    @listenTo @collection, 'reset', @showResults
    @on 'result:select', @selectResult
    @render()
    @

  render: ->
    @renderForm()
    @renderResultPane()
    @

  renderForm: ->
    @$el.html(
      """
      <form class="search_form">
        <input type="search" placeholder="Search..." />
        <img class="loader" src="/images/loader.gif" />
      </form>
      """
    )

  renderResultPane: ->
    @$osm_results = $('<ul class="osm_results" />')
    @$el.append(@$osm_results)

  handleInput: _.debounce( (e) ->
    q = @$(e.target).val()
    @collection.search(q)
  , 500)

  showResults: () ->
    @emptyResults()
    @$osm_results.html(@collection.map (model) ->
      new App.Views.OSMResultView(model: model).el
    )
    @$osm_results.fadeIn('fast')

  selectResult: (model) =>
    @emptyResults()
    @$('input[type="search"]').val model.get('display_name')

  emptyResults: ->
    @$osm_results.fadeOut('fast')
    @$osm_results.empty()
