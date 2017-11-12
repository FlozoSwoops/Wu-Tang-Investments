class Api::PortfoliosController < ApplicationController
    def index
        @portfolio = Investor.find(params[:investor_id]).portfolios.all
        render json: @portfolio
    end

    def show
        @portfolio = Portfolio.find(params[:id])
        render json: @portfolio
    end

    def create
        @investor = Investor.find(params[:investor_id])
        @portfolio = Portfolio.new(portfolio_params)
        @investor.portfolios << @portfolio
        @investor.save!
        @portfolios = @investor.portfolios
        render json: @portfolios
    end

    private
    
    def portfolio_params
        params.require(:portfolio).permit(:name, :value, :risk)
    end
end
