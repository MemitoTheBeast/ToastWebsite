const toastFacts = [
    "Toast was likely discovered by accident when early civilizations cooked bread over an open flame.",
    "The word 'toast' comes from the Latin 'tostum,' meaning 'to burn or scorch.'",
    "The first electric toaster, called the 'Eclipse,' was invented in 1893.",
    "The most expensive piece of toast ever sold was $28,000, featuring an image of the Virgin Mary.",
    "Astronauts use tortillas instead of toast in space to avoid floating crumbs.",
    "The phrase 'raising a toast' comes from medieval times when spiced toast was added to wine for flavor."
];

function addToastFact() {
    const factContainer = document.getElementById("fact-container");
    const newFact = document.createElement("p");
    newFact.textContent = toastFacts[Math.floor(Math.random() * toastFacts.length)];
    factContainer.appendChild(newFact);
}
