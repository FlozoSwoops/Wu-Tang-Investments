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

    def update
        investor_id = params[:id]
        @investor = Investor.find_by_id(investor_id)
        @investor.update_attributes(investor_params)
        
        render json: @investor
    end

    def destory
        investor_id = params[:id]
        @investor = Investor.find_by_id(investor_id)
        @investor.destroy
        render json: {
            msg: "Deleted"
        }
    end

    
    private
    
    def investor_params
        params.require(:investor).permit(:name, :username, :occupation, :income,)
    end
end
