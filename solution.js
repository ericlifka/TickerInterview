// Your code here
/**
 * Addlistener takes input context function with params
 * @param {Object} tick
 * @param {HTMLLIElement} list
 * @param {Object} stocksToDisplay
 */
StockTicker.addListener(function (tick, list, stocksToDisplay) {
    console.log('Stock tick:', tick);

    stocksToDisplay[tick.symbol]={
        change:tick.change,
        start: tick.start,
        end: tick.end,
        timestamp: tick.timestamp
    }
    console.log(stocksToDisplay)
    console.log(list)
    html=""

      const sortedObject = sortStockList(stocksToDisplay)
    let first = 1;
    for(let stock in sortedObject){
        tick = stocksToDisplay[stock]
    html += `
        <li>
        <div class="modal-body modal-lg">
        <div class="container">
        <div class="card stock-card">
            <div class="card-body  ${first==1?"first":""} bg-success mb-3">
            <div class="symbol"><h4>${stock}<i class="fa fa-angle-double-${tick.change>=0?'up':'down'}" style="margin-left:5%"></i></h4></div>
                <div class="market-info">
                <p class="card-text stock-info ${
                  tick.change >= 0 ? 'up' : 'down'
                }" id="diff">${tick.change>0?`+${tick.change}`:tick.change}
                ${
                  tick.change >= 0
                    ? '<i class="fa fa-arrow-up" aria-hidden="true"></i>'
                    : '<i class="fa fa-arrow-down" aria-hidden="true"></i>'
                }
                </p>
                <p class="card-text stock-info">Open: <strong>$</strong> <span id="price">${
                  tick.start
                }
                </span></p>
                <p class="card-text stock-info">Close: <strong>$</strong> <span id="price">${
                  tick.end
                }</span></p>
                </div>
            </div>
            <div>
        </div>
        </div>
        </li>
    `
    first--;
    }
    if(list)
    list.innerHTML = html
});




/**
 * Returns the sorted object of stocks to display according to timestamp
 * @param {Object} stocksToDisplay 
 * @returns Object
 */
const sortStockList = (stocksToDisplay => {
    const sortedData = Object.entries(stocksToDisplay).sort(
        ([, a], [, b]) => b.timestamp - a.timestamp
      )
        return Object.fromEntries(sortedData)
})