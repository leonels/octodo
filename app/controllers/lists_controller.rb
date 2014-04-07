class ListsController < ApplicationController

  respond_to :json

  def index
    respond_with List.all
  end

  def show
  	respond_with List.find(params[:id])
  end

end