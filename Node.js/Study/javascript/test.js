
var tmp = 0;
function add(one){
    var o = one;

    return function(two){
        o += two;
        return o;
    }
}

var a1 = add(6);

console.log(a1(5));
console.log(a1(5));