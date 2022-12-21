 let saveEl = document.getElementById("save-el")
 let countEl = document.getElementById("count-el")
 let count = 0

 function increment() {
    count += 1 
    countEl.textContent = count
}

 function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0 
}

console.log("Let's count people on the subway!")

// let username = "per"
// let message = "You have three new notifications"

// let messageToUsers = message + "," + username + "!"

// console.log(messageToUsers)

// let name = "Abdulazeez"
// let greetings = "Hi my name is "

// let myGreeting = greetings + name

// console.log(myGreeting)
// let welcomeEl =document.getElementById("welcome-el")

// let name = "Abdulazeez"
// let greeting = "Welcome back "
// welcomeEl.innerText = greeting + name

// welcomeEl.innerText += "✋"
