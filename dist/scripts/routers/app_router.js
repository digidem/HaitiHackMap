(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Router = (function(_super) {

    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.routes = {
      '': 'default'
    };

    Router.prototype.initialize = function() {
      this.$el = $('#app');
      App.search = new App.Views.SearchView();
      App.map = new App.Views.MapView();
      App.categories = new App.Collections.Categories();
      App.filters = new App.Views.FiltersView({
        collection: App.categories
      });
      App.pois = new App.Collections.Pois();
      App.markersView = new App.Views.MarkersView({
        collection: App.pois,
        map: App.map.map
      });
      this.$el.append(App.search.$el).append(App.map.$el);
      this.addAside();
      return this.addButtonNav();
    };

    Router.prototype.addAside = function() {
      var aside;
      aside = $("<aside></aside>").addClass('clearfix');
      aside.append(App.filters.el);
      return this.$el.prepend(aside);
    };

    Router.prototype.addButtonNav = function() {
      return new App.Views.ButtonNavView().$el.appendTo(App.map.$el);
    };

    Router.prototype["default"] = function() {
      return this;
    };

    return Router;

  })(Backbone.Router);

}).call(this);
