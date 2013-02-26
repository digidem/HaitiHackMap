class App.Views.ButtonNavView extends Backbone.View
  tagName: "div"
  id: "scroll"
  className: "btn-group"

  done: false

  events:
    "click": "scroll"

  initialize: ->
    @render()
    @

  render: ->
    @$el.append @createButton("Top")
    @$el.append @createButton("Search", "#search")
    @$el.append @createButton("Map", "#map")

  scroll: (event) ->
    $target = $(event.target)
    $(".active").removeClass("active")
    $target.addClass("active")
    target = $target.data("target")
    top = if target == null then 0 else $(target).offset().top
    $("html, body").animate({ scrollTop: top }, "slow")

  createButton: (text, target = null) ->
    $('<button/>').text(text).addClass("btn").data("target", target)
