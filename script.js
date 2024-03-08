const str1 = 'Привіт'
const str2 = 'Hello'
const str3 = 'Hallo'
const str4 = 'Ciao'
const str5 = 'Bonjour'

const result = `${str1} ${str2} ${str3} ${str4} ${str5}.`

console.log(result);


const lowerCaseStr = str1.toLowerCase();
const upperCaseStr = str1.toUpperCase();
console.log(lowerCaseStr); 
console.log(upperCaseStr); 



const str = "  Hello, World!  ";
const replacedStr = str.replace("Hello", "Привіт");
const trimmedStr = str.trim();
console.log(replacedStr);
console.log(trimmedStr);


const array = ["Банан", "Апельсин", "Яблуко"];
array.sort((a, b) => a.localeCompare(b));
console.log(array);


const strJ = "JavaScript";
console.log(str.includes("JavaScript"));
console.log(str.includes("CSS")); 


function welcomeUsers(users) {
	const greetings = []
	for (let user of users) {
		const greeting = `Привіт, ${user.name}! Вітаю вас на нашому сайті!`
		greetings.push(greeting)
	}
	return greetings
}

function isPalindrome(word) {
	const reversedWord = word.split('').reverse().join('')
	return word.toLowerCase() === reversedWord.toLowerCase()
}

