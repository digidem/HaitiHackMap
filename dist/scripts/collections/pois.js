(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Collections.Pois = (function(_super) {

    __extends(Pois, _super);

    function Pois() {
      this.grab = __bind(this.grab, this);
      return Pois.__super__.constructor.apply(this, arguments);
    }

    Pois.resultsUrl = null;

    Pois.prototype.model = App.Models.Poi;

    Pois.prototype.url = function() {
      return App.Collections.Pois.resultsUrl || "scripts/results.json";
    };

    Pois.prototype.initialize = function() {
      _.defer(this.grab);
      return this;
    };

    Pois.prototype.grab = function() {
      return this.fetch();
    };

    return Pois;

  })(Backbone.Collection);

}).call(this);
