export default {
	props: ["stocks"],
	template: `
		<ul class="no-list-style">
			<li v-for="stock in stocks" :key="stock.symbol">
				<stock-card :stock="stock" />
			</li>
		</ul>
	`
};
