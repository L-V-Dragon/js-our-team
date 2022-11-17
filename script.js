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