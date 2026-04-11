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
