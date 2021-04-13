const processOrder = () => {
	console.log(`processing order for customer 1`);
	var currentTime = new Date().getTime();

	setTimeout(() => {
		console.log(`cooking food is completed`);
	}, 3000);

	console.log(`order processed for customer 1`);
};

console.log(`take order from customer 1`);
processOrder();
console.log(`completed order for customer 1`);
