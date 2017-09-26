/*

 Primitiv value = call by value
 Object = call by reference

*/

function change(c)
{
    c = {value: "123"};
    console.log(c);
}

const foo = {value: 123};
const foo1 = "abcd";

change(foo1);

console.log(foo);

foo.value = "asdf";

console.log(foo);
console.log(foo1);