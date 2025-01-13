class VehiclePresenter
  def initialize(vehicle)
    @vehicle = vehicle
  end

  def to_json
    {
      id: @vehicle.id,
      name: @vehicle.name,
      price: @vehicle.price,
      image: @vehicle.image,
      video: @vehicle.video,
      legal_text: @vehicle.legal_text,
      features: {
        consumption: @vehicle.consumption,
        engine: @vehicle.engine,
        power: @vehicle.power,
        speed: @vehicle.speed
      },
      created_at: @vehicle.created_at,
      updated_at: @vehicle.updated_at
    }.to_json
  end
end
