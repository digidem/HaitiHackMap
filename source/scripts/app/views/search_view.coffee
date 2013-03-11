class App.Views.SearchView extends Backbone.View
  tagName: "nav"
  id: "search"

  events:
    'input [type="search"]': 'handleInput'
    'submit form': 'preventSubmission'

  initialize: ->
    @collection = new App.Collections.OSMResults()
    @listenTo @collection, 'reset', @showResults
    @on 'result:select', @selectResult
    @postInitialize()
    @

  postInitialize: ->
    @render()
    @

  render: ->
    @$el.append(
      """
      <form class="search_form">
        <input type="search"
          results=5 autosave="persist_search"
          placeholder="Search..." />
          <span class="loader" />
      </form>
      """
    )
    @

  renderResultPane: ->
    @$osm_results = $('<ul class="osm_results" />')
    @$el.after(@$osm_results)

  handleInput: _.debounce((e) ->
    @doSearch(e)
  , 500)

  doSearch: (e) ->
    @emptyResults()
    unless $("span.loader").length > 0
      @$el.append $("<span/>").addClass("loader")
    q = $(e.target).val()
    @collection.search(q)

  preventSubmission: (e) ->
    e.preventDefault()
    false

  showResults: () ->
    @renderResultPane()
    @emptyResults()
    @$osm_results.html(@collection.map (model) ->
      new App.Views.OSMResultView(model: model).el
    )
    @$osm_results.fadeIn('fast')

  selectResult: (model) ->
    @emptyResults()
    @$('input[type="search"]').val model.get('display_name')

    marker = new App.Views.DefaultMarkerView
      model: model
      map: App.map.map
    App.map.map.panTo(marker.location())

  emptyResults: ->
    return if !@$osm_results || @$osm_results == null
    @$osm_results.fadeOut('fast')
    @$osm_results.empty()
