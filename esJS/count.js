console.log("ciao");
const prompt = require('prompt-sync')()
var parola = prompt("inserisci la frase : ")
var vocali= "aeiou"
var n_vocali = 0
var n_consonanti = 0


for (let i = 0 ; i < parola.length; i++) {

    for (let v = 0 ; v < vocali.length; v++ ){
        if (parola[i] == vocali[v]){
            n_vocali += 1
            break
        }
        else if(v  == vocali.length -1)
            n_consonanti +=1
    }
}

console.log("il numero di vocali nella frase '"+ parola + "' sono : " + n_vocali +"\nil numero di consonanti e : " + n_consonanti)
