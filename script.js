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

    document.getElementById("membroStamp").innerHTML += '<p>' + `
-------------- Membro ----------------
    Nome: ${persona.nome}
    Ruolo: ${persona.ruolo}
    Foto: ${persona.foto}
--------------------------------------

        ` + '</p>';
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





/*for (let persona of membro){
    document.getElementById("cardMembro").innerHTML +=
    `<div class="col-12 col-lg-3 col-md-5 card mx-4 my-4 px-0">
    <img id="foto" scr=".img/${persona.foto}" class="card-img-top" alt="">
    <div id="nome" class="card-body fw-bold pt-4 pb-0 fs-5 text-muted">${persona.nome}</div>
    <div id="ruolo" class="card-body fw-lighter pt-0 pb-4 fs-6 text-muted">${persona.ruolo}</div>
    </div>
    `
}*/