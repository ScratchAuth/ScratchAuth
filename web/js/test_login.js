function showOutput() {
    var Scratch = require('scratch-api');
    Scratch.UserSession.create('usernmae', 'password', callback(Error, Scratch.UserSession));
    var boolLogin = Scratch.UserSession.verify()
    console.log(boolLogin)
    var strLogin = str(boolLogin)
    document.getElementById('output').innerHTML = strLogin
}
function callback(err, session){
    if (err)
    return console.error("An error occurred while connecting to scratch servers:", err);
    
    console.log("Logged in as", session.username, "(" + session.id + ")");
}
