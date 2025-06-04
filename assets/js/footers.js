const footer = document.createElement('div');
footer.innerHTML = `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <style>
    .footer {
      background-color: #000;
      color: #ddd;
      padding: 40px 20px;
      font-family: 'Poppins', sans-serif;
      text-align: center;
    }

    .footer-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 40px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-section {
      flex: 1;
      min-width: 250px;
    }

    .footer h2, .footer h3 {
      color: #fff;
      margin-bottom: 20px;
    }

    .footer-logo {
      display: block;
      margin: 0 auto;
      max-width: 150px;
      height: auto;
    }

    .footer p {
      line-height: 1.6;
      color: #ccc;
    }

    .social-links {
      list-style: none;
      padding: 0;
    }

    .social-links li {
      margin-bottom: 10px;
      color: #ccc;
    }

    .social-links i {
      margin-right: 10px;
    }

    hr {
      border: none;
      border-top: 1px solid #333;
      margin: 30px auto;
      width: 90%;
    }

    .footer i {
      color: #4da6ff;
    }

    .footer a {
      text-decoration: none;
      color: inherit;
    }

    .footer a:hover {
      color: #fff;
    }

    @media screen and (max-width: 768px) {
      .footer-container {
        flex-direction: column;
        align-items: center;
      }
    }
  </style>

  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h2>PC Master te brinda productos de calidad</h2>
        <img src="./assets/images/body.png" alt="PC Master Express Logo" class="footer-logo">
      </div>

      <div class="footer-section">
        <h3>Sobre Nosotros</h3>
        <p>Nuestro propósito es brindar productos y servicios de calidad, sin nada de rellenos</p>
        <p><i class="fas fa-phone-alt"></i> <strong>+593 996691773</strong></p>
      </div>

    <div class="footer-section">
  <h3>Redes Sociales</h3>
  <ul class="social-links">
    <li>
      <a href="https://www.facebook.com/moises.balon.77/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-facebook-f"></i> Facebook
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/moisesbalon18/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-instagram"></i> Instagram
      </a>
    </li>
    <li>
<a href="https://twitter.com/balon_moises" target="_blank" rel="noopener noreferrer">
  <i class="fa-brands fa-x-twitter"></i> X
</a>

    </li>
  </ul>
</div>


    <hr>
    <p class="copyright">Copyright 2025 | Ing. Moises Balón Malavé</p>
  </footer>
`;

document.body.appendChild(footer);
