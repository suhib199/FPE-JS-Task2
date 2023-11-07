let number = prompt("Enter any number you want");
let counter = 0;
function pandigital() {
    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            if (number[i] === number[j]) {

                counter++;
            }

        }
    }
    if (number.length - counter < 10) {

        return false;

    }
    else {
        return true;
    }

}

document.getElementById("Check").innerHTML = pandigital();