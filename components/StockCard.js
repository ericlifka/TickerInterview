export default {
	props: ["stock"],
	computed: {
		changeClass() {
			if (this.stock.change > 0) return "positive-change";
			else if (this.stock.change < 0) return "negative-change";
			else return "";
		},
		changeText() {
			if (this.stock.change < 0) {
				return "▼ " + this.stock.change * -1;
			} else if (this.stock.change > 0) {
				return "▲ " + this.stock.change;
			}
			return "No Change";
		}
	},
	template: `
	<div class="stock-card">
		<h2>\${{ stock.symbol }}</h2>
		<p>{{ stock.start }} → {{ stock.end }} ( 
			<span :class="changeClass">{{ changeText }}</span>
		)</p>
	</div>
	`

	//▲▼
};
