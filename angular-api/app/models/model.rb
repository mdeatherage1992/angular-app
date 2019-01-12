require 'mongoid'
class Model
  include Mongoid::Document
  field :name, :type => String
end
