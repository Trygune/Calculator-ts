class Operation {
    static plus=(x,y)=>{
        return x + y        
    }
    static devide=(x,y)=>{
        return x / y
    }
    static minus=(x,y)=>{
        return x - y
    }
    static multiple=(x,y)=>{
        return x * y
    }
    static percent=(x,y)=>{
        return (x/100)* y
    }
    static handle_method=(method,x,y)=>{
        let result=Operation[method](x,y)
        return parseFloat(result.toPrecision(12))
    }
}

export default Operation