(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.SearchView = (function(_super) {

    __extends(SearchView, _super);

    function SearchView() {
      this.selectResult = __bind(this.selectResult, this);
      return SearchView.__super__.constructor.apply(this, arguments);
    }

    SearchView.prototype.tagName = "section";

    SearchView.prototype.id = "search";

    SearchView.prototype.events = {
      'input [type="search"]': 'handleInput',
      'submit form': 'preventSubmission'
    };

    SearchView.prototype.initialize = function() {
      this.collection = new App.Collections.OSMResults();
      this.listenTo(this.collection, 'reset', this.showResults);
      this.on('result:select', this.selectResult);
      this.render();
      return this;
    };

    SearchView.prototype.render = function() {
      this.renderForm();
      this.renderResultPane();
      return this;
    };

    SearchView.prototype.renderForm = function() {
      return this.$el.html("<form class=\"search_form\">\n  <input type=\"search\" results=5 autosave=\"persist_search\" placeholder=\"Search...\" />\n  <span class=\"loader\" />\n</form>");
    };

    SearchView.prototype.renderResultPane = function() {
      this.$osm_results = $('<ul class="osm_results" />');
      return this.$el.append(this.$osm_results);
    };

    SearchView.prototype.handleInput = _.debounce(function(e) {
      var q;
      q = this.$(e.target).val();
      return this.collection.search(q);
    }, 500);

    SearchView.prototype.preventSubmission = function(e) {
      e.preventDefault();
      return false;
    };

    SearchView.prototype.showResults = function() {
      this.emptyResults();
      this.$osm_results.html(this.collection.map(function(model) {
        return new App.Views.OSMResultView({
          model: model
        }).el;
      }));
      return this.$osm_results.fadeIn('fast');
    };

    SearchView.prototype.selectResult = function(model) {
      this.emptyResults();
      return this.$('input[type="search"]').val(model.get('display_name'));
    };

    SearchView.prototype.emptyResults = function() {
      this.$osm_results.fadeOut('fast');
      return this.$osm_results.empty();
    };

    return SearchView;

  })(Backbone.View);

}).call(this);
