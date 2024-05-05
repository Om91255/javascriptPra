function calculateMatches(isMatch){     //isMatch is callback function ::: callback function is a function which is passed as argument in another function
    other_person_match_interest=['l','l','l','r','l','l','r','l']

    for(i of other_person_match_interest){
        if(isMatch(i)){
            console.log("yayy,i got a match")
        }
    }
}

calculateMatches((m)=>m=='r')