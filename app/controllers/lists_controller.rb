class ListsController < ApplicationController

  respond_to :json

  def index
    respond_with List.all
  end

end