require "test_helper"

class VehiclesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @vehicle = vehicles(:one)
  end

  test "should get index" do
    get vehicles_url, as: :json
    assert_response :success
  end

  test "should create vehicle" do
    assert_difference("Vehicle.count") do
      post vehicles_url, params: { vehicle: { consumption: @vehicle.consumption, engine: @vehicle.engine, image: @vehicle.image, legal_text: @vehicle.legal_text, name: @vehicle.name, power: @vehicle.power, price: @vehicle.price, speed: @vehicle.speed, video: @vehicle.video } }, as: :json
    end

    assert_response :created
  end

  test "should show vehicle" do
    get vehicle_url(@vehicle), as: :json
    assert_response :success
  end

  test "should update vehicle" do
    patch vehicle_url(@vehicle), params: { vehicle: { consumption: @vehicle.consumption, engine: @vehicle.engine, image: @vehicle.image, legal_text: @vehicle.legal_text, name: @vehicle.name, power: @vehicle.power, price: @vehicle.price, speed: @vehicle.speed, video: @vehicle.video } }, as: :json
    assert_response :success
  end

  test "should destroy vehicle" do
    assert_difference("Vehicle.count", -1) do
      delete vehicle_url(@vehicle), as: :json
    end

    assert_response :no_content
  end
end
