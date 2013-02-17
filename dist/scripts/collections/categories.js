(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Collections.Categories = (function(_super) {

    __extends(Categories, _super);

    function Categories() {
      return Categories.__super__.constructor.apply(this, arguments);
    }

    Categories.prototype.model = App.Models.Category;

    Categories.prototype.url = "scripts/categories.json";

    Categories.prototype.initialize = function() {
      this.fetch();
      return this;
    };

    Categories.prototype.filter = function() {};

    return Categories;

  })(Backbone.Collection);

}).call(this);
