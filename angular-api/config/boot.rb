ENV['BUNDLE_GEMFILE'] ||= File.expand_path('../Gemfile', __dir__)
require "mongo"
require 'rails'
require "mongoid"
require 'bundler/setup' # Set up gems listed in the Gemfile.
require 'bootsnap/setup' # Speed up boot time by caching expensive operations.
require "action_controller"
require_relative '../app/controllers/application_controller'
