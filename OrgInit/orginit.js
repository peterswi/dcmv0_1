
var db = firebase.firestore();


function storeData() {

  var inputOrgID = document.getElementById("OrgID").value;
  var inputOrgName = document.getElementById("OrgName").value;
  var inputPasscode = document.getElementById("Passcode").value;


     db.collection("organizations").doc(inputOrgID).set({
         OrgName: inputOrgName,
         Passcode: inputPasscode
     })
     .then(function() {
         console.log("Doc successful");
     })
     .catch(function(error) {
        console.error("Error writing doc", error);
     });
}

function clearField() {
    document.getElementById("OrgID").value="";
    document.getElementById("OrgName").value="";
    document.getElementById("Passcode").value="";
}

function submitEvent(){
    storeData();
    clearField();
}
