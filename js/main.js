document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. Formatage du numéro de carte bancaire
    // ==========================================
    const cardNumberInput = document.getElementById('card-number');
    
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function (e) {
            // On supprime tout ce qui n'est pas un chiffre
            let value = e.target.value.replace(/\D/g, '');
            
            // On limite à 16 chiffres maximum
            value = value.substring(0, 16);
            
            // On ajoute un espace tous les 4 chiffres
            value = value.replace(/(.{4})/g, '$1 ').trim();
            
            // On met à jour le champ
            e.target.value = value;
        });
    }

    // ==========================================
    // 2. Formatage de la date d'expiration (MM/AA)
    // ==========================================
    const expiryDateInput = document.getElementById('expiry-date');
    
    if (expiryDateInput) {
        expiryDateInput.addEventListener('input', function (e) {
            // On supprime tout ce qui n'est pas un chiffre
            let value = e.target.value.replace(/\D/g, '');
            
            // On limite à 4 chiffres maximum (2 pour le mois, 2 pour l'année)
            value = value.substring(0, 4);
            
            // Si on a tapé plus de 2 chiffres, on insère le slash '/'
            if (value.length >= 3) {
                value = value.substring(0, 2) + '/' + value.substring(2);
            }
            
            // On met à jour le champ
            e.target.value = value;
        });
    }

});