(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.MapView = (function(_super) {

    __extends(MapView, _super);

    function MapView() {
      this.initMap = __bind(this.initMap, this);
      return MapView.__super__.constructor.apply(this, arguments);
    }

    MapView.prototype.tagName = 'section';

    MapView.prototype.id = 'map';

    MapView.prototype.ZOOM = 14;

    MapView.prototype.tileProvider = 'stamen';

    MapView.prototype.initialize = function() {
      var _ref;
      this.render();
      this.$el.height($(document).height());
      this.listenTo(App.search, "result:select", this.resultSelected);
      if ((_ref = this.tileProvider) == null) {
        this.tileProvider = "osm";
      }
      return this;
    };

    MapView.prototype.render = function() {
      return _.defer(this.initMap);
    };

    MapView.prototype.initMap = function() {
      var loc, tiles;
      this.map = L.map(this.id);
      loc = [18.528984, -72.323686];
      this.map.setView(loc, this.ZOOM);
      tiles = L.tileLayer(this.tilesUrlPattern());
      return this.map.addLayer(tiles);
    };

    MapView.prototype.resultSelected = function(model) {
      var marker;
      marker = new App.Views.MarkerView({
        model: model,
        map: this.map,
        type: "default"
      });
      return this.map.panTo(marker.location());
    };

    MapView.prototype.tilesUrlPattern = function() {
      switch (this.tileProvider) {
        case "stamen":
          return "http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png";
        case "osm":
          return "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
      }
    };

    return MapView;

  })(Backbone.View);

}).call(this);
