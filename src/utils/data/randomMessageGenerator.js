const messages = [
    "Hello, how are you?",
    "What's up?",
    "I hope you're having a great day!",
    "Did you know that cats sleep for an average of 12-16 hours a day?",
    "Coding is fun!",
    "Let's grab coffee sometime!",
    "Stay positive!",
    "Have a fantastic day!",
];

/** 
* Function use to generate random Message use custom message data.
* @returns `message`- returns message 
*/

export default function randomMessageGenerator() {
    return messages[Math.floor(Math.random() * messages.length)];
}
