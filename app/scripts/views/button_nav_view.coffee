class App.Views.ButtonNavView extends Backbone.View
  tagName: "div"
  id: "scroll"
  className: "btn-group"

  done: false

  events:
    "click #top": "scrollToTop"
    "click #map": "scrollToMap"
    "click #srch": "scrollToSrch"

  initialize: ->
    @render()
    @

  scrollToTop: (event) ->
    event.stopImmediatePropagation()
    $("html, body").animate({ scrollTop: 0 }, "slow")

  scrollToMap: (event) ->
    event.stopImmediatePropagation()
    $("html, body").animate({ scrollTop: $('#map').offset().top }, "slow")

  scrollToSrch: (event) ->
    event.stopImmediatePropagation()
    $("html, body").animate({ scrollTop: $('#search').offset().top }, "slow")

  render: ->
    @$el.append $('<button/>').text("Top").addClass("btn").attr("id", "top")
    @$el.append $('<button/>').text("Search").addClass("btn").attr("id", "srch")
    @$el.append $('<button/>').text("Map").addClass("btn").attr("id", "map")
