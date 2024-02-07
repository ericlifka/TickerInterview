// Your code here
StockTicker.addListener(function (tick, list, stocksToDisplay) {
    console.log('Stock tick:', tick);

    stocksToDisplay[tick.symbol]={
        change:tick.change,
        start: tick.start,
        end: tick.end
    }
    console.log(stocksToDisplay)
    console.log(list)
    for(let stock in stocksToDisplay){
        
    }
    html = `
        <li>
        <div class="modal-body modal-lg">
        <div class="container">
        <div class="card stock-card">
            <div class="card-body">
            <h4 class="symbol">${tick.symbol}</h4>
                <div class="market-info">
                <p class="card-text stock-info ${tick.change>=0?'up':'down'}" id="diff">${tick.change}
                ${tick.change>=0?'<i class="fa fa-arrow-up" aria-hidden="true"></i>':'<i class="fa fa-arrow-down" aria-hidden="true"></i>'}
                </p>
                <p class="card-text stock-info"><strong>$</strong> <span id="price">${tick.start}</span></p>
                <p class="card-text stock-info"><strong>$</strong> <span id="price">${tick.end}</span></p>
                </div>
            </div>
            <div>
        </div>
        </div>
        </li>
    `
    if(list)
    list.innerHTML += html
});
