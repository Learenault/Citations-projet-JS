
// liste des differentes citations 
const data = [
    {
        citation:'"Dans la vie on ne fait pas ce que l\'on veut mais on est responsable de ce que l\'on est."',
        author: 'Jean-Paul Sartre',
        age:'1905 - 1980',
        profession:'Artiste, écrivain, Philosophe, Romancier'
    },
    {
        citation:'"La règle d\'or de la conduite est la tolérance mutuelle, car nous ne penserons jamais tous de la même façon, nous ne verrons qu\'une partie de la vérité et sous des angles différents."',
        author: 'Gandhi',
        age:'1869-1948',
        profession:'Homme politique, Philosophe, Révolutionnaire '
    }, 
    {
        citation:'"Le monde est dangereux à vivre ! Non pas tant à cause de ceux qui font le mal, mais à cause de ceux qui regardent et laissent faire."',
        author: 'Albert Einstein',
        age:'1979-1955',
        profession:'Mathématicien, Physicien, Scientifique'
    },
    {  
        citation:'"Il ne faut avoir aucun regret pour le passé, aucun remords pour le présent, et une confiance inébranlable pour l\'avenir."',
        author: 'Jean Jaurès',
        age:'1859-1914',
        profession:'Homme politique, Socialiste '
    }

];

// Premiere methode pour changer le background
const color=["rgb(209, 248, 209)","red","blue","black"];

const randomcolor = () =>{
const colors_lettres = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
const ref1 = Math.floor(Math.random() * 16);
const ref2 = Math.floor(Math.random() * 16);
const ref3 = Math.floor(Math.random() * 16);
const ref4 = Math.floor(Math.random() * 16);
const ref5 = Math.floor(Math.random() * 16);
const ref6 = Math.floor(Math.random() * 16);
 let ref ='#'+colors_lettres[ref1]+colors_lettres[ref2]+colors_lettres[ref3]+colors_lettres[ref4]+colors_lettres[ref5]+colors_lettres[ref6];
 return ref
}


// Deuxime methode pour changer la couleur de fond -> et celle retenue !
const hslcolor = () =>{
    const color1 = Math.floor(Math.random() * 360);
    let color_ref = 'hsl('+color1+',70%,85%)';
    cita.setAttribute("style","background-color:"+color_ref)
    return cita;
}


// Troisieme methode pour changer la couleur de fond
const update_color = () =>{
    let change_color = color[couleur];
    if(couleur == color.length){
         couleur = 0;
         change_color = color[couleur];   
    }
couleur++;
cita.setAttribute("style","background-color:"+change_color)
return  cita
}



// création des variables 
const button = document.querySelector('.title');
const text = document.querySelector('.text p');
const annee = document.querySelector('.age p');
const prof = document.querySelector('.profession p');
const auth = document.querySelector('.author');
const cita = document.querySelector('.citation');
let index = 0;
couleur = 0;




// fonction pour générer les citations
const generate = () =>{
    let citation = data[index];
    if(index == data.length){
        index = 0;
         citation = data[index];   
    }
index++;
return citation;
}





// Les fonctions sont appelés lors du click sur le bouton
button.addEventListener('click', ()=>{

let {citation,author,age,profession} = generate();

text.textContent = citation;
auth.textContent = author;
annee.textContent = age;
prof.textContent = profession;

//console.log(update_color());
//console.log(randomcolor());
//let txt_color = randomcolor()
//cita.setAttribute("style","background-color:"+randomcolor())
//text.setAttribute("style","color:"+txt_color);
//prof.setAttribute("style","color:"+txt_color);
//auth.setAttribute("style","color:"+txt_color);
//annee.setAttribute("style","color:"+txt_color);

hslcolor();
});


