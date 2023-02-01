// Le plus important dans ce projet c'est le fetch de lAPI et boucler dans les definition pour avoir une seule reponse
//On click sur le bouton search
function search(){
    //Recuperer la valeur du champ
   let word = document.getElementById("text").value;
    //recuperer la div avec id resultat
   let resultat = document.getElementById("resultat");

    // si le champ n'est pas vide
    if(word.length != 0){
        let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
        
        fetch(url).then(response => response.json().then(data =>{
            // console.log(data);
            try{
                
                // boucler dans les definition car il y en a plusieurs dans lAPI
                for(let words of data){
                    // console.log(words);
                    //recuperer la premier definition
                    let definition = words.meanings[0].definitions[0].definition
                    //afficher la definition dans un p  
                    resultat.innerHTML = "<p class='res'>"+ definition+"</p>"
                }
            // si le mot n'existe pas dans le dictionnaire
            }catch(err){
                //Affichage de ce message
                resultat.innerHTML = "<p class='res'>Aucune définition trouvée</p>"
            }
        }))
    // si le champ est vide
    }else{

        resultat.innerHTML = "<p class='res'>Veuillez remplir ce champ</p>"
    }

}