//bean counting
count_b=0;
function countBs(check_b)
{
    let string_length = check_b.length;
    for(let i=0;i<string_length;i++)
    {
        if(check_b[i]=='b' ||check_b[i]=='B')
        count_b++;
    }

    return count_b;
}

//Bean Counting
char_count = 0;
function countChar(check_string,char_check)
{
    let string_length = check_string.length;
    for(let i=0;i<string_length;i++)
    {
        if(check_string[i]==char_check)
        char_count++;
    }

    return char_count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));