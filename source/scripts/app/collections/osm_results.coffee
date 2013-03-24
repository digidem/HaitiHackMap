class App.Collections.OSMResults extends Backbone.Collection
  model: App.Models.OSMResult
  url: "http://nominatim.openstreetmap.org/search/"

  search: (q) ->
    @fetch
      data:
        q: q
        format: 'json'
        countrycodes: 'ht'