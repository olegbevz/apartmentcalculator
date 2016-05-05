function DepositCalculator(sourceSum, income, rate) {
	rate = rate / 12 / 100;
	
	this.calculateIncome = function(duration){		
		var sum = sourceSum;
		
		for (var i = 0; i < duration; i++){
			sum += income;
			sum += sum * rate;
		}
		
		return sum;
	}
};

function ApartmentPriceCalculator(price, inflation) {	
	inflation = inflation / 12 / 100;

	this.calculatePrice = function(duration){
		return price * Math.pow(1 + inflation, duration);
	}
}

function MortgageCalculator(rate) {
	rate = rate / 12 / 100;
	
	this.calculateAnnualPayment = function (credit, duration){		
		return (credit * rate * Math.pow(1 + rate, duration)) / (Math.pow(1 + rate, duration) - 1); 
	}
	
	this.calculateDuration = function (credit, annualPayment){
		return Math.log(annualPayment / (annualPayment - (credit * rate))) / Math.log(1 + rate);
	}
}