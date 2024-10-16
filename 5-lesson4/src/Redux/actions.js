



export function addUserAction(user)  {
    return async function (){

        const options = {
            method: 'POST',
            Headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user)
        }


        const response = await fetch("https://jsonplaceholder.typicode.com/users", options)


    }

}