class AreasController < ApplicationController
  def index
    @all = Area.all
    render json: @all
  end
end
