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

const button = document.querySelector('.title');
const text = document.querySelector('.text p');
const annee = document.querySelector('.age p');
const prof = document.querySelector('.profession p');
const auth = document.querySelector('.author');

let index = 0;

const generate = () =>{
    let citation = data[index];
    let longueur = data.length;
    if(index == longueur){
        index = 0;
         citation = data[index];   
    }
index++;
return citation;
}

button.addEventListener('click', ()=>{

let {citation,author,age,profession} = generate();

text.textContent = citation;
auth.textContent = author;
annee.textContent = age;
prof.textContent = profession;

});


