// recuperation des elements
const form = document.querySelector("#label");
const Prénomimput = document.querySelector("#Prénomimput ");
const Nomimput = document.querySelector("#Nomimput");
const Télephoneimput = document.querySelector("#Télephoneimput");
const Emailimput = document.querySelector('#Emailimput');
const Groupeimput = document.querySelector('#Groupeimput');
const Bioimput = document.querySelector('#Bioimput');
let spanPrénom = document.querySelector('#spanPrénom');
let spanEmail = document.querySelector('#spanEmail')
let spanBio = document.querySelector("#spanBio")

// evenement

Prénomimput.addEventListener("blur" , function (e) {
    let condition = /^[a-zA-Z_]{3,50}/;
    const Prénomimputvalue = Prénomimput.value.trim();

    if (condition.test(Prénomimputvalue)) {
        Prénomimput.style.borderColor = 'green';
        spanPrénom.innerHTML = "";
    }
    else {
        Prénomimput.style.borderColor = 'red' ;
        spanPrénom.innerHTML = 'entrez plus de 3 lettre';
        spanPrénom.style.color = "red";
        spanPrénom.style.fontSize = "15px";
        spanPrénom.style.fontWeight= "100px"
    }
    
});

Nomimput.addEventListener("blur" , function (e) {
    let condition = /^[a-zA-Z_]{3,50}/;
    const Nomimputvalue = Nomimput.value.trim();

    if (condition.test(Nomimputvalue)) {
        Nomimput.style.borderColor = 'green';
        spanNom.innerHTML = "";
    }
    else {
        Nomimput.style.borderColor = 'red' ;
        spanNom.innerHTML = 'entrez plus de 3 lettre';
        spanNom.style.color = "red";
        spanNom.style.fontSize = "15px";
        spanNom.style.fontWeight= "100px"
    }
    
});

Télephoneimput.addEventListener("blur", function (e) {
    let condition = /^[081|082|083|084|085|089|090|091|097|098|099|]{10}$/;
    const Télephoneimputvalue = Télephoneimput.value.trim();

    if (condition.test(Télephoneimputvalue)) {
        Télephoneimput.style.borderColor = 'green';
        spanTélephone.innerHTML = "";
    }
    else {
        Télephoneimput.style.borderColor = 'red' ;
        spanTélephone.innerHTML = 'entrez au moins 10 chiffre';
        spanTélephone.style.color = "red";
        spanTélephone.style.fontSize = "15px";
        spanTélephone.style.fontWeight= "100px";
    }
    
});

Groupeimput.addEventListener("blur" , function (e) {
    let condition = /^[a-zA-Z_]{3,50}/;
    const Groupeimputvalue = Groupeimput.value.trim();

    if (condition.test(Groupeimputvalue)) {
        Groupeimput.style.borderColor = 'green';
        spanGroupe.innerHTML = "";
    }
    else {
        Groupeimput.style.borderColor = 'red' ;
        spanGroupe.innerHTML = 'entrez plus de 3 lettre';
        spanGroupe.style.color = "red";
        spanGroupe.style.fontSize = "15px";
        spanGroupe.style.fontWeight= "100px"
    }
    
});

Emailimput.addEventListener("blur" , function (e) {
    let condition = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    const Emailimputvalue = Emailimput.value.trim();

    if (condition.test(Emailimputvalue)) {
        Emailimput.style.borderColor = 'green';
        spanEmail.innerHTML = "";
    }
    else {
        Emailimput.style.borderColor = 'red' ;
        spanEmail.innerHTML = 'saisissez un email corret';
        spanEmail.style.color = "red";
        spanEmail.style.fontSize = "15px";
        spanEmail.style.fontWeight= "100px"
    }
    
});





Télephoneimput.addEventListener("blur", function (e) {
    let condition = /^[081|082|083|084|085|089|090|091|097|098|099|]{10}$/;
    const Télephoneimputvalue = Télephoneimput.value.trim();

    if (condition.test(Télephoneimputvalue)) {
        Télephoneimput.style.borderColor = 'green';
        spanTélephone.innerHTML = "";
    }
    else {
        Télephoneimput.style.borderColor = 'red' ;
        spanTélephone.innerHTML = 'entrez au moins 10 chiffre';
        spanTélephone.style.color = "red";
        spanTélephone.style.fontSize = "15px";
    }
    
});

Bioimput.addEventListener('blur',  function(e){
    const biovalue = Bioimput.value.trim();

    if (biovalue==""){
        spanBio.innerHTML='complete la bio';
        spanBio.style.color="red";
        spanBio.style.fontSize='15px';
        Bioimput.style.borderColor='red';
    }
    else{
        Bioimput.style.borderColor='green';
         spanBio.innerHTML='';
    }
        
   
})




// form.addEventListener('click', e => {
//     e.preventDefault();

//     form_verify();
// })

// fonction

    // obtenir le valeur de imput 
//     const Prénomimputvalue = Prénomimput.Value.trim();
//     const NomimputValue = Nomimput.value.Value.trim();
//     const Télephoneimputvalue = Télephoneimput.value.trim();
//     const Emailimputvalue = Emailimputvalue.Value.trim();


//     //usermane verify
//     if (Prénomimputvalue === "") {
//         let message = "compléte le champs";
//         setError(Prénomimput, message);
//     }


// function setError(elements, message) {
//     const formFormulaire = elements.parentElement
// }