// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
  }

function destructivelyPrependCat(name) {
    cats.unshift(name);
  }

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}

function appendCat(name) {
    let newcats = [...cats, name];
    return newcats
}

function prependCat(name) {
    let newcats = [name,...cats];
    return newcats
}

function removeLastCat(name) {
    let newcats = cats.slice(0, cats.length - 1);
    return newcats
}

function removeFirstCat(name) {
    let newcats = cats.slice(1);
    return newcats
}