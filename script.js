let scores, roundScore, activePlayer, gamePlaying;

function init() {
    scores = [0, 0];
    roundScore = 0;
    // Joueur aléatoire en début de partie
    activePlayer = Math.floor(Math.random() * 2) + 1;
    gamePlaying = true;

    document.getElementById('scoreJoueur1').textContent = 'Score: 0';
    document.getElementById('scoreJoueur2').textContent = 'Score: 0';
    document.getElementById('mancheJoueur1').textContent = 'Score Manche: 0';
    document.getElementById('mancheJoueur2').textContent = 'Score Manche: 0';
    document.getElementById('resultat').textContent = '';

    document.getElementById('joueur1').classList.remove('active');
    document.getElementById('joueur2').classList.remove('active');
    document.getElementById('joueur1').classList.add('active');
}

init();

document.getElementById('demarrerButton').addEventListener('click', function() {
    if (!gamePlaying) {
        init();
    }
});

document.getElementById('lancerDeDe').addEventListener('click', function() {
    if (gamePlaying) {
        // Générer un nombre aléatoire entre 1 et 6
        const dice = Math.floor(Math.random() * 6) + 1;

        // Afficher l'image du dé correspondante
        const diceDOM = document.querySelector('.buttonde img');
        diceDOM.src = 'images/de' + dice + '.png';

        // Maj du score de la manche si le dé n'est pas égal à 1
        if (dice !== 1) {
            roundScore += dice;
            document.getElementById('mancheJoueur' + activePlayer).textContent = 'Score Manche: ' + roundScore;
        } else {
            // Passer le tour du joueur si le dé est égal à 1
            changerJoueur();
        }
    }
});

document.getElementById('holdButton').addEventListener('click', function() {
    if (gamePlaying) {
        // Ajouter le score de la manche au score global
        scores[activePlayer - 1] += roundScore;

        // Mettre à jour l'UI
        document.getElementById('scoreJoueur' + activePlayer).textContent = 'Score: ' + scores[activePlayer - 1];

        // Vérifier si le joueur a gagné le jeu
        if (scores[activePlayer - 1] >= 100) {
            document.getElementById('resultat').textContent = 'Joueur ' + activePlayer + ' a gagné!';
            gamePlaying = false;
        } else {
            // Passer au joueur suivant
            changerJoueur();
        }
    }
});

function changerJoueur() {
    // Réinitialiser le score de la manche à zéro
    roundScore = 0;

    // Mise à jour de l'UI
    document.getElementById('mancheJoueur' + activePlayer).textContent = 'Score Manche: 0';

    // Passer au joueur suivant
    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;

    // Mise à jour de l'UI pour indiquer le joueur actif
    document.getElementById('joueur1').classList.toggle('active');
    document.getElementById('joueur2').classList.toggle('active');

    // Ajouter l'effet gras au joueur actif
    document.getElementById('joueur' + activePlayer).style.fontWeight = 'bold';

    // Retirer l'effet gras du joueur inactif
    const joueurInactif = activePlayer === 1 ? 2 : 1;
    document.getElementById('joueur' + joueurInactif).style.fontWeight = 'normal';
}
