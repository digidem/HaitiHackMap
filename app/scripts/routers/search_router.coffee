class App.SearchRouter extends Backbone.Router
  routes:
    '': 'default'

  initialize: ->
    $el = $ "input[name='builtAddress']"
    App.search = new App.Views.SimpleSearchView el: $el
    @

  default: ->
    @

class SearchListener
  constructor: ($base) ->
    @$base = $base
    @setup()

  setup: =>
    @$address = @$base.find("[data-addressSearch='search']")
    @$sources = @$base.find("[data-addressSearch='source']")
    @$targets = @$base.find("[data-addressSearch='target']")
    @$trigger = @$base.find("[data-addressSearch='trigger']")
    @addListeners()

  addListeners: =>
    @$address.on "change", @search
    @$sources.on "change", @search
    @$trigger.on "click", @search

  search: =>
    address = @$address.val()

    return if address.length == 0

    out = ""
    @$sources.each (i, val) ->
      v = $(val).children("option").filter(":selected").text()
      unless v == "None"
        if out == ""
          out = v
        else
          out = "#{out}, #{v}"

    $('[name="builtAddress"]').val "#{@$address.val()}, #{out}"
    App.search.$el.trigger 'change'
    console.log("A")

window.SearchListener = SearchListener
