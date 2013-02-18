class App.Views.FiltersView extends Backbone.View
  tagName: "ul"
  className: "filters"
  events:
    "change input": 'handleClick'

  initialize: ->
    @render()
    @listenTo @collection, "reset", @render
    @

  render: ->
    @$el.html(@collection.map (model) ->
      name = model.get 'name'
      """
      <li>
        <label class='#{category_name}'>
          <input type='checkbox' checked='checked' />
          #{category_name}
          <span class='box'></span>
            </label>
      </li>
      """
    )

  handleClick: =>
    @collection.filter()
