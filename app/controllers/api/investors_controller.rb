class Api::InvestorsController < ApplicationController
    def index
        @investors = Investor.all
        render json: @investors
    end

    def show
        @investor = Investor.find(params[:id])
        render json: @investor
    end

    
end
