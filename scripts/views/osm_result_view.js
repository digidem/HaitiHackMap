(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.OSMResultView = (function(_super) {

    __extends(OSMResultView, _super);

    function OSMResultView() {
      this.handleClick = __bind(this.handleClick, this);
      return OSMResultView.__super__.constructor.apply(this, arguments);
    }

    OSMResultView.prototype.tagName = 'li';

    OSMResultView.prototype.events = {
      'click': 'handleClick'
    };

    OSMResultView.prototype.initialize = function() {
      this.render();
      return this;
    };

    OSMResultView.prototype.render = function() {
      var text;
      text = this.model.get('display_name');
      this.$el.html(text).prop("title", text);
      return this;
    };

    OSMResultView.prototype.handleClick = function(e) {
      return App.search.trigger('result:select', this.model);
    };

    return OSMResultView;

  })(Backbone.View);

}).call(this);
