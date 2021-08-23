function setActive(element) {
    if(element.innerText.includes("Like")) {
        element.innerText = "Unlike";
        likeFunction();
    } else {
        element.innerText = "Like";
        unlikeFunction();
    }
}

var totalLikes = [1,4,8];
function likeButton (value) { 
    // var likesCounter = document.querySelector(".totalLikes")
    totalLikes[value]++;

    // likesCounter.innerText = totalLikes + " like(s)"   
    document.getElementById(`likeBox${value}`).innerHTML =`
    <h4 class="totalLikes">${totalLikes[value]} like(s)</h4>
    <button onclick="unlikeButton(${value})">unLike</button>`
    
    //  <div>
        {/* <button onclick="likeButton(this)">unLike</button> */}
    {/* </div> */}
}
function unlikeButton (value) { 
    // var likesCounter = document.querySelector(".totalLikes")
    totalLikes[value]--;

    // likesCounter.innerText = totalLikes + " like(s)"   
    document.getElementById(`likeBox${value}`).innerHTML =`
    <h4 class="totalLikes">${totalLikes[value]} like(s)</h4>
    <button onclick="likeButton(${value})">Like</button>`
    
    //  <div>
        {/* <button onclick="likeButton(this)">unLike</button> */}
    {/* </div> */}
}
 

function likeFunction() {
    totalLikes = totalLikes + 1;
    return totalLikes;
}