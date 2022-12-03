let dbm = [{
        name: "Português",
        id: "por",
        nota1: null,
        nota2: null,
        nota3: null,
    }, {
        name: "Matematica",
        id: "mat",
        nota1: null,
        nota2: null,
        nota3: null,
    }, {
        name: "Quimica",
        id: "qui",
        nota1: null,
        nota2: null,
        nota3: null,
    },
    {
        name: "Biologia",
        id: "bio",
        nota1: null,
        nota2: null,
        nota3: null,
    },
    {
        name: "Arte",
        id: "art",
        nota1: null,
        nota2: null,
        nota3: null,
    },
    {
        name: "Penssamento Computacional",
        id: "pc",
        nota1: null,
        nota2: null,
        nota3: null,
    },
    {
        name: "Geografia",
        id: "geo",
        nota1: null,
        nota2: null,
        nota3: null,
    },
    {
        name: "História",
        id: "his",
        nota1: null,
        nota2: null,
        nota3: null,
    },
    {
        name: "Filosofia",
        id: "fil",
        nota1: null,
        nota2: null,
        nota3: null,
    },
    {
        name: "Fisica",
        id: "fis",
        nota1: null,
        nota2: null,
        nota3: null,
    },
    {
        name: "Inguês",
        id: "ing",
        nota1: null,
        nota2: null,
        nota3: null,
    },
    {
        name: "Educação Financeira",
        id: "edfin",
        nota1: null,
        nota2: null,
        nota3: null,
    },
    {
        name: "Educação Fisica",
        id: "edf",
        nota1: null,
        nota2: null,
        nota3: null,
    },
    {
        name: "Projeto de Vida",
        id: "pdv",
        nota1: null,
        nota2: null,
        nota3: null,
    }
]

function gntMateria(mtr) {
    let e = "<span class='materia' id='" + mtr.id + "'><h2>" + mtr.name + "</h2><div><p>1º Trimestre: </p><input class='trimestre' type='number' /></div><div><p>2º Trimestre: </p><input class='trimestre' type='number' /></div><div><p>3º Trimestre: </p><input class='trimestre' type='number' /></div></span>";
    qs("#ativiades").innerHTML += e;
}

function main() {
    dbm.forEach((e) => { gntMateria(e) });
}

function setMat(e) {
    for (let i = 2; i < 5; i++) {
        if (qs("#" + e.id + ">div:nth-child(" + i + ")>input").value == "") {
            e["nota" + (i - 1)] = 0;
        } else {
            e["nota" + (i - 1)] = qs("#" + e.id + ">div:nth-child(" + i + ")>input").value
        }
    }
}

qs("#calc").addEventListener("click", event => {
    dbm.forEach((e) => { setMat(e); })
        //console.log(JSON.stringify(dbm))
    window.open("result.html?db=" + JSON.stringify(dbm), "_top")
})

//window.onbeforeunload = function() {return "Os dados do formulário serão perdidos.";}

main()