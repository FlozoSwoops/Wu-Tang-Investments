class Api::PortfoliosController < ApplicationController
    def index
        @portfolio = Investor.find(params[:investor_id]).portfolios.all
        render json: @portfolio
    end

    def show
        @portfolio = Portfolio.find(params[:id])
        render json: @portfolio
    end
end
