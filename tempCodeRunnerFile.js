function sum(a,b){
    c=a+b
    function sum1(z){
        x=c+z
        return x
    }
    return sum1
}

console.log(app=sum(2,4)(3))


