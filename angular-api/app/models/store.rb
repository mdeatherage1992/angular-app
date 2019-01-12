require 'mongoid'
class Store
  include Mongoid::Document
  field :boundaries, :type => Object
  field :type, :type => String
  field :coordinates, :type => Array
  field :description, :type => String
  field :rid, :type => String
end
