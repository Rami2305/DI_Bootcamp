/** http methods -
 * GET
 * POST
 * UPDATE
 * DELETE
 * PUT
 * PATCH
 */

/** forms */

let str = `[
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed "
  }]
`;

let str2 = '{"a": "bla bla bla"}';
// let post = JSON.parse(str);
// console.log(post[0].id, post[0].userId, post[0].title, post[0].body);

let users = [
  { id: 1, name: "aaa", username: "a.a.a", password: "1@34%" },
  { id: 2, name: "bbb", username: "b.b.b", password: "1@34%555" },
  { id: 3, name: "ccc", username: "c.c.c", password: "1@34%666" },
];
// console.log(users);

// http -> text/string

const filterJson = (key, value) => {
  console.log(key, value);
  if (key === "username") return "aaaa";
  if (key === "password") return undefined;

  return value;
};

let jsonUsers = JSON.stringify(users);
// console.log(jsonUsers);

/** handle exeptions */

console.log("before");
function x() {
  try {
    a;
    //....
  } catch (e) {
    // console.log(e.message, 'in x function');
    throw new Error('somethin wrong with a in x function')
  }
}

function y() {
  try {
    x();
  } catch (err) {
    console.log(err.message, ' in y function');
    throw new Error('wow')
  }
  finally{
    console.log('y function ');
  }
}

try{
y()
}
catch(e){}



function z() {
  try {
    x();
  } catch (err) {
    console.log(err.message, ' in z function');
  }
}
z()
console.log("after");
