
// singleton method : 

// const userNme = new Object()

// console.log(userNme)

// Non_Singleton method : 

const appName = {
  name : "Pub_G" ,
  gameUser : "Ali" ,
  age : 21 ,
  otherGame : {
    otherName : "Free_fire" ,
    otherUser : "Yahya" ,
     age2 : 22 ,
  }
}

console.log(Object.keys(appName))

console.log(Object.values(appName.otherGame))

console.log (Object.entries(appName))

console.log(appName)

console.log(appName.otherGame.otherUser)

const obj1 = {
  1 : "a" ,
  2  : "b" ,
  3 : "c" ,
}

const obj2 = {
  4 : "d" ,
  5  : "e" ,
  6 : "f" ,
}

// let obj3 = Object.assign(obj1 , obj2)

const obj3 = {...obj1 , ...obj2}
console.log (obj3)


















