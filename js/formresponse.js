// Prevents page from refreshing
$('#factors').submit(function () {
 	calculateVars();
 	return false;
});
// Calculates submitted variables and then appends 'results' div with calculated age
function calculateVars() {
	var resultAppend = document.getElementById("results");
	var age = 0;
    var gender = document.getElementById('criteria1').value;
    var isSmoker = document.getElementById('criteria2').value;
    var isDrunkard = document.getElementById('criteria3').value;
    var isHealthyboi = document.getElementById('criteria4').value;
    var country = document.getElementById('criteria5').value;
    if (gender == "" || isSmoker == "" || isDrunkard == "" || isHealthyboi == "" || country == "") {
        alert("Please fill out all the questions first!");
        return false;
    };
    // Calc gender
    if (gender == "male") {
        age += 80;
    } else {
        age += 85;
    }
    // Calc lung cancer
    if (isSmoker == "yes") {
    	age -= 10;
    }
    // Calc alcoholism
    if (isDrunkard == "yes" && isSmoker == "yes") {
    	age -= 5
    } else if (isDrunkard == "yes" && isSmoker == "no") {
    	age -= 11;
    }
    // Calc exercise
    if (isHealthyboi == "yes") {
    	age += 5;
    }
    // Calc place of residence
    if (country == "eastasia1") {
    	age += 5;
    } else if (country == "eastasia2") {
    	age -= 3;
    } else if (country == "westeurope") {
    	age += 3;
    } else if (country == "easteurope") {
    	age -= 2;
    } else if (country == "middleeast") {
    	age -= 5;
    } else if (country == "northamerica") {
    	age += 1;
    } else if (country == "centralamerica") {
    	age -= 4;
    } else if (country == "southamerica") {
    	age -= 6;
    } else if (country == "oceania") {
    	age += 2;
    } else if (country == "africa1") {
    	age -= 25;
    } else if (country == "africa2") {
    	age -= 18;
    }
    // Change color of age text depending on how old one lives
    if (age >= 80) {
    	ageText = "<font color = 'green'>" + age + "</font>";
    } else if (age < 80 && age >=70) {
    	ageText = "<font color = 'yellow'>" + age + "</font>";
    } else {
    	ageText = "<font color = 'red'>" + age + "</font>";
    }
    // Clears div before generating more text in case user uses function more than once
    resultAppend.innerHTML = "";
    resultAppend.innerHTML += "<h2><i>You will most likely die at the age of " + ageText + ". Reasons listed below.</i></h2>";
    // Display facts regarding life expectancy
    if (gender == "male") {
    	resultAppend.innerHTML += "<p>Human males on average live to be 80 years old.</p>";
    } else if (gender == "female") {
    	resultAppend.innerHTML += "<p>Human females on average live to be 85 years old.</p>";
    }
    if (isSmoker == "yes") {
    	resultAppend.innerHTML += "<p>Smoking is extremely unhealthy and decreases the human lifespan by an average of 10 years.</p>";
    }
    if (isDrunkard == "yes") {
    	resultAppend.innerHTML += "<p>Excessive alcoholism is detrimental to one's health. It can decrease human lifespan by approximately 5-12 years.</p>";
    }
    if (isHealthyboi == "yes") {
    	resultAppend.innerHTML += "<p>Regularly exercising can increase lifespan by around 5 years! Keep it up!</p>";
    }
    if (country == "eastasia1") {
    	resultAppend.innerHTML += "<p>People living in East Asian countries on average live 5 years more than the global average.</p>";
    } else if (country == "eastasia2") {
    	resultAppend.innerHTML += "<p>People living in countries like China and India on average live 3 years less than the global average.</p>";
    } else if (country == "westeurope") {
    	resultAppend.innerHTML += "<p>People living in West Europe on average live 3 years more than the global average.</p>";
    } else if (country == "easteurope") {
    	resultAppend.innerHTML += "<p>People living in East Europe on average live 2 years less than the global average.</p>";
    } else if (country == "middleeast") {
    	resultAppend.innerHTML += "<p>People living in the Middle East on average live 5 years less than the global average.</p>";
    } else if (country == "northamerica") {
    	resultAppend.innerHTML += "<p>People living in North America on average live 1 year more than the global average.</p>";
    } else if (country == "centralamerica") {
    	resultAppend.innerHTML += "<p>People living in Central America on average live 4 years less than the global average.</p>";
    } else if (country == "southamerica") {
    	resultAppend.innerHTML += "<p>People living in South America on average live 6 years less than the global average.</p>";
    } else if (country == "Oceania") {
    	resultAppend.innerHTML += "<p>People living in Oceania on average live 2 years more than the global average.</p>";
    } else if (country == "africa1") {
    	resultAppend.innerHTML += "<p>People living in countries like Chad and Zimbabwe on average live 25 years less than the global average.</p>";
    } else if (country == "africa2") {
    	resultAppend.innerHTML += "<p>People living South Africa on average live 18 years less than the global average.</p>";
    }
}