(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.FiltersView = (function(_super) {

    __extends(FiltersView, _super);

    function FiltersView() {
      this.isCategorySelected = __bind(this.isCategorySelected, this);

      this.handleClick = __bind(this.handleClick, this);
      return FiltersView.__super__.constructor.apply(this, arguments);
    }

    FiltersView.prototype.tagName = "ul";

    FiltersView.prototype.className = "filters";

    FiltersView.prototype.events = {
      "change": 'handleClick'
    };

    FiltersView.prototype.initialize = function() {
      this.listenTo(this.collection, "reset", this.render);
      return this;
    };

    FiltersView.prototype.render = function() {
      return this.$el.html(this.collection.map(function(model) {
        var name;
        name = model.get('category_name');
        return "<li>\n  <label class='" + name + "'>\n    <input type='checkbox' name=\"category\"\n      value=\"" + name + "\" checked='checked' />\n    " + name + "\n    <span class='category_box'></span>\n  </label>\n</li>";
      }));
    };

    FiltersView.prototype.handleClick = function() {
      return App.markersView.trigger('filter');
    };

    FiltersView.prototype.isCategorySelected = function(category_name) {
      return !!this.$el.find("input[value='" + category_name + "']").prop('checked');
    };

    FiltersView.prototype.hasCategorySelected = function(category_names) {
      var ary, selected,
        _this = this;
      selected = false;
      ary = category_names.split(', ');
      $(ary).each(function(i, category) {
        if (_this.isCategorySelected(category)) {
          return selected = true;
        }
      });
      return selected;
    };

    return FiltersView;

  })(Backbone.View);

}).call(this);
