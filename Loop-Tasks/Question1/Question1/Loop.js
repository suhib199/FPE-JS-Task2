let month = parseInt(prompt("Please Enter your birthdate month"));
let result;
switch (month)
{
    case 1:
        result = "Jan";
        break;

        case 2:
            result = "Feb";
            break;
            

        
        case 3:
            result = "March";
        break;
        
        case 4:
            result = "April";
        break;
        
        case 5:
            result = "May";
        break;
        
        case 6:
            result = "June";
        break;
        
        case 7:
            result = "July";
        break;
        
        case 8:
            result = "Augeut";
        break;
        
        case 9:
            result = "September";
        break;
        

        case 10:
            result = "October";
        break;
        
        case 11:
            result = "November";
        break;
        
        case 12:
            result = "December";
            break;



}

document.getElementById("month").innerHTML = `${result}`;