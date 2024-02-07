function fib(value)
{
    let tmp = [];
    sum(value, tmp);
    return tmp;
    
}

function sum(value, tmp)
{
    if (value <= 1)
    {
        tmp[value] = value;
        return value;
    }

    if(value < 0)
    {
        return 0;
    }
    
    tmp[value] = sum(value -1, tmp) + sum(value -2, tmp);
    return tmp[value];
    
}
