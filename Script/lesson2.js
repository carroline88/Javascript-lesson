// 1. Fråga användaren efter prislapp med prompt()
let originalPriceTag = prompt("Ange ett pris med dollartecken (t.ex. $49.99):");

// 2. Ta bort dollartecknet med .replace() och konvertera till ett tal med parseFloat()
let priceWithoutDollar = originalPriceTag.replace("$", "");
let priceNumber = parseFloat(priceWithoutDollar);

// 3. Minska priset med 10 % (dvs. multiplicera med 0.90 eller dra av 10%)
let discount = priceNumber * 0.10;
let newPrice = priceNumber - discount;

// 4. Skriv ut det nya priset med template literals i console.log()
console.log(`Your new price is: $${newPrice.toFixed(2)}`);