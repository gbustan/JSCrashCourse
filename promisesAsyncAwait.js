
async function postsByUser(userId){
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts")

    const result = await promise.json() // await converts into json
    
    //const posts = result
    const posts = result.filter(element => element.userId === userId) // we dont need to await anymore. we have the result of objects
    // and we loop using filter to give anything equal to user id given below  

    

    console.log(posts)
}

postsByUser(4); // user id 4



//q6. first 6 incomplete todos
// call tehis APi https://jsonplaceholder.typicode.com/todos and return the first 6 incomplete todos from the list 


async function firstSixImcomplete(){
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos")

    const result = await promise.json()

    const todos = result.filter(elem => elem.completed === false).slice(0, 6) // elem.completed === false can also be written as 
                                //!elem.completed 
    console.log(todos)
}
firstSixImcomplete()




async function sixIncomplete(){
    const promise = await fetch ("https://jsonplaceholder.typicode.com/todos")

    //then make it readable by converting it to json file 

    const incompleteResults = await promise.json()
    //now we have data to work with and obtain only first 6 incomplete

    const finalResult = incompleteResults.filter(elem => !elem.completed).slice(0, 8)
    
    console.log(finalResult)

}
sixIncomplete()
