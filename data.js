const categories = [
    {name: 'technology', color: '#cdb4db'},
    {name: 'science', color: '#ffc8dd'},
    {name: 'finance', color: '#ffafcc'},
    {name: 'society', color: '#bde0fe'},
    {name: 'entertainment', color: '#a2d2ff'},
];


const initialFacts = [
    {
        id: 1, 
        text:'React is being developed by Meta (formerly facebook).',
        source:'https://opensource.fb.com/',
        category:'technology',
        votesInteresting: 24,
        votesMindblowing: 9,
        votesFalse: 4,
        createdIn: 2021
    },
    {
        id: 2, 
        text:'Astronauts grow taller in space!',
        source:'https://www.spacecentre.co.uk/news/space-now-blog/why-do-you-grow-taller-in-space/',
        category:'science',
        votesInteresting: 8,
        votesMindblowing: 3,
        votesFalse: 0,
        createdIn: 2020
    },
    {
        id: 3, 
        text:'We spend a year on the toilet in our lifetime.',
        source:'https://dailyinfographic.com/your-bathroom-time',
        category:'society',
        votesInteresting: 15,
        votesMindblowing: 96,
        votesFalse: 1,
        createdIn: 2019
    },
];



/**
 * Load data form supabase
 */

/*
async function loadFacts() {
    const res = fetch('https://yfxldwvaqefsjuwavahh.supabase.c/rest/v1/facts', {
    headers: {
        apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmeGxkd3ZhcWVmc2p1d2F2YWhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzNzMyNDEsImV4cCI6MjAxNDk0OTI0MX0.l6sI5xiVw5G5Bh_cVw8tQXVvwzCpfutBaA8QO61BRKA',
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmeGxkd3ZhcWVmc2p1d2F2YWhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzNzMyNDEsImV4cCI6MjAxNDk0OTI0MX0.l6sI5xiVw5G5Bh_cVw8tQXVvwzCpfutBaA8QO61BRKA',
        },
    });

    const data = await (await res).json();
    console.log(res);
}
*/