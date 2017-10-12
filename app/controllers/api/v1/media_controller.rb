class Api::V1::MediaController < Api::ApiController
  def index
    media = Medium.all
    render json: media
  end
end
