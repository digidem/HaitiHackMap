(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.DefaultMarkerView = (function(_super) {

    __extends(DefaultMarkerView, _super);

    function DefaultMarkerView() {
      this.show = __bind(this.show, this);

      this.hide = __bind(this.hide, this);

      this.popupContents = __bind(this.popupContents, this);

      this.location = __bind(this.location, this);

      this.loadMarker = __bind(this.loadMarker, this);
      return DefaultMarkerView.__super__.constructor.apply(this, arguments);
    }

    DefaultMarkerView.prototype.initialize = function() {
      this.map = App.map.map;
      this.loadMarker();
      this.show();
      return this;
    };

    DefaultMarkerView.prototype.loadMarker = function(options) {
      if (options == null) {
        options = {};
      }
      this.marker = L.marker(this.location(), options);
      return this.marker.bindPopup(this.popupContents());
    };

    DefaultMarkerView.prototype.location = function() {
      return [this.model.get("lat"), this.model.get("lon")];
    };

    DefaultMarkerView.prototype.popupContents = function() {
      return "<h6>" + (this.model.get('display_name')) + "</h6>\n<note>" + (this.location().toString()) + "</note>";
    };

    DefaultMarkerView.prototype.hide = function() {
      return this.map.removeLayer(this.marker);
    };

    DefaultMarkerView.prototype.show = function() {
      return this.map.addLayer(this.marker);
    };

    return DefaultMarkerView;

  })(Backbone.View);

}).call(this);
