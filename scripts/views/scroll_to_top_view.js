(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.ScrollToTopView = (function(_super) {

    __extends(ScrollToTopView, _super);

    function ScrollToTopView() {
      return ScrollToTopView.__super__.constructor.apply(this, arguments);
    }

    ScrollToTopView.prototype.tagName = "button";

    ScrollToTopView.prototype.className = "btn";

    ScrollToTopView.prototype.id = "toTop";

    ScrollToTopView.prototype.events = {
      "click": "handleClick"
    };

    ScrollToTopView.prototype.initialize = function() {
      this.render();
      return this;
    };

    ScrollToTopView.prototype.handleClick = function(event) {
      event.preventDefault;
      return $("html, body").animate({
        scrollTop: 0
      }, "slow");
    };

    ScrollToTopView.prototype.render = function() {
      return this.$el.text("Scroll To Top");
    };

    return ScrollToTopView;

  })(Backbone.View);

}).call(this);
