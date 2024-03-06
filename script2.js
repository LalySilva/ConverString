function inverterString(string) {
    let invertedString = '';
    
    // Itera sobre cada caractere da string, começando do último até o primeiro
    for (let i = string.length - 1; i >= 0; i--) {
        invertedString += string[i];
    }
    
    return invertedString;
}

// Exemplo de uso da função
const minhaString = "Olá Mundo";
const stringInvertida = inverterString(minhaString);
console.log("String original:", minhaString);
console.log("String invertida:", stringInvertida);