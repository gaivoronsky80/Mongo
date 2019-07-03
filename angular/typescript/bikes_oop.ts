class Bike{
	price: number;
	max_speed: number;
	miles: number;
		constructor(price, max_speed){
			this.price = price;
			this.max_speed = max_speed;
			this.miles = 0;
		}

		displayInfo(){
			console.log("The bike's price: " + this.price + ', ' + 'maximum speed: ' + this.max_speed + ', ' + 'the total miles: ' + this.miles + '.');
			return this;
		}

		ride(){
			console.log('Riding...');
			this.miles +=10;
			console.log('Increase the total miles ridden by 10. The total miles: ' + this.miles + '.');
			return this;
		} 

		reverse(){
			console.log('Reversing...');
			this.miles -=5;
			console.log('Decrease the total miles ridden by 5. The total miles: ' + this.miles + '.');
			return this;
		}
}

var bike1 = new Bike(200,25);
var bike2 = new Bike(300,50);
var bike3 = new Bike(400,75);

bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse()..displayInfo();