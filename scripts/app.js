(function(){window.App={Models:{},Collections:{},Views:{}}}).call(this),function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};App.Models.Category=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.initialize=function(){},n}(Backbone.Model)}.call(this),function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};App.Models.OSMResult=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n,n}(Backbone.Model)}.call(this),function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};App.Models.Poi=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.initialize=function(){return this},n}(Backbone.Model)}.call(this),function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};App.Collections.Categories=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.model=App.Models.Category,n.prototype.url=function(){return App.options.categoriesUrl?App.options.categoriesUrl:"scripts/categories.json"},n.prototype.initialize=function(){return this.fetch(),this},n}(Backbone.Collection)}.call(this),function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};App.Collections.OSMResults=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.model=App.Models.OSMResult,n.prototype.url="http://nominatim.openstreetmap.org/search/",n.prototype.search=function(e){if(e.length>0)return this.fetch({data:{q:e,format:"json",countrycodes:"ht"}})},n}(Backbone.Collection)}.call(this),function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t={}.hasOwnProperty,n=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e};App.Collections.Pois=function(t){function r(){return this.grab=e(this.grab,this),r.__super__.constructor.apply(this,arguments)}return n(r,t),r.prototype.model=App.Models.Poi,r.prototype.url=function(){return App.options.resultsUrl||"scripts/results.json"},r.prototype.initialize=function(){return _.defer(this.grab),this},r.prototype.grab=function(){return this.fetch()},r}(Backbone.Collection)}.call(this),function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};App.Views.ButtonNavView=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.tagName="nav",n.prototype.id="scroll",n.prototype.className="btn-group",n.prototype.done=!1,n.prototype.events={click:"scroll"},n.prototype.initialize=function(){return this.render(),this},n.prototype.render=function(){return this.$el.append(this.createButton("Top")),this.$el.append(this.createButton("Search","#search")),this.$el.append(this.createButton("Map","#map"))},n.prototype.scroll=function(e){var t,n,r;return t=$(e.target),$(".active").removeClass("active"),t.addClass("active"),n=t.data("target"),r=n===null?0:$(n).offset().top,$("html, body").animate({scrollTop:r},"slow")},n.prototype.createButton=function(e,t){return t==null&&(t=null),$("<a/>").text(e).addClass("btn").data("target",t)},n}(Backbone.View)}.call(this),function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t={}.hasOwnProperty,n=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e};App.Views.DefaultMarkerView=function(t){function r(){return this.show=e(this.show,this),this.hide=e(this.hide,this),this.popupContents=e(this.popupContents,this),this.location=e(this.location,this),this.loadMarker=e(this.loadMarker,this),r.__super__.constructor.apply(this,arguments)}return n(r,t),r.prototype.initialize=function(){return this.map=App.map.map,this.loadMarker(),this.show(),this},r.prototype.loadMarker=function(e){return e==null&&(e={}),this.marker=L.marker(this.location(),e),this.marker.bindPopup(this.popupContents())},r.prototype.location=function(){return[this.model.get("lat"),this.model.get("lon")]},r.prototype.popupContents=function(){return"<h6>"+this.model.get("display_name")+"</h6>\n<note>"+this.location().toString()+"</note>"},r.prototype.hide=function(){return this.map.removeLayer(this.marker)},r.prototype.show=function(){return this.map.addLayer(this.marker)},r}(Backbone.View)}.call(this),function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t={}.hasOwnProperty,n=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e};App.Views.FiltersView=function(t){function r(){return this.isCategorySelected=e(this.isCategorySelected,this),this.handleClick=e(this.handleClick,this),r.__super__.constructor.apply(this,arguments)}return n(r,t),r.prototype.tagName="ul",r.prototype.className="filters",r.prototype.events={change:"handleClick"},r.prototype.initialize=function(){return this.listenTo(this.collection,"reset",this.render),this},r.prototype.render=function(){return this.$el.html(this.collection.map(function(e){var t;return t=e.get("category_name"),"<li>\n  <label class='"+t+"'>\n    <input type='checkbox' name=\"category\"\n      value=\""+t+"\" checked='checked' />\n    "+t+"\n    <span class='category_box'></span>\n  </label>\n</li>"}))},r.prototype.handleClick=function(){return App.markersView.trigger("filter")},r.prototype.isCategorySelected=function(e){return!!this.$el.find("input[value='"+e+"']").prop("checked")},r.prototype.hasCategorySelected=function(e){var t,n,r=this;return n=!1,t=e.split(", "),$(t).each(function(e,t){if(r.isCategorySelected(t))return n=!0}),n},r}(Backbone.View)}.call(this),function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t={}.hasOwnProperty,n=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e};App.Views.MapView=function(t){function r(){return this.initMap=e(this.initMap,this),r.__super__.constructor.apply(this,arguments)}return n(r,t),r.prototype.tagName="section",r.prototype.id="map",r.prototype.ZOOM=14,r.prototype.tileProvider="osm",r.prototype.initialize=function(){var e;return this.render(),this.$el.height($(document).height()),(e=this.tileProvider)==null&&(this.tileProvider="osm"),this},r.prototype.render=function(){return _.defer(this.initMap)},r.prototype.initMap=function(){var e,t;return this.map=L.map(this.id),e=[18.528984,-72.323686],this.map.setView(e,this.ZOOM),t=L.tileLayer(this.tilesUrlPattern()),this.map.addLayer(t)},r.prototype.tilesUrlPattern=function(){switch(this.tileProvider){case"stamen":return"http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png";case"osm":return"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}},r}(Backbone.View)}.call(this),function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t={}.hasOwnProperty,n=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e};App.Views.MarkerView=function(t){function r(){return this.useFunction=e(this.useFunction,this),this.useTemplate=e(this.useTemplate,this),this.popupContents=e(this.popupContents,this),this.location=e(this.location,this),this.classes=e(this.classes,this),this.loadMarker=e(this.loadMarker,this),r.__super__.constructor.apply(this,arguments)}return n(r,t),r.prototype.loadMarker=function(e){var t;return e==null&&(e={}),t=L.divIcon({className:this.classes()}),e.icon=t,r.__super__.loadMarker.call(this,e)},r.prototype.classes=function(){return""+this.model.get("category_name")+" custom-icon"},r.prototype.location=function(){return App.options.extractLocation?App.options.extractLocation(this.model):r.__super__.location.call(this)},r.prototype.popupContents=function(){return App.options.popupContentsTemplate?this.useTemplate(App.options.popupContentsTemplate):App.options.popupContentsRenderer?this.useFunction(App.options.popupContentsRenderer):r.__super__.popupContents.call(this)},r.prototype.useTemplate=function(e){var t;return t=_.template(e),t(this.model.attributes)},r.prototype.useFunction=function(e){return e(this.model)},r}(App.Views.DefaultMarkerView)}.call(this),function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t={}.hasOwnProperty,n=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e};App.Views.MarkersView=function(t){function r(){return this.changeMarkers=e(this.changeMarkers,this),this.addMarkers=e(this.addMarkers,this),r.__super__.constructor.apply(this,arguments)}return n(r,t),r.prototype.initialize=function(e){return this.map=e.map,this.children=_([]),this.listenTo(this.collection,"reset",this.addMarkers),this.on("filter",this.changeMarkers),this},r.prototype.addMarkers=function(){var e=this;return this.collection.each(function(t){return e.children.push(new App.Views.MarkerView({model:t,map:e.map}))})},r.prototype.changeMarkers=function(){var e=this;return this.children.each(function(e){var t;return t=e.model.get("category_names"),App.filters.hasCategorySelected(t)?e.show():e.hide()})},r}(Backbone.View)}.call(this),function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t={}.hasOwnProperty,n=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e};App.Views.OSMResultView=function(t){function r(){return this.handleClick=e(this.handleClick,this),r.__super__.constructor.apply(this,arguments)}return n(r,t),r.prototype.tagName="li",r.prototype.events={click:"handleClick"},r.prototype.initialize=function(){return this.render(),this},r.prototype.render=function(){var e;return e=this.model.get("display_name"),this.$el.html(e).prop("title",e),this},r.prototype.handleClick=function(e){return App.search.trigger("result:select",this.model)},r}(Backbone.View)}.call(this),function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};App.Views.SearchView=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.tagName="nav",n.prototype.id="search",n.prototype.events={'input [type="search"]':"handleInput","submit form":"preventSubmission"},n.prototype.initialize=function(){return this.collection=new App.Collections.OSMResults,this.listenTo(this.collection,"reset",this.showResults),this.on("result:select",this.selectResult),this.postInitialize(),this},n.prototype.postInitialize=function(){return this.render(),this},n.prototype.render=function(){return this.$el.append('<form class="search_form">\n  <input type="search"\n    results=5 autosave="persist_search"\n    placeholder="Search..." />\n    <span class="loader" />\n</form>'),this},n.prototype.renderResultPane=function(){return this.$osm_results=$('<ul class="osm_results" />'),this.$el.after(this.$osm_results)},n.prototype.handleInput=_.debounce(function(e){return this.doSearch(e)},500),n.prototype.doSearch=function(e){var t;return this.emptyResults(),$("span.loader").length>0||this.$el.append($("<span/>").addClass("loader")),t=$(e.target).val(),this.collection.search(t)},n.prototype.preventSubmission=function(e){return e.preventDefault(),!1},n.prototype.showResults=function(){return this.renderResultPane(),this.emptyResults(),this.collection.length>0?this.$osm_results.html(this.collection.map(function(e){return(new App.Views.OSMResultView({model:e})).el})):this.$osm_results.html("<li>No results found</li>"),this.$osm_results.fadeIn("fast")},n.prototype.selectResult=function(e){var t;return this.emptyResults(),this.$('input[type="search"]').val(e.get("display_name")),t=new App.Views.DefaultMarkerView({model:e,map:App.map.map}),App.map.map.panTo(t.location())},n.prototype.emptyResults=function(){if(!this.$osm_results||this.$osm_results===null)return;return this.$osm_results.fadeOut("fast"),this.$osm_results.empty()},n}(Backbone.View)}.call(this),function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t={}.hasOwnProperty,n=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e};App.Views.SimpleSearchView=function(t){function r(){return this.postInitialize=e(this.postInitialize,this),r.__super__.constructor.apply(this,arguments)}return n(r,t),r.prototype.events={change:"doSearch"},r.prototype.postInitialize=function(){return this.$el.attr({results:5,autosave:"persist_search",placeholder:"Search..."}),this},r.prototype.selectResult=function(e){return this.emptyResults(),App.options.chosenResultsFunction(e)},r}(App.Views.SearchView)}.call(this),function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};App.Router=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.routes={"":"default"},n.prototype.initialize=function(){return this.$el=$("#app"),App.search=new App.Views.SearchView,App.map=new App.Views.MapView,App.categories=new App.Collections.Categories,App.filters=new App.Views.FiltersView({collection:App.categories}),App.pois=new App.Collections.Pois,App.markersView=new App.Views.MarkersView({collection:App.pois,map:App.map.map}),this.$el.append(App.search.$el).append(App.map.$el),this.addAside(),this.addButtonNav()},n.prototype.addAside=function(){var e;return e=$("<aside></aside>").addClass("clearfix"),e.append(App.filters.el),this.$el.prepend(e)},n.prototype.addButtonNav=function(){return(new App.Views.ButtonNavView).$el.appendTo(App.map.$el)},n.prototype["default"]=function(){return this},n}(Backbone.Router)}.call(this),function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};App.SearchRouter=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.routes={"":"default"},n.prototype.initialize=function(){var e;return e=$("input[name='builtAddress']"),App.search=new App.Views.SimpleSearchView({el:e}),this},n.prototype["default"]=function(){return this},n}(Backbone.Router)}.call(this),function(){$(function(){return $(document).ajaxStart(function(){return $(".loader").addClass("loading")}),$(document).ajaxStop(function(){return $(".loading").removeClass("loading")})})}.call(this),function(){var e,t=function(e,t){return function(){return e.apply(t,arguments)}};e=function(){function e(e){e==null&&(e={}),this.setOptions=t(this.setOptions,this),this.setup=t(this.setup,this),this.setup(e),this.run()}return e.prototype.setup=function(e){return this.setOptions(e),this.addElements(),L.Icon.Default.imagePath=e.imagesPath||"images"},e.prototype.setOptions=function(e){return App.options={categoriesUrl:e.categoriesUrl,extractLocation:e.extractLocation,popupContentsRenderer:e.popupContentsRenderer,popupContentsTemplate:e.popupContentsTemplate,resultsUrl:e.resultsUrl,appUrl:e.appUrl}},e.prototype.addElements=function(){var e,t,n;return $("body").append($("<div/>").attr("id","app")),t="styles/haiti_hack_map.css",n="",App.options.appUrl?n=""+App.options.appUrl+"/"+t:n=t,e=$("<link/>").attr({rel:"stylesheet",href:n}),$("head").append(e)},e.prototype.run=function(){return new App.Router},e}(),window.HaitiHackMap=e}.call(this);