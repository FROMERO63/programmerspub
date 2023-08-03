
var likes = 0
var dislikes = 0

function savelike() {
    console.log("like");
    likes += 1;
    localStorage.setItem('alllikes', likes);
    document.getElementById('likeOne').innerHTML = localStorage.getItem('alllikes');
}

function savedislike() {
    console.log("don't like");
    dislikes -= 1;
    document.getElementById('likeTwo').innerHTML = dislikes;
    localStorage.setItem('alldislikes', dislikes);
    document.getElementById('likeTwo').innerHTML = localStorage.getItem('alldislikes');
}

function loadthedata(){
    document.getElementById('likeThree').innerHTML = localStorage.getItem('alllikes');
    document.getElementById('likeFour').innerHTML = localStorage.getItem('alldislikes');
}
