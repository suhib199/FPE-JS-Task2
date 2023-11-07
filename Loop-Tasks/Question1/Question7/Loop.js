let choose = prompt("Plese Choose your favorite drink(Orange,Banana,Max,Pepsi)");
let price;
switch (choose)
{
    case "Orange":
        price = "3 JD";
        break;
    
        case "Banana":
            price = "2 JD";
            break;

    
    
            case "Max":
                price = " 0.40 JD";
                break;

    
                case "Pepsi":
                    price = "0.35 JD";
                    break;
            

}

document.getElementById("Price").innerHTML=`The price of the dirink ${price} ` 