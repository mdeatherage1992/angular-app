class AreasController < ApplicationController
before_action :set_area, only: [:show,:edit,:destroy,:update]
# before_action :authenticate_user
# before_action :set_banana, only: [:show, :update, :destroy]
  def index
    @all = []
  @@new_mongo.find().each do |doc| @all.push(doc)
  end
  render json: @all
  end

  def popular
    render json: Area.all
  end


  def create
    area = Area.new(tracklist_params)
    if area.save
      render json: area
    else
      render json: {message: area.errors}, status: 400
  end
end

def update
  if @area.update(area_params)
    @area.save
    render json: @area
  else
    render json: {message: @area.errors}, status: 400
  end
end

def destroy
  if @area.destroy
    render status: 204
  else
    render json: {message: @area.errors}, status: 400
  end
end
  def show
    render json: Area.find_by(id: params[:id])
  end

end

private

def set_area
  @area = Area.find(params[:id])
end

def tracklist_params
params.require(:area).permit(:boundaries,:type,:coordinates)
end
