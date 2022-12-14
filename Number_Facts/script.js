console.log('hello world');


// Part 1: Number Facts

// 1. Request to Numbers API to get fact about your favorite #
// get json back

let resp = axios.get('http://numbersapi.com/7?json')
    .then(res =>{
        console.log(res.data.text);
        })
    .catch(err => console.log(err));
        

// 2.
// Get data on multiple numbers from the same request
// Place number facts on the page

const $multiNums = $('#multi-nums');
const $multiFacts = $('#multi-facts');

let url = 'http://numbersapi.com/2,3,5,7?json';

let multipleNumFacts;

axios.get(url)
    .then(res => {
        console.log(res.data)
        multipleNumFacts = res.data
        
        for (item in multipleNumFacts){
            // console.log(typeof(item));
            // console.log(multipleNumFacts[item]);
            $newP = $('<p>');
            $newP.text(multipleNumFacts[item]);
            $multiNums.append($newP);
        }
    })
    .catch(err => console.log(err));

// Make async function
// call the function multiple times 


// create dom elements and display on page
// 3. get 4 facts about my fav number with multiple requests

let resArr = [];

for (let i =1; i<5; i++){
    resArr.push(
        axios.get('http://numbersapi.com/7?json')
        );
}

Promise.all(resArr)
    .then(ele => {
        ele.forEach(numFact => {
            $newP = $('<p>');
            $newP.text(numFact.data.text);
            $multiFacts.append($newP);
        });
    });

