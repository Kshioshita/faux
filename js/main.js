var quoteId=['quote1', 'quote2', 'quote3']
var quoteNumber=0;
var maxQuotes=3;
window.setInterval(changeQuote, 10000);

function changeQuote(){
	document.getElementById(quoteId[quoteNumber]).classList.remove('active');
	document.getElementById(quoteId[quoteNumber]).classList.add('hidden');
	quoteNumber++;
	if(quoteNumber>maxQuotes-1){
		quoteNumber=0;
	}
	document.getElementById(quoteId[quoteNumber]).classList.remove('hidden');
	document.getElementById(quoteId[quoteNumber]).classList.add('active');
}