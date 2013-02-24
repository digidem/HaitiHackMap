class App.Views.ScrollToTopView extends Backbone.View
  tagName: "button"
  className: "btn"
  id: "toTop"

  events:
    "click": "handleClick"

  initialize: ->
    @render()
    @

  handleClick: (event) ->
    event.preventDefault
    $("html, body").animate({ scrollTop: 0 }, "slow")

  render: ->
    @$el.text "Scroll To Top"
