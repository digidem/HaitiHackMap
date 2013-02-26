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
      "click": "scroll"
    };

    ButtonNavView.prototype.initialize = function() {
      this.render();
      return this;
    };

    ButtonNavView.prototype.render = function() {
      this.$el.append(this.createButton("Top"));
      this.$el.append(this.createButton("Search", "#search"));
      return this.$el.append(this.createButton("Map", "#map"));
    };

    ButtonNavView.prototype.scroll = function(event) {
      var $target, target, top;
      $target = $(event.target);
      $(".active").removeClass("active");
      $target.addClass("active");
      target = $target.data("target");
      top = target === null ? 0 : $(target).offset().top;
      return $("html, body").animate({
        scrollTop: top
      }, "slow");
    };

    ButtonNavView.prototype.createButton = function(text, target) {
      if (target == null) {
        target = null;
      }
      return $('<button/>').text(text).addClass("btn").data("target", target);
    };

    return ButtonNavView;

  })(Backbone.View);

}).call(this);
