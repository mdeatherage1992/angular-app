class StoresController < ApplicationController
  def index
    @all = Store.all
    render json: @all
  end
end
