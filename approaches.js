function DepositApproach(sourceSum, income, depositRate, apartmentInflation) {

	this.estimate = function(apartmentPrice) {
		var depositCalculator = new DepositCalculator(sourceSum, income, depositRate);
		var apartmentPriceCalculator = new ApartmentPriceCalculator(apartmentPrice, apartmentInflation);
		
		var duration = 0;
		var currentSum = sourceSum;
		var currentPrice = apartmentPrice;
		while (currentPrice >= currentSum & duration < 1200)
		{
			duration++;	
			currentSum = depositCalculator.calculateIncome(duration);
			currentPrice = apartmentPriceCalculator.calculatePrice(duration);
		}
		
		return { duration : Math.ceil(duration), monthlyPayment: income, totalPayment: Math.ceil(duration * income) }; 
	}
}

function MortgageApproach(sourceSum, mortgageRate) {
	
	this.estimate = function(apartmentPrice, income) {
		var mortgageCalculator = new MortgageCalculator(mortgageRate);
		var duration = mortgageCalculator.calculateDuration(apartmentPrice - sourceSum, income);
		var annualPayment = mortgageCalculator.calculateAnnualPayment(apartmentPrice - sourceSum, duration);
		
		return { duration : Math.ceil(duration), monthlyPayment: Math.ceil(annualPayment), totalPayment: Math.ceil(duration * annualPayment) };
	}
}