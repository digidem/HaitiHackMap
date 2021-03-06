class App.Views.FiltersView extends Backbone.View
  tagName: "ul"
  className: "filters"
  events:
    "change": 'handleClick'

  initialize: ->
    @listenTo @collection, "reset", @render
    @

  render: ->
    @$el.html(@collection.map (model) ->
      name = model.get 'category_name'

      """
      <li>
        <label class='#{name}'>
          <input type='checkbox' name="category"
            value="#{name}" checked='checked' />
          #{name}
          <span class='category_box'></span>
        </label>
      </li>
      """
    )

  handleClick: =>
    App.markersView.trigger 'filter'

  isCategorySelected: (category_name) =>
    !!@$el.find("input[value='#{category_name}']").prop('checked')

  hasCategorySelected: (category_names) ->
    selected = false
    ary = category_names.split(', ')
    $(ary).each (i, category) =>
      if @isCategorySelected(category)
        selected = true

    return selected
