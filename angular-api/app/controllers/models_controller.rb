class ModelsController < ApplicationController
  def index
    @all = Model.all
    render json: @all
  end
end
