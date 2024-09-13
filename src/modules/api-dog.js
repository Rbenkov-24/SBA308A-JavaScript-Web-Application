const BASE_URL = 'https://dogapi.dog/api/v2'; // the root url for the dog API. this Api supports GET requests only.

export async function fetchRandomDogFact() {
    
/*this line sends a GET request to the dog API to fetch a random fact about dogs 
*fetch() function automatically  uses GET method by default unless specified otherwise
*if i want to use methods like POST PUT or DELETE i need to add them like this. 
    Ex: fetch(url, { method: 'POST', body: JSON.stringify(data) });
*/
        const response = await fetch(`${BASE_URL}/facts`); 
        
        if (!response.ok) {
            throw new Error('Something went wrong. Please try again.'); //ensuring the netwrok erros are handled
        }

        const data = await response.json();

        //select random fact from data array
        const randomIndex = Math.floor(Math.random() * data.data.length);
        return [data.data[randomIndex]]; 

}