const Navigation = {
    render() {
        return `
            <nav>
                <div class="nav-content">
                    <div class="logo-container">
                        <div class="logo">regener<span>@</span>tor</div>
                        <div class="logo-subtitle">serwis • kupno • sprzedaż używanego sprzętu komputerowego</div>
                    </div>
                    <ul class="nav-links">
                        <li><a href="#home">Start</a></li>
                        <li><a href="#services">Usługi</a></li>
                        <li><a href="#contact">Kontakt</a></li>
                    </ul>
                </div>
            </nav>
            <main id="main"></main>
            <footer>
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>Kontakt</h3>
                        <p><i class="fas fa-phone"></i> 604 262 841</p>
                        <p><i class="fas fa-envelope"></i> regeneratorpl@gmail.com</p>
                    </div>
                    <div class="footer-section">
                        <h3>Godziny otwarcia</h3>
                        <p>Poniedziałek - Piątek: 9:00 - 17:00</p>
                        <p>Sobota: 9:00 - 13:00</p>
                    </div>
                    <div class="footer-section">
                        <h3>Obszar działania</h3>
                        <p>Łapanów • Trzciana • Gdów • Raciechowice</p>
                        <p>Grabie • Tarnawa • Krasne-Lasocice</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>© 2025 Regenerator - Wszystkie prawa zastrzeżone</p>
                </div>
            </footer>
        `;
    }
};const Loader = {
    render() {
        return `
            <div class="loader">
                <div class="loader-balls">
                    <div class="ball ball1"></div>
                    <div class="ball ball2"></div>
                    <div class="ball ball3"></div>
                    <div class="ball ball4"></div>
                </div>
            </div>
        `;
    }
};

