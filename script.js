
function lancerDe() {
//Générer nombre entre 1 et 6
    const nombreDecimal = (Math.random() * 6)+1
    const nombre = Math.floor(nombreDecimal)

//Retourner ce nombre
 return nombre    
}

console.log(lancerDe())