const materiasHTML = document.querySelector(".materias");


const materias = [
    {nombre: "Fisica I",
    nota: 7
},{
    nombre: "Calculo III",
    nota: 8
},{
    nombre: "Bases de Datos II",
    nota: 6
},{
    nombre: "Programación IV",
    nota: 8
},{
    nombre: " Análisis Matemático V",
    nota: 9
}
]


const obtenerMateria = (id)=>{
    return new Promise((resolve,reject)=>{
        materia = materias[id];
        if (materia == undefined) reject("La materia no Existe");
        else setTimeout(()=> {resolve(materia)},Math.random()*1400);
    })
}

const devolverMaterias = async ()=>{
    let materia = [];
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i);
        let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;
            materiasHTML.innerHTML += newHTMLCode;
    }
}
devolverMaterias();