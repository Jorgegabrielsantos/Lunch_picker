let lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);

  console.log(`${str} added to the end of the lunch menu.`)

  return arr;
}

function addLunchToStart(arr, str) {
  arr.shift(str);

  return `${str} added to the start of the lunch menu.`;

  return arr;
}

function removeLastLunch(arr) {
  arr.pop();

  if (arr.pop() == true) {
    return arr.pop() + " removed from the end of the lunch menu.";
  } else {
    return "No lunches to remove.";
  }
} 

function removeFirstLunch(arr) {
  arr.unshift();

  if (arr.unshift() == true) {
    return arr.unshift() + " removed from the start of the lunch menu.";
  } else {
    return "No lunches to remove.";
  }
}

/* function getRandomLunch(arr) {
  
} */