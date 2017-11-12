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
        @investor = Investor.find(params[:investor_id])
        @portfolio = Portfolio.find(params[:portfolio_id])
        @stock = Stock.new(stock_params)
        @portfolio.stocks << @stock
        @stock.save!
        @stocks = @portfolio.stocks
        render json: @stocks
    end

    private
    
    def stock_params
        params.require(:stock).permit(:symbol, :lastprice, :shares)
    end
end
