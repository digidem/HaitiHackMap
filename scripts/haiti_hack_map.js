(function() {
  var HaitiHackMap,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  HaitiHackMap = (function() {

    function HaitiHackMap(options) {
      if (options == null) {
        options = {};
      }
      this.setup = __bind(this.setup, this);

      this.options = options;
      this.setup();
      this.run();
    }

    HaitiHackMap.prototype.setup = function() {
      L.Icon.Default.imagePath = this.options.leafletImagesPath || "images";
      return App.options = {
        categoriesUrl: this.options.categoriesUrl,
        detailsRenderer: this.options.detailsRenderer,
        extractLocation: this.options.extractLocation,
        resultsUrl: this.options.resultsUrl,
        titleRenderer: this.options.titleRenderer,
        titleTemplate: this.options.titleTemplate,
        detailsTemplate: this.options.detailsTemplate
      };
    };

    HaitiHackMap.prototype.run = function() {
      return new App.Router();
    };

    return HaitiHackMap;

  })();

  window.HaitiHackMap = HaitiHackMap;

}).call(this);
