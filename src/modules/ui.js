// function to show facts on the page
export function displayFacts(facts) {
    const breedFactsDiv = document.getElementById('breed-facts');
    breedFactsDiv.innerHTML = ''; // clear old facts

    facts.forEach(fact => {
        const factElement = document.createElement('p');
        factElement.textContent = fact.attributes.body;
        breedFactsDiv.appendChild(factElement);
    });
}

// function to set up button to fetch facts
export function setupFetchFactButton(callback) {
    const fetchFactButton = document.getElementById('fact-button');
    fetchFactButton.addEventListener('click', callback); 
}