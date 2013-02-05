#!ruby

require 'rubygems'
require 'csv'
require 'json'

raise "File not passed in" unless ARGV[0]

lines = CSV.read(ARGV[0])
pois = []
lines.each do |line|
  pois.push(
    {
      display_name: "#{line[0]}, #{line[1]}",
      category: line[2],
      lat: line[3],
      lon: line[4]
    }
  )
end

out = pois.to_json
puts out
#puts JSON.pretty_unparse(out)
