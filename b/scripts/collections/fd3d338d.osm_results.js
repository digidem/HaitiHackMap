(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Collections.OSMResults = (function(_super) {

    __extends(OSMResults, _super);

    function OSMResults() {
      return OSMResults.__super__.constructor.apply(this, arguments);
    }

    OSMResults.prototype.model = App.Models.OSMResult;

    OSMResults.prototype.url = "http://nominatim.openstreetmap.org/search/";

    OSMResults.prototype.search = function(q) {
      return this.fetch({
        data: {
          q: q,
          format: 'json',
          countrycodes: 'ht'
        }
      });
    };

    return OSMResults;

  })(Backbone.Collection);

}).call(this);
