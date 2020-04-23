function changeMessage(){
    let message = document.getElementById('message').value;

    document.getElementById('lastMessage').innerHTML = message;
}

document.getElementById('submit').onclick = function(){
    changeMessage();
}