(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.ButtonNavView = (function(_super) {

    __extends(ButtonNavView, _super);

    function ButtonNavView() {
      return ButtonNavView.__super__.constructor.apply(this, arguments);
    }

    ButtonNavView.prototype.tagName = "div";

    ButtonNavView.prototype.id = "scroll";

    ButtonNavView.prototype.className = "btn-group";

    ButtonNavView.prototype.done = false;

    ButtonNavView.prototype.events = {
      "click #top": "scrollToTop",
      "click #map": "scrollToMap",
      "click #srch": "scrollToSrch"
    };

    ButtonNavView.prototype.initialize = function() {
      this.render();
      return this;
    };

    ButtonNavView.prototype.scrollToTop = function(event) {
      event.stopImmediatePropagation();
      return $("html, body").animate({
        scrollTop: 0
      }, "slow");
    };

    ButtonNavView.prototype.scrollToMap = function(event) {
      event.stopImmediatePropagation();
      return $("html, body").animate({
        scrollTop: $('#map').offset().top
      }, "slow");
    };

    ButtonNavView.prototype.scrollToSrch = function(event) {
      event.stopImmediatePropagation();
      return $("html, body").animate({
        scrollTop: $('#search').offset().top
      }, "slow");
    };

    ButtonNavView.prototype.render = function() {
      this.$el.append($('<button/>').text("Top").addClass("btn").attr("id", "top"));
      this.$el.append($('<button/>').text("Search").addClass("btn").attr("id", "srch"));
      return this.$el.append($('<button/>').text("Map").addClass("btn").attr("id", "map"));
    };

    return ButtonNavView;

  })(Backbone.View);

}).call(this);
