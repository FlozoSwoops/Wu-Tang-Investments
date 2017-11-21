Investor.destroy_all

mark = Investor.create(name: "Mark", username:"Mflores1", occupation:"Software Engineer", income:80000)

folio = Portfolio.create(investor_id: mark.id, name:"Stocks", value:1000000, risk:"aggresive" )

Stock.create(portfolio_id: folio.id, symbol:"AAPL", lastprice: 127, shares:50,  )

raquon = Investor.create(name: "Raquon", username:"The Chef", occupation:"Wu-Tang Clan", income:2000000)
ghostface = Investor.create(name: "Ghostface", username:"Killah", occupation:"Rapper", income:8000000)

rfolio = Portfolio.create(investor_id: raquon.id, name:"Stocks", value:1000000, risk:"Long Game" )
gfolio = Portfolio.create(investor_id: ghostface.id, name:"Stocks", value:1000000, risk:"Conservative" )


Stock.create(portfolio_id: rfolio.id, symbol:"VNET", lastprice: 6, shares:50,  )
Stock.create(portfolio_id: rfolio.id, symbol:"CARB", lastprice: 22, shares:2,  )
Stock.create(portfolio_id: rfolio.id, symbol:"TWTR", lastprice: 21, shares:150,  )
Stock.create(portfolio_id: gfolio.id, symbol:"XNET", lastprice: 20, shares:540,  )
Stock.create(portfolio_id: gfolio.id, symbol:"SNST", lastprice: 1, shares:23,  )
Stock.create(portfolio_id: gfolio.id, symbol:"SINA", lastprice: 53, shares:80,  )
