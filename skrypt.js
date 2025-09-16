//Funkcja do paska postępu
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
//Funkcja do zmiany języka
function chgLang(language) {
  // Dodanie klasy rozmycia do body
  const main = document.querySelector('main');
  const header = document.querySelector('header');
  main.classList.add('blur');
  header.classList.add('blur');
  
  

  // Wyświetlenie nakładki ładowania
  const overlay = document.getElementById('loadingOverlay');
  overlay.style.display = 'flex';

  // Pasek ładowania
  const progressBar = document.getElementById('loadingProgress');
  progressBar.style.width = '0'; // Ustawienie na 0 na początku

  // Symulacja ładowania (2 sekundy)
  setTimeout(() => {
      // Rozpoczęcie animacji (zmiana szerokości paska)
      progressBar.style.transition = 'width 1.1s ease-out'; // Dodajemy animację
      progressBar.style.width = '100%'; // Pasek ładowania do 100%

      // Zmiana języka po 2 sekundach
      const elementsPL = document.querySelectorAll('.pl');
      const elementsENG = document.querySelectorAll('.eng');

      if (language == 'pl') {
          elementsPL.forEach(el => el.style.display = 'block');
          elementsENG.forEach(el => el.style.display = 'none');
      } else if (language == 'eng') {
          elementsPL.forEach(el => el.style.display = 'none');
          elementsENG.forEach(el => el.style.display = 'block');
      }

      // Ukrycie nakładki i usunięcie rozmycia po zakończeniu animacji
      setTimeout(() => {
          
          main.classList.remove('blur');
          header.classList.remove('blur');
          overlay.style.display = 'none';
          // Reset paska ładowania po zakończeniu animacji
          progressBar.style.width = '0';
      }, 1100); // Resetowanie po 2 sekundach
  }, 100); // Krótkie opóźnienie przed rozpoczęciem animacji
}


var modal = document.getElementById("myModal");
function showPic(a,b){
  
  var modalImg = document.getElementById("img01");
  modal.style.display = "block";
  modalImg.src = a;
}

// Get the <span> element that closes the modal
var span = document.getElementById("closerPic");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


