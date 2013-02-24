(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.DefaultMarkerView = (function(_super) {

    __extends(DefaultMarkerView, _super);

    function DefaultMarkerView() {
      this.popupContents = __bind(this.popupContents, this);

      this.location = __bind(this.location, this);

      this.display = __bind(this.display, this);
      return DefaultMarkerView.__super__.constructor.apply(this, arguments);
    }

    DefaultMarkerView.prototype.initialize = function() {
      this.map = App.map.map;
      this.display();
      return this;
    };

    DefaultMarkerView.prototype.display = function(options) {
      var m;
      if (options == null) {
        options = {};
      }
      m = L.marker(this.location(), options);
      m.bindPopup(this.popupContents());
      return m.addTo(this.map);
    };

    DefaultMarkerView.prototype.location = function() {
      console.log(this.model);
      return [this.model.get("lat"), this.model.get("lon")];
    };

    DefaultMarkerView.prototype.popupContents = function() {
      return "<h6>" + (this.model.get('display_name')) + "</h6>\n<note>" + (this.location().toString()) + "</note>";
    };

    return DefaultMarkerView;

  })(Backbone.View);

}).call(this);
