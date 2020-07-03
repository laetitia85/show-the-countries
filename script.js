const search = document.getElementById('maRecherche');
const matchList = document.getElementById('match-list');

// Search Pays.json and filter it
const searchPays = async searchText => {
    const res = await fetch('./data/countries.json');
    const pays = await res.json();
    console.log("thomas")

//Get matches to current text input
let matches = pays.filter(Pays=>{
    const regex = new RegExp(`^${searchText}`,'gi');
    return Pays.name.match(regex); //|| Pays.cioc.match(regex);
});

if (searchText.length === 0) {
    matches = [];
}

outputHtml(matches);
};  
//class="text-primary"
//card card-body mb-1
//Show result in HTML
const outputHtml = matches =>{
    if(matches.length > 0)      {
        const html = matches
        .map(
            match => `
        <div class= "filterName">
        <h4>${match.name}  <span >${match.capital}</span></h4>
        </div>
        `)
        .join('');

     matchList.innerHTML = html;  
 }
};

search.addEventListener('input', () => searchPays(search.value));





    