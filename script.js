
const SUPABASE_URL = "https://yfxldwvaqefsjuwavahh.supabase.co";
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmeGxkd3ZhcWVmc2p1d2F2YWhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzNzMyNDEsImV4cCI6MjAxNDk0OTI0MX0.l6sI5xiVw5G5Bh_cVw8tQXVvwzCpfutBaA8QO61BRKA';


var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


async function fetchData() {
    const { data: facts, error } = await supabase
        .from('facts')
        .select('*')
        console.log(facts);
        console.log(error);
}

let data = fetchData();

createFactList(fetchData());

/**
 * Variables
 */

const CATEGORIES = [
    {name: 'technology', color: '#cdb4db'},
    {name: 'science', color: '#ffc8dd'},
    {name: 'finance', color: '#ffafcc'},
    {name: 'society', color: '#bde0fe'},
    {name: 'entertainment', color: '#a2d2ff'},
];


/**
 * Select DOM ELements
 */

const openFormBtn = document.getElementById('open-form-btn');
const form = document.querySelector('.form');
const factList = document.querySelector('.fact-list');
const categoryList = document.querySelector('.category-list');


/**
 * Create DOM Elements
 */

// createFactList(INITIAL_FACTS);


openFormBtn.addEventListener('click', function() {

    factList.innerHTML = '';
    categoryList.innerHTML = '';

    if (form.classList.contains('d-none')) {
        form.classList.remove('d-none');
        openFormBtn.textContent = 'Close fact';
    } else {
        form.classList.add('d-none');
        openFormBtn.textContent = 'Share a fact';
    }
});


function createFactList(dataArray) {
    const factsHtmlArr = dataArray.map((fact) => /* html */ `<li class="post">
                                                                <p>${fact.text}</p>
                                                                <a href="${fact.source}" target="_blank">Source<img class="icon-16x16" src="./assets/icons/link_arrow.svg" alt="link arrow"></a>
                                                                <div class="row-space-between">
                                                                    <div class="chip">${fact.category}</div>
                                                                    <div class="row-1rem">
                                                                        <button class="reaction-btn">👍 <strong>${fact.votesMindblowing}</strong></button>
                                                                        <button class="reaction-btn">🤯 <strong>${fact.votesInteresting}</strong></button>
                                                                        <button class="reaction-btn">⛔️ <strong>${fact.votesFalse}</strong></button>
                                                                    </div>
                                                                </div>
                                                            </li>`);
    console.log(factsHtmlArr);

    const html = factsHtmlArr.join('');
    factList.insertAdjacentHTML('afterbegin', html);
}



// const allCategories = CATEGORIES.map((category) => category.name);
// console.log(allCategories);