const Routes = {
    home: `
        <section class="hero">
            <div class="main-header">
                <h1>25 lat doświadczenia</h1>
                <div class="contact-banner">
                    <div class="contact-item">
                        <h2>ZADZWOŃ</h2>
                        <div class="phone">604 262 841</div>
                    </div>
                    <div class="contact-item">
                        <h2>LUB NAPISZ !!!</h2>
                        <div class="email">regeneratorpl@gmail.com</div>
                    </div>
                </div>
            </div>
            
            <div class="features-list">
                <h2>Nasze usługi</h2>
                <ul>
                    <li><i class="fas fa-laptop"></i>Sprzedaż używanego sprzętu komputerowego</li>
                    <li><i class="fas fa-tools"></i>Montaż i modernizacja komputerów PC</li>
                    <li><i class="fas fa-print"></i>Naprawa drukarek</li>
                    <li><i class="fas fa-shield-alt"></i>Usuwanie wirusów</li>
                    <li><i class="fas fa-network-wired"></i>Konfiguracja sieci</li>
                    <li><i class="fas fa-video"></i>Archiwizacja VHS na DVD</li>
                </ul>
            </div>

            <div class="locations">
                <h3>Obszar działania</h3>
                <p>Łapanów • Trzciana • Gdów • Raciechowice • Grabie • Tarnawa • Krasne-Lasocice i okolice...</p>
            </div>
        </section>
    `,

    services: `
        <section class="services-section">
            <h2>Szczegółowy cennik usług</h2>
            <div class="services-grid">
                <div class="service-card">
                    <h3>Naprawa komputerów</h3>
                    <ul>
                        <li>Diagnostyka - od 50 zł</li>
                        <li>Czyszczenie - od 80 zł</li>
                        <li>Wymiana podzespołów - od 50 zł</li>
                    </ul>
                </div>
                <div class="service-card">
                    <h3>Usługi systemowe</h3>
                    <ul>
                        <li>Instalacja Windows - 120 zł</li>
                        <li>Usuwanie wirusów - od 100 zł</li>
                        <li>Konfiguracja sieci - od 80 zł</li>
                    </ul>
                </div>
                <div class="service-card">
                    <h3>Archiwizacja</h3>
                    <ul>
                        <li>VHS na DVD - od 30 zł</li>
                        <li>Backup danych - od 50 zł</li>
                        <li>Odzyskiwanie danych - od 100 zł</li>
                    </ul>
                </div>
            </div>
        </section>
    `,
      contact: `
          <section class="contact-section">
              <h2>Kontakt</h2>
              <div class="contact-info">
                  <p><i class="fas fa-phone"></i> 604 262 841</p>
                  <p><i class="fas fa-envelope"></i> regeneratorpl@gmail.com</p>
                  <p><i class="fas fa-clock"></i> Pon-Pt: 9:00 - 17:00</p>
                  <p><i class="fas fa-clock"></i> Sobota: 9:00 - 13:00</p>
              </div>
              <div class="social-buttons">
                  <a href="https://www.facebook.com/profile.php?id=100081201819564" target="_blank" class="social-btn facebook">
                      <i class="fab fa-facebook-f"></i> Facebook
                  </a>
                  <a href="https://wa.me/48604262841" target="_blank" class="social-btn whatsapp">
                      <i class="fab fa-whatsapp"></i> WhatsApp
                  </a>
              </div>
              <form class="contact-form">
                  <input type="text" placeholder="Imię i nazwisko" required>
                  <input type="email" placeholder="Email" required>
                  <input type="tel" placeholder="Telefon">
                  <textarea placeholder="Treść wiadomości" rows="5" required></textarea>
                  <button type="submit" class="btn">Wyślij wiadomość</button>
              </form>
          </section>
      `,
    offers: `
        <section class="offers-section">
            <h2>Gorące Oferty</h2>
            <div id="offers-container" class="offers-grid"></div>
            <div id="admin-panel" class="admin-panel">
                <button onclick="App.showLoginForm()" class="btn">Panel Admina</button>
            </div>
        </section>
    `
};
  const App = {
      offers: [],
      isAdmin: false,

      init() {
          document.body.insertAdjacentHTML('afterbegin', Loader.render());
          this.container = document.getElementById('app');
          this.setupNavigation();
          this.loadOffers();
          this.handleRoute();
          this.setupEventListeners();
      },

      setupNavigation() {
          this.container.insertAdjacentHTML('afterbegin', Navigation.render());
      },

      setupEventListeners() {
          window.addEventListener('hashchange', () => this.handleRoute());
          window.addEventListener('load', () => this.removeLoader());
      },

      handleRoute() {
          const hash = window.location.hash.slice(1) || 'home';
          const main = document.getElementById('main');
          main.innerHTML = Routes[hash] || Routes.home;
      },

      removeLoader() {
          const loader = document.querySelector('.loader');
          if (loader) {
              loader.style.opacity = '0';
              setTimeout(() => loader.remove(), 500);
          }
      },

      async loadOffers() {
          const response = await fetch('89.171.139.106:24030/api/offers');
          const data = await response.json();
          this.offers = data.offers;
          if (window.location.hash === '#offers') {
              this.renderOffers();
          }
      },

      renderOffers() {
          const container = document.getElementById('offers-container');
          if (container) {
              container.innerHTML = this.offers.map(offer => `
                  <div class="offer-card">
                      <img src="${offer.image}" alt="${offer.title}">
                      <h3>${offer.title}</h3>
                      <p>${offer.description}</p>
                      <div class="price">${offer.price} zł</div>
                      ${this.isAdmin ? 
                          `<button onclick="App.deleteOffer(${offer.id})" class="btn-delete">
                              <i class="fas fa-trash"></i> Usuń
                          </button>` 
                          : ''
                      }
                  </div>
              `).join('');
          }
      },

      showLoginForm() {
          const password = prompt('Podaj hasło administratora:');
          if (password === 'admin123') { // zmien tu pswrd neh :3
              this.isAdmin = true;
              this.renderOffers(); 
              this.showAdminPanel();
          }
      },

      showAdminPanel() {
          document.getElementById('admin-panel').innerHTML = `
              <div class="admin-form">
                  <h3>Dodaj nową ofertę</h3>
                  <input type="text" id="title" placeholder="Tytuł">
                  <input type="text" id="description" placeholder="Opis">
                  <input type="number" id="price" placeholder="Cena">
                  <input type="text" id="image" placeholder="URL zdjęcia">
                  <button onclick="App.addOffer()" class="btn">Dodaj ofertę</button>
              </div>
          `;
      },

      async addOffer() {
          const newOffer = {
              title: document.getElementById('title').value,
              description: document.getElementById('description').value,
              price: document.getElementById('price').value,
              image: document.getElementById('image').value
          };

          const response = await fetch('89.171.139.106:24030/api/offers', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(newOffer)
          });

          if (response.ok) {
              const savedOffer = await response.json();
              this.offers.push(savedOffer);
              this.renderOffers();
              ['title', 'description', 'price', 'image'].forEach(id => 
                  document.getElementById(id).value = ''
              );
          }
      },
      async deleteOffer(id) {
        const response = await fetch(`89.171.139.106:24030/api/offers/${id}`, {
            method: 'DELETE'
        });
    
        if (response.ok) {
            this.offers = this.offers.filter(offer => offer.id !== id);
            this.renderOffers();
        }
    }  };
 document.addEventListener('DOMContentLoaded', () => App.init());
