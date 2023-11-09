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

fetchData();


const openFormBtn = document.getElementById('open-form-btn');
const form = document.querySelector('.form');


openFormBtn.addEventListener('click', function() {
    if (form.classList.contains('d-none')) {
        form.classList.remove('d-none');
        openFormBtn.textContent = 'Close fact';
    } else {
        form.classList.add('d-none');
        openFormBtn.textContent = 'Share a fact';
    }
});