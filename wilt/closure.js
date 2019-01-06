// Thu 3 Jan
function makeCounter(){
    var count =0;
    return f;
    function f(){
        return count++;
    }
}

var counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

function Person(name, age){
    var _name = name;
    var _age = age;
    return {
        getName: function(){ return _name;},
        getAge: function(){return _age;},
        setAge: function(x){_age =x;}
    };
}

// var one = Person("Tom",18);
// console.log(one.getName());
// console.log(one.getAge());
// one.setAge(50)
// console.log(one.getAge());

function Primes(n){
    var p= [];
    for(let i=2; i<=n ; i++) p[i] = true;
    var max = Math.floor(Math.sqrt(n));
    var x =2;
    while(x<=max){
        for(let i=2*x; i<=n; i+=n) p[i] = false;
        while(!p[++x]);
    }
    var primes = [], nprimes =0;
    for(let i=2; i<=n; i++) if(p[i]) primes[nprimes++] = i;
    p = null;
    return function(m){
        for(var i=0, product=1; i<m; i++){
            product *= primes[Math.floor(Math.random()*nprimes)];

        }
        return product;
    };
}
var primeProduct = Primes(10000);
console.log(primeProduct(2));
console.log(primeProduct(2));
