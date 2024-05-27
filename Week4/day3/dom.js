// For each of the questions, find 2 WAYS of accessing :
// 1. The div DOM node?
// 2. The ul DOM node?
// 3. The second li (with Pete)?

const root = document.firstElementChild;
console.log(root);
const body = root.lastElementChild;
console.log(body);
const div = body.children[0];
console.log(div)

