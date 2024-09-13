//import necessary modules
import { fetchRandomDogFact } from './modules/api-dog.js';
import { displayFacts, setupFetchFactButton } from './modules/ui.js';

document.addEventListener('DOMContentLoaded', () => {
    setupFetchFactButton(async () => {
        const facts = await fetchRandomDogFact();
        displayFacts(facts);
    });
});