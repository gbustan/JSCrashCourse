//Q1. show rating 
//given a rating, display a star (*) for each full rating and a full-stop (.) for each half rating 

function showRatin(rating){
    //initiate an empty string
    let ratings = "";
    
    // loops through the rounded down rating
    for (let i = 0; i=Math.floor(rating); ++i) {
        ratings += "*" //or ratings += " "

    //if its not the last iteration add a space
    if (i !== Math.floor(rating) -1) {
        ratings += " "
    }
}
    //if the number is not an integer 
    if (!Number.isInteger(rating)){ // if rating is not an integer
     
    // add a full stop
    ratings += " ."
}
    //return it 
    return ratings
}
console.log(showRatin(4.5)) //> * * * * .

console.log('----------------------------ooop-')