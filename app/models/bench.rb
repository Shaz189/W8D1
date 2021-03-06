# == Schema Information
#
# Table name: benches
#
#  id          :bigint(8)        not null, primary key
#  description :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    lat_range = (bounds[:southWest][:lat].to_i..bounds[:northEast][:lat].to_i)
    lng_range = (bounds[:southWest][:lng].to_i..bounds[:northEast][:lng].to_i)
    north_south_match = Bench.where({lat: lat_range})
    matches = north_south_match.where({lng: lng_range})
    matches
    #
    # sql = "select * from benches where lat < #{bounds["northEast"]["lat"]} and lat > #{bounds["southWest"]["lat"]} and lng < #{bounds["northEast"]["lng"]} and lng > #{bounds["southWest"]["lng"]};"
    # match_arr = ActiveRecord::Base.connection.execute(sql)
    # return match_arr
  end
end
#   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
#   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
#  test_range1 = {"northEast": {"lat": "40", "lng": "124"},"southWest": {"lat": "20", "lng": "122"} }
