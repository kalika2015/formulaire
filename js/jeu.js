/**
 * Created by stagiaire on 05/09/2018.
 */

var num = Math.floor(Math.random() * 100) + 1;
var NbEssais = 0;

var choisi ;


while (NbEssais != 6) {
    while (choisi != num) {
        choisi = prompt('Veuillez saisir un nombre compris entre 0 et 100');
        NbEssais++;

        if (choisi < num) {
            console.log("Non, le nombre est plus grand.");
        }

        if (choisi > num) {
            console.log("Non, le nombre est plus petit.");
        }

    }
    console.log("Correct ! Vous avez trouvé en " + NbEssais + " essais.");
    prompt.empty();
}
console.log("Désolé, c'est fini. Le nombre correct était : " + num);





