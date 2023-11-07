let base = parseFloat(prompt("Please enter the base length of triangle"));
let height = parseFloat(prompt("Please enter the height length of triangle"));

function area (base,height)
{
    return (0.5 * base * height);
}
document.getElementById("Area").innerHTML = `The area = ${area(base, height)}`;

