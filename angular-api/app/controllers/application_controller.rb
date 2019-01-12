class ApplicationController < ActionController::Base
  configure do
  begin
    @@mongo_db = Mongo::Client.new(['127.0.0.1:27017'], database: "angular-db" )
    @@new_mongo = @@mongo_db[:areas]
    @@mongo_stores = @@mongo_db[:stores]
    @grid_1 = @@mongo_stores.indexes.create_one( { "location.point" => "2dsphere" } )
    @grid = @@new_mongo.indexes.create_one( { 'location.boundaries' => '2dsphere' })
    @@mongo_restaurants = @@mongo_db[:models]
  rescue Mongo::ConnectionFailure
  end
end

def self.mongo_db
  @mongo_db = Mongo::Client.new(['127.0.0.1:27017'], database: "angular-db" )
  @db = @mongo_db.database
  return @db
end

end
