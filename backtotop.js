document.addEventListener('DOMContentLoaded', () => {
    // Créer le bouton dynamiquement
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'backToTop';
    backToTopButton.title = 'Go to top';
    backToTopButton.innerHTML = '↑'; // Flèche vers le haut
    document.body.appendChild(backToTopButton);
  
    // Appliquer le style via JS
    const style = `
      #backToTop {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 100;
        background-color: #2d2d2d;
        color: #ffffff;
        border: none;
        border-radius: 50%;
        padding: 10px 15px;
        font-size: 18px;
        cursor: pointer;
        display: none; /* Caché par défaut */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        transition: opacity 0.3s ease, transform 0.3s ease;
      }
      #backToTop:hover {
        background-color: #ff4500; /* Changement de couleur au survol */
        transform: scale(1.1); /* Agrandissement au survol */
      }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = style;
    document.head.appendChild(styleSheet);
  
    // Afficher ou cacher le bouton en fonction du scroll
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
  
    // Ajouter l'événement de clic pour remonter en haut
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Scroll doux
      });
    });
  });
  