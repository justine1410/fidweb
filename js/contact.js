let envoi = document.querySelector(".button")

/* Verification champ */
const form = document.querySelector(".form");
const input = document.querySelectorAll("input");
let message = document.querySelector('#message');
const p = document.querySelectorAll(".message")

const nameRegex = /^[a-zA-Z" "]+$/;
const emailRegex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
const phoneRegex=/^0\d(\s|-)?(\d{2}(\s|-)?){4}$/;

//une fonction qui teste la valeur des regex
function isValid(regex, valeur){
    return regex.test(valeur);
};


//je vérifie les champ du formulaire
for(let i=0; i<input.length; i++){
    //fonction pour le message d'erreur
    function message(boolean, ok, erreur){
        if(boolean == true){
            input[i].style.background='#f1f1f1';
            p[i].style.display="none";
        }else{
            p[i].innerHTML = erreur;
            p[i].style.color="red";
            input[i].style.background='#f3c7c7';
        }
    }

    input[i].addEventListener("input", function(e){
        //verification des champs
        if(input[i].id =="name"){
            const test = isValid(nameRegex, input[i].value);
            message(test,"champ valide", "champ invalide");
        }else if(input[i].id =="company"){
            const test = isValid(nameRegex, input[i].value);
            message(test, "champ valide", "champ invalide");    
        }else if(input[i].id == "phone"){
            const test = isValid(phoneRegex, input[i].value);
            message(test, "champ valide", "champ invalide");
        }else if(input[i].id == "email"){
            const test = isValid(emailRegex, input[i].value);
            message(test, "champ valide", "champ invalide");
        }else{
            const test = isValid(nameRegex, input[i].value);
            message(test, "champ valide", "champ invalide");
        };
    });
};

// message.addEventListener("input", (e)=>{
//     if(message.value==""){
//         let formMessage = document.querySelector(".form-message");
//         formMessage.innerHTML = "veuillez remplir ce champ !"
//         formMessage.style.color="red"
//     }else{
//         let formMessage = document.querySelector(".form-message");
//         formMessage.innerHTML = "champ valide"
//         formMessage.style.color="green"
//     }
// })

envoi.addEventListener('click', (e)=>{
    e.preventDefault()
    let name = document.querySelector('#name');
    let company = document.querySelector('#company');
    let phone = document.querySelector('#phone');
    let email = document.querySelector('#email');
    let message = document.querySelector('#message');

    let formMessage = document.querySelector(".form-message");



     if(!nameRegex.test(name.value) || !phoneRegex.test(phone.value) || !emailRegex.test(email.value) ){
        formMessage.innerHTML = "Un champ du formulaire est invalide "
        formMessage.style.color="red"
    }else if ( name.value =="" || email.value =="" ||message.value == ""){
        formMessage.innerHTML = "Un champ du formulaire est vide!"
        formMessage.style.color="red"
    }else{
        let data={
            service_id : "service_0k0qm38",
            template_id : "template_prkwcgf",
            user_id: "user_FXct7Pk4JPOi5rEfYOCeM",
            template_params:{
                name: name.value,
                company: company.value,
                phone: phone.value,
                email:email.value,
                message:message.value
            }
        
        }
         fetch('https://api.emailjs.com/api/v1.0/email/send',{
            headers:{
                'Content-Type': 'application/json',
            },
            method:'POST',
            body: JSON.stringify(data)
        })
        .then(async (response)=>{
            try{
                formMessage.innerHTML = "Message bien envoyé !"
                formMessage.style.color="green"
            }catch (error){
                console.log(error);
            }
        })
    
        
    }
 

 
})

