(function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};App.Views.SearchView=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.tagName="nav",n.prototype.id="search",n.prototype.events={'input [type="search"]':"handleInput","submit form":"preventSubmission"},n.prototype.initialize=function(){return this.collection=new App.Collections.OSMResults,this.listenTo(this.collection,"reset",this.showResults),this.on("result:select",this.selectResult),this.postInitialize(),this},n.prototype.postInitialize=function(){return this.render(),this},n.prototype.render=function(){return this.$el.append('<form class="search_form">\n  <input type="search"\n    results=5 autosave="persist_search"\n    placeholder="Search..." />\n    <span class="loader" />\n</form>'),this},n.prototype.renderResultPane=function(){return this.$osm_results=$('<ul class="osm_results" />'),this.$el.after(this.$osm_results)},n.prototype.handleInput=_.debounce(function(e){return this.doSearch(e)},500),n.prototype.doSearch=function(e){var t;return this.emptyResults(),$("span.loader").length>0||this.$el.append($("<span/>").addClass("loader")),t=$(e.target).val(),this.collection.search(t)},n.prototype.preventSubmission=function(e){return e.preventDefault(),!1},n.prototype.showResults=function(){return this.renderResultPane(),this.emptyResults(),this.collection.length>0?this.$osm_results.html(this.collection.map(function(e){return(new App.Views.OSMResultView({model:e})).el})):this.$osm_results.html("<li>No results found</li>"),this.$osm_results.fadeIn("fast")},n.prototype.selectResult=function(e){var t;return this.emptyResults(),this.$('input[type="search"]').val(e.get("display_name")),t=new App.Views.DefaultMarkerView({model:e,map:App.map.map}),App.map.map.panTo(t.location())},n.prototype.emptyResults=function(){if(!this.$osm_results||this.$osm_results===null)return;return this.$osm_results.fadeOut("fast"),this.$osm_results.empty()},n}(Backbone.View)}).call(this);