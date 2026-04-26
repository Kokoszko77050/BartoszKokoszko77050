// zmiana motywu
let AktywnyMotyw = "red";
function ZmienMotyw77050() {
    const LinkDoMotywu = document.getElementById("stylesheet");

    if (AktywnyMotyw === "red") {
        LinkDoMotywu.href = "green.css";
        AktywnyMotyw = "green";
    } else {
        LinkDoMotywu.href = "red.css";
        AktywnyMotyw = "red";
    }
}

// pokazanie/ukrycie sekcji
function PokazUkryj77050(sectionId) {
    const section = document.getElementById(sectionId);

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// walidacja danych z formularza
document.getElementById("Formularz").addEventListener("submit", function(e) {
  e.preventDefault();

  const imie = document.getElementById("imie").value.trim();
  const nazwisko = document.getElementById("nazwisko").value.trim();
  const email = document.getElementById("email").value.trim();

  const imieError = document.getElementById("imieError");
  const nazwiskoError = document.getElementById("nazwiskoError");
  const emailError = document.getElementById("emailError");
  const sukces = document.getElementById("poprawneDane");

  imieError.textContent = "";
  nazwiskoError.textContent = "";
  emailError.textContent = "";
  sukces.textContent = "";

  const imieRegex = /^[A-Za-zÀ-ž]+$/;
  const nazwiskoRegex = /^[A-Za-zÀ-ž]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let czyPoprawne = true;

  if (!imie) {
    imieError.textContent = "Podaj imię.";
    czyPoprawne = false;
  } else if (!imieRegex.test(imie)) {
    imieError.textContent = "Imię może zawierać tylko litery.";
    czyPoprawne = false;
  }

  if (!nazwisko) {
    nazwiskoError.textContent = "Podaj nazwisko.";
    czyPoprawne = false;
  } else if (!nazwiskoRegex.test(nazwisko)) {
    nazwiskoError.textContent = "Nazwisko może zawierać tylko litery.";
    czyPoprawne = false;
  }

  if (!email) {
    emailError.textContent = "Podaj email.";
    czyPoprawne = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Podaj poprawny adres email.";
    czyPoprawne = false;
  }

  if (czyPoprawne) {
    sukces.textContent = "Formularz został poprawnie wypełniony!";
  }
})

// pobranie danych z JSON i wyświetlenie ich na stronie
async function WczytajDane(file) {
  try {
    let myObject = await fetch(file);
     if (!myObject.ok) {
      throw new Error(`Status: ${myObject.status}`);
    }
    let myText = await myObject.json();

    const ListaUmiejetnosci = document.getElementById('ListaUmiejetnosci');
    const ListaProjekty = document.getElementById('ListaProjekty');

    myText.Umiejetnosci.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ListaUmiejetnosci.appendChild(li);
    });

    myText.Projekty.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ListaProjekty.appendChild(li);
    });

  } catch (error) {
    console.error('Error:', error);
  }
}

WczytajDane('data.json');
