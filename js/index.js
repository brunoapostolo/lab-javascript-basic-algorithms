// Iteration 1: Names and Input
let hacker1 = "Leonardo da Silva Gomes Pereira Costa";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Robson Bambu";
console.log(`The navigator's name is ${hacker2}.`);
// Iteration 2: Conditionals
if (hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker2.length>hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`)
}
// Iteration 3: Loops
// console.log(hacker1.toUpperCase().split(" "));       EXTRA//
let pausado = "";
for (let c = 0 ; c<hacker1.length; c++){
    pausado = pausado + hacker1.toUpperCase()[c]+" ";
}
console.log(pausado);
let reversedName ="";
for (let a = hacker2.length-1; a>=0; a--){
    reversedName = reversedName + hacker2[a];
}
console.log(reversedName);
const array = [hacker1,hacker2];
array.sort();
if (array[0]===hacker1){
    console.log("The driver's name goes first.")
}
else if (array[0]===hacker2){
    console.log("Yo, the navigator goes first definitely.")
}
else if (array[0]===array[1]){
    console.log("What?! You both have the same name?")
}
/// --------------------   BONUS 1       --------------///
const lorem= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis modi aspernatur officia illo, impedit natus placeat doloremque molestias facilis aliquid quam a veniam ad laborum ipsa, architecto suscipit, numquam quodAssumenda quibusdam minus quisquam, voluptatem quod, illum totam, cumque deserunt corporis sed cum temporibus modi! Architecto inventore, impedit, consequuntur quasi necessitatibus repellendus pariatur repudiandae expedita soluta in praesentium iusto quidem?Cupiditate adipisci aliquam laboriosam maiores eos, nesciunt non ipsam voluptate, fugiat quaerat optio assumenda veritatis dolorum veniam voluptatibus dolor numquam quae architecto, rerum amet nobis recusandae ducimus. Beatae, voluptatem magni?";
console.log(`The number of the words in Lorem's string is ${(lorem.split(" ")).length}`)
const wordsInLorem = lorem.split(" ");
let etWord = 0;
for (let Q=0 ; Q<wordsInLorem.length;Q++){
    if (wordsInLorem[Q]==="et"){
        etWord= etWord+1;
    }
}
console.log(`The number of times the word "et" appears in Lorem is ${etWord}`);
/// --------------------   BONUS 2       --------------///
let phraseToCheck = "Was it a car or a cat I saw?".toUpperCase();
let limpandoaString = "";
for (let x = 0 ; x<phraseToCheck.length;x++){
    if (phraseToCheck[x].match(/[a-z]/i)){
        limpandoaString = limpandoaString+phraseToCheck[x];
    }
}
let palindrome = 0;
for (let E = 0; E<limpandoaString.length;E++){
    if (limpandoaString[E]===limpandoaString[(limpandoaString.length)-E-1]){
    }
    else { 
        palindrome= palindrome+1;
    }
}
if (palindrome===0){
    console.log(`A frase é palíndrome`)
}
else{
    console.log(`Essa frase não é palíndrome`)
}
