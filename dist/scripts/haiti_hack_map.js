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
        extractLocation: this.options.extractLocation,
        popupContentsRenderer: this.options.popupContentsRenderer,
        popupContentsTemplate: this.options.popupContentsTemplate,
        resultsUrl: this.options.resultsUrl
      };
    };

    HaitiHackMap.prototype.run = function() {
      return new App.Router();
    };

    return HaitiHackMap;

  })();

  window.HaitiHackMap = HaitiHackMap;

}).call(this);
