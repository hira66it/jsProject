var d = new Date();
a = d.getDay();
console.log(a)

function makeMultiplier(x){
    var temp = x;
    return function(y){
        temp = temp*y
        return temp;
    }
}
var temp = makeMultiplier(10);
console.log(temp(3))
console.log(temp(3))
console.log(temp(3))

var d = 'X';

function outer(){
    var a=1;
    var b='B';

    function inner(){
        var a =2;
        console.log(b);
        console.log(a);
        console.log(d);
    }
    return 'hi'
}

var someFun = outer();
// someFun();
outer();