function fib(value)
{
    let tmp = [];
    tmp = one(value, tmp);
    return tmp;
}

function sum(value, tmp)
{
    
    if(value <= 1)
    {
        tmp[value] = value;
        return value;
    }
    
   // tmp[value] = one(value -1, tmp) + one(value -2, tmp);
    
    return tmp[value] = one(value - 1, tmp) + one(value -2, tmp);
}
