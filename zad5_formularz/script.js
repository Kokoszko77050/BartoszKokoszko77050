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

function PokazUkryj(sectionId) {
    const section = document.getElementById(sectionId);

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

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