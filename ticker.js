/*
	Output stock events to a supplied listener.
	Usage:
		StockTicker.addListener(handler, [context])
		StockTicker.on(handler, [context])

		handler -> function ({symbol [string], start [number], change [number], end [number]})
 */
window.StockTicker = (function () {

	var stockValues = {
		'S&P 500': 1859,
		'DOW J': 16296,
		'NASDAQ': 4296
	};
	var stocksToDisplay = {
		
	}
	var symbols = _.keys(stockValues);
	var stockChanges = _.range(-25, 30, 5);

	var listenerFunction;
	var listenerContext;

	var randomTickTime = function () {
		return _.random(1000, 5000);
	};

	var randomSymbol = function () {
		return symbols[_.random(0, 2)];
	};

	var nextTick = function () {
		var symbol = _.sample(symbols);
		var start = stockValues[symbol];
		var change = _.sample(stockChanges);
		var end = stockValues[symbol] = start + change;
		var description = {
			symbol: symbol,
			start: start,
			change: change,
			end: end,
			timestamp : Date.now()
		};
		//Fetch the UL HTML List to append tick
		var list = document.getElementById("Stock-list")

		//Wait for list to fetch before tick generates to avoid null error
		if(list)
		listenerFunction.call(listenerContext, description, list, stocksToDisplay);  //Function Borrowing
		window.setTimeout(nextTick, randomTickTime());
	};

	var addListener = function (listener, context) {
		listenerFunction = listener;
		listenerContext = context;
		if (listenerFunction) {
			nextTick();
		}
	};

	return {
		addListener: addListener,
		on: addListener
	};
})();
