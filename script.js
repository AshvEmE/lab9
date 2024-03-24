// Створення рядків з привітаннями на різних мовах
const str1 = 'Привіт'
const str2 = 'Hello'
const str3 = 'Hallo'
const str4 = 'Ciao'
const str5 = 'Bonjour'

// Створення результуючого рядка, що об'єднує всі привітання
const result = `${str1} ${str2} ${str3} ${str4} ${str5}.`
console.log("Створення результуючого рядка, що об'єднує всі привітання")
console.log(result)
console.log('-')
console.log('-')
console.log('-')

// Перетворення рядка на нижній та верхній регістр
const lowerCaseStr = str1.toLowerCase()
const upperCaseStr = str1.toUpperCase()
console.log('Перетворення рядка на нижній та верхній регістр')
console.log(lowerCaseStr)
console.log(upperCaseStr)
console.log('-')
console.log('-')
console.log('-')

// Заміна та видалення зайвих пробілів у рядку
const str = '  Hello, World!  '
const replacedStr = str.replace('Hello', 'Привіт')
const trimmedStr = str.trim()
console.log('Заміна та видалення зайвих пробілів у рядку')
console.log(replacedStr)
console.log(trimmedStr)
console.log('-')
console.log('-')
console.log('-')

// Сортування масиву рядків за алфавітом
const array = ['Банан', 'Апельсин', 'Яблуко']
array.sort((a, b) => a.localeCompare(b))
console.log('Сортування масиву рядків за алфавітом')
console.log(array)
console.log('-')
console.log('-')
console.log('-')

// Перевірка чи містить рядок певну підстрічку
const strJ = 'JavaScript'
console.log('Перевірка чи містить рядок певну підстрічку')
console.log(strJ.includes('JavaScript'))
console.log(strJ.includes('CSS'))
console.log('-')
console.log('-')
console.log('-')

// Функція, яка вітає користувачів за їхніми іменами
console.log(
	"Функція яка приймає масив об'єктів з даними користувача та буде формувати привітання"
)
function welcomeUsers(users) {
	const greetings = []
	for (let user of users) {
		greetings.push(`Welcome, ${user.name}!`)
	}
	return greetings
}
console.log('-')
console.log('-')
console.log('-')

// Функція, яка перевіряє, чи є слово паліндромом
console.log(
	'Функція яка перевіряє чи слово є паліндромом - для виклику пропишіть isPalindrome'
)
function isPalindrome(word) {
	const reversedWord = word.split('').reverse().join('')
	return word.toLowerCase() === reversedWord.toLowerCase()
}
