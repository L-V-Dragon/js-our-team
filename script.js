let membro = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
    }
]


for (let persona of membro) {
    stampaPersona(persona);
    document.getElementById("cardMembro").innerHTML +=
    `<div class="col-12 col-lg-4 col-md-6">
    <img id="foto" src="./img/${persona.foto}" class="card-img-top" alt="">
    <div id="nome" class="card-body fw-bolder pt-3 pb-0 fs-5">${persona.nome}</div>
    <div id="ruolo" class="card-body fst-italic pt-0 pb-4 fs-6">${persona.ruolo}</div>
    </div>
    `
}


function stampaPersona(membro) {

    console.log(
        `
    --------------Membro ----------------
        Nome: ${membro.nome}
        Ruolo: ${membro.ruolo}
        Foto: ${membro.foto}
    --------------------------------------
    `
    )
}