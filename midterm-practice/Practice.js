var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {

	isOneAdded = false
	isTwoAdded = false
	isOneClick = true
	isTwoClick = true

	itemOnePrice = 3.45
	itemTwoPrice = 1.95
	cartPrice = 0.00

	addItem1 = () => {
		isOneAdded = !isOneAdded
		itemText = document.createElement("p")
		itemText.innerHTML = "$3.45 - Cappuccino - Delicious Cappuccino!"
		if (isOneAdded && isOneClick == true) {
			isOneClick = false
			document.getElementById("description").appendChild(itemText)
			cartPrice += itemOnePrice
			console.log(cartPrice)
			document.getElementById("total").innerHTML = "$" + cartPrice.toFixed(2)
		}
		
	}	
	addItem2 = () => {
		isTwoAdded = !isTwoAdded
		itemText2 = document.createElement("p")
		itemText2.innerHTML = "$1.95 - Espresso - Delicious espresso. Wanna try it?"
		if (isTwoAdded && isTwoClick == true) {
			isTwoClick = false
			document.getElementById("description").appendChild(itemText2)
			cartPrice += itemTwoPrice
			console.log(cartPrice)
			document.getElementById("total").innerHTML = "$" + cartPrice.toFixed(2)
		}
	}


	clearOrder = () => {
		remove = document.getElementById("description")
		isOneClick = true
		isTwoClick = true
		cartPrice = 0.00
		remove.innerHTML = ""
		document.getElementById("total").innerHTML = "$0.00"
	}
	placeOrder = () => {
		if (cartPrice !== 0.00) {
			clearOrder()
			alert(`Order placed`)
		} else {
			alert("add items to your cart to order")
		}
	}
	contactUs = () => {
		alert("Contact us at test@gmail.com")
	}
}; // end onload