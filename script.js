// recuperation des elements
const form = document.getElementById("label");
const Prénomimput = document.getElementById("Prénomimput");
const Nomimput = document.getElementById("Nomimput");
const Télephoneimput = document.getElementById("Télephoneimput");
const Emailimput = document.getElementById('Emailimput');
const Groupeimput = document.getElementById('Groupeimput');
const Bioimput = document.getElementById('Bioimput');
let spanPrénom = document.getElementById('spanPrénom');
let spanEmail = document.getElementById('spanEmail')
let spanBio = document.getElementById("spanBio");
let textarea = document.getElementById('textarea');
let imageInput = document.getElementById('file')
let button = document.getElementById('ButtonAdd');
let listeContact = document.querySelector('.Listedesconctats ul');
let imgUrl;

// tableau des contacts

let tabContact = [];

// evenement
imageInput.addEventListener("change", (e) => {
    e.preventDefault();
    let img = e.target.files[0];
    let imageView = () => {
        let newImg = document.querySelector(`#labelfile img`);
        newImg ? newImg.remove() : newImg;
        let image = document.createElement("img");
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = () => {
            document.querySelector('.file span').style.display = 'none';
            document.querySelector('.file label').appendChild(image);
            imgUrl = reader.result;
            image.src = imgUrl;
        }
    }
});

form.addEventListener( 'submit', (event) => {
    event.preventDefault();
    addContact()
})


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
    let condition = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    // new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
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
        
   
});

// functions

// ajout contact

function addContact () {
    let newContact = {
        prenom: Prénomimput.value,
        nom: Nomimput.value,
        telephone: Télephoneimput.value,
        groupe: Groupeimput.value,
        email:Emailimput.value,
        bio:Bioimput.value,
        image:imgUrl


    } ; 
    tabContact.push(newContact);

    Prénomimput.value ='';
    Nomimput.value = '';
    Télephoneimput.value = '';
    Groupeimput.value = '';
    Emailimput.value = '';
    Bioimput.value = '';
    affichageContact()
}

// affichage contact

function affichageContact () {
console.log(tabContact);

    for (let contact of tabContact) {
        let liProfil = document.createElement('li');
        let imgProfil = document.createElement('img');
        let descProfil = document.createElement('div');
        let pNames = document.createElement('p');
        let pNumero = document.createElement('p');
        let pBio = document.createElement('p');

        imgProfil.src = contact.image;
        pNames.textContent = `${contact.prenom} ${contact.nom} ${contact.groupe}`;
        pNumero.textContent = contact.telephone;
        pBio.textContent =contact.bio;

        descProfil.appendChild(pNames);
        descProfil.appendChild(pNumero);
        descProfil.appendChild(pBio);

        liProfil.appendChild(imgProfil);
        liProfil.appendChild(descProfil);

        listeContact.appendChild(liProfil)
    }
    
}

// // function drop(){
// //     textarea;
// //     e.preventDefault();
    
// // }

// // let dropArea = document.getElementById('dropArea');
// // const photoInput = document.getElementById('photo');
// // let photo;

// // let image;

// // function loadImage(file) {
// //   const reader = new FileReader();  
// //   reader.onload = function (e) {  
// //     image = document.createElement('img');
// //     image.src = e.target.result;  
// //     image.alt = "Image Preview";  
// //     dropArea.innerHTML = '';  
// //     dropArea.appendChild(image);
// //   };  
// //   reader.readAsDataURL(file);
// // }

// // photoInput.addEventListener('change', function (event) {
// //   photo = event.target.files[0];
// //   if (photo) {
// //     loadImage(photo);
// //   }
// // });  

// // dropArea.addEventListener('dragover', function (event) {
// //   event.preventDefault();
// //   dropArea.style.border = '2px solid blue';
// // });  

// // dropArea.addEventListener('dragleave', function () {
// //   dropArea.style.border = '2px dashed #ccc';
// // });  

// // dropArea.addEventListener('drop', function (event) {
// //   event.preventDefault();
// //   photo = event.dataTransfer.files[0];
// //   if (photo) {
// //     loadImage(photo);
// //   }
// //   dropArea.style.border = '2px dashed #ccc';
// // });

// // dropArea.addEventListener('click', function () {
// //   photoInput.click();
// // });


















