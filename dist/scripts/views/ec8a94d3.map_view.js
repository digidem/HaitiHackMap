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

    MapView.prototype.initialize = function() {
      this.render();
      this.$el.height($(document).height());
      this.listenTo(App.search, "result:select", this.centerMap);
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
      tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
      return tiles.addTo(this.map);
    };

    MapView.prototype.centerMap = function(model) {
      var marker;
      marker = new App.Views.MarkerView({
        model: model,
        map: this.map
      });
      return this.map.setView(marker.location(), this.ZOOM);
    };

    return MapView;

  })(Backbone.View);

}).call(this);
