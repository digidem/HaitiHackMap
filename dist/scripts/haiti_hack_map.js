(function() {
  var HaitiHackMap,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  HaitiHackMap = (function() {

    function HaitiHackMap(options) {
      if (options == null) {
        options = {};
      }
      this.run = __bind(this.run, this);

      this.setup = __bind(this.setup, this);

      this.options = options;
      this.setup();
      this.run();
    }

    HaitiHackMap.prototype.setup = function() {
      L.Icon.Default.imagePath = this.options.leafletImagesPath || "images";
      App.Views.MarkerView.detailsRenderer = this.options.detailsRenderer;
      return App.Collections.Pois.resultsUrl = this.options.resultsUrl;
    };

    HaitiHackMap.prototype.run = function() {
      console.log("Running");
      return new App.Router();
    };

    return HaitiHackMap;

  })();

  window.HaitiHackMap = HaitiHackMap;

}).call(this);
