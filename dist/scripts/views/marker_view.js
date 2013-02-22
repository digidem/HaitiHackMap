(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.MarkerView = (function(_super) {

    __extends(MarkerView, _super);

    function MarkerView() {
      this.useFunction = __bind(this.useFunction, this);

      this.useTemplate = __bind(this.useTemplate, this);

      this.details = __bind(this.details, this);

      this.title = __bind(this.title, this);

      this.location = __bind(this.location, this);

      this.classes = __bind(this.classes, this);

      this.display = __bind(this.display, this);
      return MarkerView.__super__.constructor.apply(this, arguments);
    }

    MarkerView.prototype.display = function(options) {
      var classes, icon;
      if (options == null) {
        options = {};
      }
      classes = "" + (this.model.get("category_name")) + " custom-icon";
      icon = L.divIcon({
        className: classes
      });
      options.icon = icon;
      return MarkerView.__super__.display.call(this, options);
    };

    MarkerView.prototype.classes = function() {};

    MarkerView.prototype.location = function() {
      if (App.options.extractLocation) {
        return App.options.extractLocation(this.model);
      } else {
        return MarkerView.__super__.location.call(this);
      }
    };

    MarkerView.prototype.title = function() {
      if (App.options.titleTemplate) {
        return this.useTemplate(App.options.titleTemplate);
      } else if (App.options.titleRenderer) {
        return this.useFunction(App.options.titleRenderer);
      } else {
        return MarkerView.__super__.title.call(this);
      }
    };

    MarkerView.prototype.details = function() {
      if (App.options.detailsTemplate) {
        return this.useTemplate(App.options.detailsTemplate);
      } else if (App.options.detailsRenderer) {
        return this.useFunction(App.options.detailsRenderer);
      } else {
        return MarkerView.__super__.details.call(this);
      }
    };

    MarkerView.prototype.useTemplate = function(template) {
      var compiled;
      compiled = _.template(template);
      return compiled(this.model.attributes);
    };

    MarkerView.prototype.useFunction = function(func) {
      return func(this.model);
    };

    return MarkerView;

  })(App.Views.DefaultMarkerView);

}).call(this);
