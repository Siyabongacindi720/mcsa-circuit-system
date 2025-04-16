
const users = {
    "rev1021": "Rev@1021",
    "snamane": "Steward@1",
    "bzondo": "Steward@2",
    "chuma": "Steward@3",
    "nfunani": "Steward@4",
    "mathebula": "Steward@5",
    "imathelela": "Ebenezer@1",
    "dlamini": "Ebenezer@2",
    "fmvinjelwa": "Ebenezer@3",
    "mzizi": "Embalenhle@1",
    "kolobe": "Embalenhle@2",
    "jiyane": "Embalenhle@3",
    "emaseko": "Bethal@1",
    "cbidi": "Evander@1",
    "mnyathela": "Secunda@1",
    "qmajola": "Secunda@2",
    "nshili": "KMT@1"
};

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] && users[username] === password) {
        alert("Login successful as " + username);
        localStorage.setItem("loggedInUser", username);
        // Redirect based on role
        window.location.href = "dashboard.html";
    } else {
        alert("Incorrect username or password!");
    }
}
