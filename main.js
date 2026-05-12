// ===== Navigation Mobile =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// ===== Gestion du compteur panier =====
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = cart.length;
    });
}

function addPremiumToCart() {
    const cart = [{
        id: 'premium-monthly',
        name: 'Abonnement Premium',
        price: 30,
        description: 'Accès illimité à tous les contenus'
    }];

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function clearCart() {
    localStorage.removeItem('cart');
    updateCartCount();
}

// ===== Initialisation =====
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();

    // Boutons "Ajouter au panier"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            addPremiumToCart(); 
            alert('Abonnement ajouté au panier. Vous pouvez maintenant remplir le formulaire de paiement ci-dessous.');

            // Afficher la zone de paiement si elle existe
            const paymentSection = document.getElementById('payment-section');
            if (paymentSection) {
                paymentSection.style.display = 'block';
                paymentSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Formulaire de paiement simulé
    const paymentForm = document.querySelector('.payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = paymentForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Traitement...';

            setTimeout(() => {
                clearCart(); // vide le panier après paiement simulé
                window.location.href = 'confirmation.html';
            }, 2000);
        });
    }
});
// Format automatique du numéro de carte
const cardNumber = document.getElementById('card-number');
if (cardNumber) {
    cardNumber.addEventListener('input', function () {
        let value = this.value.replace(/\D/g, '');
        value = value.substring(0, 16);
        value = value.replace(/(.{4})/g, '$1 ').trim();
        this.value = value;
    });
}

// Format automatique de la date MM/AA
const expiryDate = document.getElementById('expiry-date');
if (expiryDate) {
    expiryDate.addEventListener('input', function () {
        let value = this.value.replace(/\D/g, '');
        value = value.substring(0, 4);

        if (value.length >= 3) {
            value = value.substring(0, 2) + '/' + value.substring(2);
        }

        this.value = value;
    });
}