function fib(value)
{
    let tmp = [];
    two(value, tmp);
    return tmp;
    
}

function sum(value, tmp)
{
    if (value <= 1)
    {
        tmp[value] = value;
        return value;
    }
    
    tmp[value] = sum(value -1, tmp) + sum(value -2, tmp);
    return tmp[value];
    
}
