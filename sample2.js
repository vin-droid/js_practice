
window.onload = function(){
	init();
	document.getElementById('registration').onsubmit = function  () {
		var name = this.elements[0].value;
		var age =  this.elements[1].value;

		this.validate = function () {
			if(name.trim() == "")
			{
				alert("Please Enter Your Name");
				return false;
			}
			else if(age < 18 || age.value > 90){
				alert("Please Enter Your Correct Age");
				return false;
			}
			else{
				var customer = Customer(name,age);
				alert("customer created");
			}
		};
	};
}






function Customer(name,age ){
	this.name = name;
	this.age = age;
	this.bal = 0.0;
	this.purchased_items = [];
	this.itemBucket =[];
	this.creditBy = function(amount){
		this.bal += amount;
	}
	this.debitBy = function(amount){
		this.bal -= amount;
	}
	this.purchaseItems = function(item){
		var total_purchase = 0.0;
		var customer_bucket = this.itemBucket;
		if(this.itemBucket.length == 0){
			this.itemBucket.push(item);
			this.purchaseItems(item);
		}
		else{
			this.itemBucket.forEach(function(item) {

				total_purchase += item.price; 
				customer_bucket.pop(item);
			});
		}
		if (this.bal >= total_purchase){
			this.debitBy(total_purchase);
		}
		else{
			alert("Please Credit Your Card!  " + this.bal.toPrecision(2) + "$");
		}
	}
	this.addToCart = function(item){
		this.itemBucket.push(item);
	}
}

function Item(name,price){
	this.name = name;
	this.price = price;
}

function init(){
	customer1  =  new Customer('vineet',24);
	item1 = new Item('fan',10.0);
	item2 = new Item('table',20.0);
	item3 = new Item('chair',10.0);
	item4 = new Item('mobile',50.0);
}