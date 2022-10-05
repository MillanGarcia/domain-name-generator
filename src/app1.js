let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
const final = [pronoun, adj, noun];

function solution(array1, array2, array3) {
  var frasefinal = "";
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      for (let k = 0; k < array3.length; k++) {
        var frasefinal = array1[i] + " " + array2[j] + " " + array3[k] + " ";
       /*document.write(frasefinal); /*para proyectarlo en la pagina web, activar esta linea*/*/
        console.log(array1[i] + " " + array2[j] + " " + array3[k]);
      }
    }
  }
}
solution(pronoun, adj, noun);
/*
pronoun.forEach(element1 => {
    adj.forEach(element2 => {
        noun.forEach(element3 => {
            console.log(element1+" "+element2+" "+element3);
        });
    });
});




for (let i = 0; i < array1.length; i++) {
        
    for (let j = 0; j < array2.length; j++) {
           
        for (let k = 0; k < array3.length; k++) {
                
            console.log(array1[i]+" "+array2[j]+" "+array3[k]);
        }
    }
        
}
/*solution(pronoun,adj,noun);*/

/*let FinalPhrase = [];

function empty(array){
    array = [];
}
function solution2 (array1,array2,array3){
    for (let i = 0; i < array1.length; i++) {
        FinalPhrase.push(array1[i]);
        for (let j = 0; j < array2.length; j++) {
           FinalPhrase.push(array2[j])
            for (let k = 0; k < array3.length; k++) {
                FinalPhrase.push(array3[k]);
                console.log(FinalPhrase);
                FinalPhrase.pop()
                
                
            }
        }
        
    }
}
solution2(pronoun,adj,noun);*/
