(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.MarkerView = (function(_super) {

    __extends(MarkerView, _super);

    function MarkerView() {
      this.details = __bind(this.details, this);

      this.title = __bind(this.title, this);
      return MarkerView.__super__.constructor.apply(this, arguments);
    }

    MarkerView.prototype.initialize = function(options) {
      this.map = App.map.map;
      this.display();
      return this;
    };

    MarkerView.prototype.display = function() {
      var m;
      m = L.marker(this.location());
      m.bindPopup("" + (this.title()) + (this.details()));
      return m.addTo(this.map);
    };

    MarkerView.prototype.location = function() {
      return [this.model.get("lat"), this.model.get("lon")];
    };

    MarkerView.prototype.title = function() {
      return "<h6>" + (this.model.get('display_name')) + "</h6>";
    };

    MarkerView.prototype.details = function() {
      return "<note>" + (this.location().toString()) + "</note>";
    };

    return MarkerView;

  })(Backbone.View);

}).call(this);
