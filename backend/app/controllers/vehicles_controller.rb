class VehiclesController < ApplicationController
  before_action :set_vehicle, only: %i[ show update destroy ]

  # GET /vehicles
  def index
    @vehicles = Vehicle.all

    render json: @vehicles.map { |vehicle| VehiclePresenter.new(vehicle).to_json }
  end

  # GET /vehicles/1
  def show
    render json: VehiclePresenter.new(@vehicle).to_json
  end

  # POST /vehicles
  def create
    @vehicle = Vehicle.new(vehicle_params)

    if @vehicle.save
      render json: @vehicle, status: :created, location: @vehicle
    else
      render json: @vehicle.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /vehicles/1
  def update
    if @vehicle.update(vehicle_params)
      render json: @vehicle
    else
      render json: @vehicle.errors, status: :unprocessable_entity
    end
  end

  # DELETE /vehicles/1
  def destroy
    @vehicle.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_vehicle
      @vehicle = Vehicle.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def vehicle_params
      params.require(:vehicle).permit(:name, :price, :image, :video, :legal_text, :consumption, :engine, :power, :speed)
    end
end
