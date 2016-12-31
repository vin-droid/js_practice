



    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var numbers = [23,43,56,23,5,767,23,345,45,65];
	var myFather = new Person("John", "Doe", 50, "blue");
	var myMother = new Person("Sally", "Rally", 48, "green");
	var myParents = new Array();
	myParents.push(myFather);
	myParents.push(myMother);
	myHomeParents = [myFather,myMother];
	for(myParent in myParents){
		document.write(myParents[myParent].firstName + "<br>");
	}
	for(myParent in myHomeParents){
        document.write('<div class="show">' + myHomeParents[myParent].lastName + '</div>');
        document.write(myHomeParents[myParent].constructor.name);
	}
	function Person(first, last, age, eyecolor) {
		this.firstName = first;
		this.lastName = last;
		this.age = age;
		this.eyeColor = eyecolor;
	}
	document.getElementById('demo1').innerHTML = fruits.sort().join('');

	var points = numbers.sort(function(a , b){return  a - b;});
	document.write(points.join('<div class="me"></div>'));