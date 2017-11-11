Investor.destroy_all

mark = Investor.create(name: "Mark", username:"Mflores1", occupation:"Software Engineer", income:80000)

folio = Portfolio.create(investor_id: mark.id, name:"Stocks", value:1000000, risk:"aggresive" )

Stock.create(portfolio_id: folio.id, symbol:"AAPL", lastprice: 127, shares:50,  )
