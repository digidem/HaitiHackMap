(function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};App.Router=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.routes={"":"default"},n.prototype.initialize=function(){return this.$el=$("#app"),App.search=new App.Views.SearchView,App.map=new App.Views.MapView,App.categories=new App.Collections.Categories,App.filters=new App.Views.FiltersView({collection:App.categories}),App.pois=new App.Collections.Pois,App.markersView=new App.Views.MarkersView({collection:App.pois,map:App.map.map}),this.$el.append(App.search.$el).append(App.map.$el),this.addAside(),this.addButtonNav()},n.prototype.addAside=function(){var e;return e=$("<aside></aside>").addClass("clearfix"),e.append(App.filters.el),this.$el.prepend(e)},n.prototype.addButtonNav=function(){return(new App.Views.ButtonNavView).$el.appendTo(App.map.$el)},n.prototype["default"]=function(){return this},n}(Backbone.Router)}).call(this);