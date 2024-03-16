class Formatter {
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9\-'" "]+/g, "")
  }

  static titleize(string){
    let array = string.split(" ")
    let newArray= []
  const lowercaseWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
  for(let i of array){
      if(!lowercaseWords.includes(i)){
          newArray.push(Formatter.capitalize(i))
        } else newArray.push(i)
      }
    let newString = Formatter.capitalize(newArray.join(" "))
    return newString
  } 
}


const titleizedString = Formatter.titleize("hello to the world");
console.log(titleizedString);