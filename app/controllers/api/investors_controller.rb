class Api::InvestorsController < ApplicationController
    def index
        @investors = Investor.all
        render json: @investors
    end

    def show
        @investor = Investor.find(params[:id])
        render json: @investor
    end

    def create
        @investor = Investor.new(investor_params)
        if @investor.save
            render json: @investor
        end
    end

    
    private
    def investor_params
    params.require(:investor).permit(:name, :username, :occupation, :income,)
    end
end
