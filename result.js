let dbm = null;

function applyResult() {
    const urlParams = new URLSearchParams(window.location.search);
    dbm = JSON.parse(urlParams.get('db'));

    //Media Geral

    let MG_notas = 0;
    let MG_total = 0;

    for (let i = 0; i < dbm.length; i++) {
        MG_notas += Number(String(dbm[i].nota1).replaceAll(",", "."))
        MG_notas += Number(String(dbm[i].nota2).replaceAll(",", "."))
        MG_notas += Number(String(dbm[i].nota3).replaceAll(",", "."))
        MG_total += 3;
    }
    qs("#mdGr").innerHTML += " <b>" + String(MG_notas / MG_total).slice(0, 4) + "</b>";
    //Media Geral de Tri
    for (let t = 1; t < 4; t++) {
        let tr_notas = 0;
        let tr_total = 0;
        for (let ti = 0; ti < dbm.length; ti++) {
            tr_notas += Number(String(dbm[ti]["nota" + t]).replaceAll(",", "."))
            tr_total += 1;
        }
        qs("#tr" + t).innerHTML += " <b>" + String(tr_notas / tr_total).slice(0, 4) + "</b>";
    }

    //Media de Materia
    for (let mt = 0; mt < dbm.length; mt++) {
        let mt_notas = 0;
        let mt_total = 3;
        mt_notas += Number(String(dbm[mt].nota1).replaceAll(",", "."))
        mt_notas += Number(String(dbm[mt].nota2).replaceAll(",", "."))
        mt_notas += Number(String(dbm[mt].nota3).replaceAll(",", "."))
        qs("#ativiades").innerHTML += "<span class='materia'><h2>" + dbm[mt].name + "</h2><div><p>Média de Trimestres: <b>" + String(mt_notas / mt_total).slice(0, 4) + "</b></p></div></span>"
    }
}

applyResult()