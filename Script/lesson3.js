// Funktion som kontrollerar om ett lösenord är giltigt
function isValidPassword(password, username) {
    if (
        password.length >= 8 &&
        !password.includes(" ") &&
        !password.includes(username)
    ) {
        return true;
    } else {
        return false;
    }
}

// Tester för att visa att funktionen fungerar
console.log("Giltigt lösenord:", isValidPassword("hemligt123", "caroline"));
console.log("För kort (under 8 tecken):", isValidPassword("kort", "caroline"));
console.log("Innehåller mellanslag:", isValidPassword("mitt lösen123", "caroline"));
console.log("Innehåller användarnamn:", isValidPassword("caroline123", "caroline"));