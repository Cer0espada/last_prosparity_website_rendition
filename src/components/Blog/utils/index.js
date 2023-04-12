export const toTitleCase = (str) => {

    if (!str) return

    const exceptions = ["and", "the", "a", "an", "for", "to", "but", "at", "by", "is", "it"];
    const splitString = str.toLowerCase().trim().split(" ")
    const newString = []
    splitString.forEach(word => {
        if (exceptions.includes(word)) return newString.push(word)
        console.log(word)
        word.toString().replace(
            /\w\S*/g,
            (txt) => newString.push(txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase())
        )

    })

    return newString.join(" ");
}