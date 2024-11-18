async function my_request(endpoint:string)
{
    const response = await  fetch(endpoint); //truy cap toi endpoint lay data ve
    if(!response.ok)
    {
        throw new Error(`Can not access data ${endpoint}`);
    }
    return response.json();

}

export default my_request;