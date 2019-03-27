

   function surligne(champ, erreur) {
       if (erreur){
           champ.style.backgroundColor = "#fba";
       } else {
           champ.style.backgroundColor = "";
       }
   }


   // Contact
   function verifNom(champ) {
       var erreur = document.getElementById('alertNom');
       var nomValid = document.getElementById('nom');
        if (nomValid.value == ""){
            surligne(champ, true);
            alertNom = "Veuillez remplir le champ Nom";
            erreur.textContent = 'Nom et Prénom manquant';
            erreur.style.color = 'red';
            return false;
        } else {
            surligne(champ, false);
            alertNom = "";
            erreur.textContent = '';
            return true;
        }
    }

   function testRadio(champ) {
       var erreur = document.getElementById('alertSexe');
       if (document.getElementById('genre1').checked == false && document.getElementById('genre2').checked == false){
           alertSexe = "Veuillez choisir votre civilité";
           erreur.textContent = 'Choisir un civilité svp';
           erreur.style.color = 'red';
           return false;
       } else  {
           alertSexe = "";
           erreur.textContent = '';
           return true;
       }
   }

   function verifMail(champ) {
       var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
       var erreur = document.getElementById('alertEmail');
       if (!regex.test(champ.value)){
           surligne(champ, true);
           alertEmail = "Veuillez remplir correctement le champ Email";
           erreur.textContent = 'Champ Email vide ou incorrect';
           erreur.style.color = 'red';
           return false;
       } else {
           surligne(champ, false);
           alertEmail = "";
           erreur.textContent = '';
           return true;
       }
   }

   function verifList() {
       var erreur = document.getElementById('alertPays');
       var paysValid = document.getElementById('pays');
       if (paysValid.value != ""){
           alertList = "";
           erreur.textContent = '';
           return false;
       } else {
           alertList = "Veuillez sélction votre pays";
           erreur.textContent = 'Sélection votre pays svp';
           erreur.style.color = 'red';
           return true;
       }
   }

   function verifPro() {
       var erreur = document.getElementById('alertSituation');
       var choix1 = document.getElementById('exampleCheck1');
       var choix2 = document.getElementById('exampleCheck2');
       var choix3 = document.getElementById('exampleCheck3');
       if (choix1.checked == false && choix2.checked == false && choix3.checked == false){
           alertProf = "Veuillez choisir votre intérêt";
           erreur.textContent = 'Cocher au moin un intérêt svp';
           erreur.style.color = 'red';
           return false;
       } else {
           alertProf = "";
           erreur.textContent = '';
           return true;
       }
   }

   function verifText(champ) {
       var erreur = document.getElementById('alertMess');
       var mess = document.getElementById('mess');
       if (mess.value == ""){
           surligne(champ, true);
           alertText = "Veuillez remplir le champ Message";
           erreur.textContent = 'Vous avez oublier de mettre votre message';
           erreur.style.color = 'red';
           return false;
       } else {
           surligne(champ, false);
           alertText = "";
           erreur.textContent = '';
           return true;
       }
   }

   function verifForm(form) {
    verifNom(form);
    testRadio(form);
    verifMail(form);
    verifText(form);
    verifList(form);
    verifPro(form);

       if (alertNom=="" && alertSexe=="" && alertEmail=="" && alertList=="" && alertProf=="" && alertText==""){
           alert("Merci");
           return true;
       } else {
           //alert(alertNom+"\n\n"+alertSexe+"\n\n"+alertEmail+"\n\n"+alertList+"\n\n"+alertProf+"\n\n"+alertText);
           return false;
       }
   }


   // Connexion
   function verifIdentifiant(champ) {
       var erreur = document.getElementById('alertIdentifiant');
       if (document.getElementById('identifiant').value == ""){
           surligne(champ, true);
           alertIdentifiant = "Veuillez mettre un identifiant";
           erreur.textContent = 'Identifiant manquant';
           erreur.style.color = 'red';
           return false;
       } else {
           surligne(champ, false);
           alertIdentifiant = "";
           erreur.textContent = '';
           return true;
       }
   }

   function verifPassword(champ) {
       var erreur = document.getElementById('alertPassword');
       if (document.getElementById('password').value == ""){
           surligne(champ, true);
           alertPassword = "Veuillez mettre un mot de passe";
           erreur.textContent = 'Mot de passe manquant';
           erreur.style.color = 'red';
           return false;
       } else {
           surligne(champ, false);
           alertPassword = "";
           erreur.textContent = '';
           return true;
       }
   }

   function verifPasswordConfirm(champ) {
       var erreur = document.getElementById('alertPasswordConfirm');
       if (document.getElementById('passwordConfirm').value != document.getElementById('password').value){
           surligne(champ, true);
           alertPasswordConfirm = "Veuillez mettre le meme mot de passe";
           erreur.textContent = "le mot de passe n'est pas identique";
           erreur.style.color = 'red';
           return false;
       } else {
           surligne(champ, false);
           alertPasswordConfirm = "";
           erreur.textContent = '';
           return true;
       }
   }

   function verifConnexion(form) {
       verifIdentifiant(form);
       verifPassword(form);
       verifPasswordConfirm(form);
       if (alertIdentifiant=="" && alertPassword=="" && alertPasswordConfirm=="" ){
           alert("Boom !! \n Tout est bon");
           return true;
       } else {
           //alert(alertIdentifiant+"\n\n"+alertPassword+"\n\n"+alertPasswordConfirm);
           return false;
       }
   }