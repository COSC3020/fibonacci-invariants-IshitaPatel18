function fib(value)
{
    let tmp = [];
    sum(value, tmp);
    return tmp;
}

function sum(value, tmp)
{
    if(value < 0)
    {
        tmp[0] = 0;
        return 0;
    }
    else if(value === 0)
    {
        tmp[0] = 0;
        return 0;
    }
    else if(value === 1)
    {
        tmp[0] = 0;
        tmp[1] = 1;
        return 1;
    }
    else
    {
        tmp[value] = sum(value -1, tmp) + sum(value -2, tmp);
        return tmp[value];
    }
}
