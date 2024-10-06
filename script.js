document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".search-button");
    const input = document.querySelector(".search-bar");

    console.log('Adding event listener to button');

    function performSearch() {
        const query = input.value.trim();
        console.log(`Search query: ${query}`);

        if (query) {
            searchDuckDuckGo(query);
        } else {
            searchDuckDuckGo(input.id);
        }
    }

    button.addEventListener("click", performSearch);

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            performSearch();
        }
    });

    let messages = [
        "DuckDuckGo...",
        "What's the capital of France?",
        "ChatGPT",
        "X dot com",
        "How to get a Six Pack in 5 minutes",
        "Cat pictures",
        "Minecraft noob vs pro vs hacker",
        "Cake recipe",
        "Python tutorial",
        "Github",
        "2024 elections",
        "5000 chicken vs 1 t-rex",
        "ASMR video",
        "Travel vlog",
        "Best countries to travel to",
        "Desmos dot com",
        "Cute puppy",
        "Space pictures",
        "The end of the world",
        "Planet Mars",
        "Saturn pictures",
        "Breaking news",
        "Russia's invasion of Ukraine",
        "israel's war on Palestinians",
        "Trump vs Harris",
        "Elon Musk",
        "Jeff Bezos",
        "Mark Zuckerberg",
        "Jeffrey Epstein",
        "Huggingface",
        "China and Taiwan",
        "Iran vs israel",
        "10 reasons why anime is Trash",
        "FaceBook dot com",
        "CS50",
        "C++ tutorial",
        "Javascript tutorial",
        "Leetcode",
        "Age calculator",
        "Human anatomy course",
        "Climate change",
        "Florida man",
        "What is my IP?",
        "10 reasons anime is not Trash",
        "Why is",
        "frivlegend dot com",
        "Brainrot meaning",
        "Skibidi meaning",
        "cleverbot dot com",
        "How do LLMs work?",
        "Biochemisty course",
        "Benefits of getting married early",
        "Benefits of not getting married early",
        "Will the sun explode?",
        "How long is a light year?",
        "Logo transparent PNG",
        "Google trends",
        "Google maps",
        "Affordale PC Amazon",
        "AliExpress",
        "Funny moments compilation",
        "How many bananas can I eat in a day?",
        "Snake game",
        "Snake game pygame",
        "What's the capital of Iceland?",
        "Google earth",
        "Best gaming PC 2024",
        "World War 3",
    ];

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Sep", "Oct", "Nov", "Dec"
    ]

    let years = Array.from({ length: 24 }, (_, index) => 2000 + index);
    let days = Array.from({ length: 31 }, (_, index) => index)

    let adjectives = ["Perfect", "Amazing", "Awesome", "Great", "good",
        "Decent", "Mid", "Bad", "Awful", "Terrible", "Trash"]
    
        let codingLanguages = ["C", "C++", "Java", "C#", "Python", "Javascript",
            "Objective-C", "Swift", "Rust", "Lua"
        ]

    function updatePlaceholder() {
        let randomIndex = Math.floor(Math.random() * messages.length);
        let randomElement = messages[randomIndex];
        
        if (randomElement === "Florida man") {
            let FloridaMonth = Math.floor(Math.random() * months.length);
            let FloridaYear = Math.floor(Math.random() * years.length);
            let FloridaDay = Math.floor(Math.random() * days.length);
            randomElement += " " + days[FloridaDay] + " " + months[FloridaMonth] + " " + years[FloridaYear]
        }

        if (randomElement === "Why is") {
            let AdjectivesIndex = Math.floor(Math.random() * adjectives.length);
            let LanguageIndex = Math.floor(Math.random() * codingLanguages.length);
            randomElement += " " + codingLanguages[LanguageIndex] + " " + adjectives[AdjectivesIndex] + "?";
        }

        input.id = randomElement;
        // Animate showing the placeholder
        let i = 0;
        let interval = setInterval(() => {
            if (i < randomElement.length) {
                input.placeholder = randomElement.slice(0, i + 1);
                i++;
            } else {
                clearInterval(interval);
                // Wait a few seconds before deleting
                setTimeout(() => {
                    animateDeletion(randomElement);
                }, 2000); // milliseconds delay before deletion
            }
        }, 30); // Adjust speed of showing characters
    }

    function animateDeletion(originalText) {
        let j = originalText.length;
        let deleteInterval = setInterval(() => {
            if (j > 0) {
                input.placeholder = originalText.slice(0, j - 1);
                j--;
            } else {
                clearInterval(deleteInterval);
                updatePlaceholder();
            }
        }, 30); // Adjust speed of deletion
    }

    updatePlaceholder();
});

function searchDuckDuckGo(query) {
    const encodedQuery = encodeURIComponent(query);
    const searchURL = `https://duckduckgo.com/?q=${encodedQuery}`;
    window.open(searchURL, '_blank');
}
