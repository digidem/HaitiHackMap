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
      name = model.get 'category_name'

      """
      <li>
        <label class='#{name}'>
          <input type='checkbox' checked='checked' />
          #{name}
          <span class='box'></span>
            </label>
      </li>
      """
    )

  handleClick: =>
    @collection.filter()
