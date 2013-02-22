# HaitiHackMap

## Usage

```javascript
var options = {}
new HaitiHackMap(options);
```

## Options

Currently, the following options are supported:

### resultsUrl

A string containing the URL from which to get the POI results to be rendered in
the map.

### detailsRenderer

A function that takes a backbone model (from the JSON returned from resultsUrl)
and returns an HTML string.
