class Api::StocksController < ApplicationController
    
    def index
        @stocks = Portfolio.find(params[:portfolio_id]).stocks
        render json: @stocks
    end

    def show
        @stock = Stock.find(params[:id])
        render json: @stock
    end

    def create

    end

end
