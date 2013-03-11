class App.Collections.OSMResults extends Backbone.Collection
  model: App.Models.OSMResult
  url: "http://nominatim.openstreetmap.org/search/"

  search: (q) ->
    if q.length > 0
      @fetch
        data:
          q: q
          format: 'json'
          countrycodes: 'ht'
