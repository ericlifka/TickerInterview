// Your code here
import StockCard from "./components/StockCard.js";
import StockList from "./components/StockList.js";

const app = Vue.createApp({
	data() {
		return {
			stockList: []
		};
	},
	created() {
		// Add a StockTicker listener once the component is created
		StockTicker.addListener(function (tick) {
			const stockVal = this.stockList.find(
				(s) => s.symbol === tick.symbol
			);
			// If the stock is not already accounted for, add an entry to the list
			if (!stockVal) {
				this.stockList.push(tick);
			}
			// Otherwise, just update the entry we already have
			else {
				stockVal.start = tick.start;
				stockVal.end = tick.end;
				stockVal.change = tick.change;
			}
		}, this);
	}
});
app.component("stock-card", StockCard);
app.component("stock-list", StockList);
app.mount("#stock-list");
