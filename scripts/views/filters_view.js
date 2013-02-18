(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.FiltersView = (function(_super) {

    __extends(FiltersView, _super);

    function FiltersView() {
      this.handleClick = __bind(this.handleClick, this);
      return FiltersView.__super__.constructor.apply(this, arguments);
    }

    FiltersView.prototype.tagName = "ul";

    FiltersView.prototype.className = "filters";

    FiltersView.prototype.events = {
      "change input": 'handleClick'
    };

    FiltersView.prototype.initialize = function() {
      this.render();
      this.listenTo(this.collection, "reset", this.render);
      return this;
    };

    FiltersView.prototype.render = function() {
      return this.$el.html(this.collection.map(function(model) {
        var name;
        name = model.get('category_name');
        return "<li>\n  <label class='" + name + "'>\n    <input type='checkbox' checked='checked' />\n    " + name + "\n    <span class='box'></span>\n      </label>\n</li>";
      }));
    };

    FiltersView.prototype.handleClick = function() {
      return this.collection.filter();
    };

    return FiltersView;

  })(Backbone.View);

}).call(this);
