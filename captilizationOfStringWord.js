let str = "i am software developer";

const capitalization = (string) => {
    let word = string.split(" ");
    let capitalizedWord = word.map((words) => {
        return words.charAt(0).toUpperCase() + words.slice(1)
    })

    return capitalizedWord.join(" ");
}
console.log(capitalization(str));