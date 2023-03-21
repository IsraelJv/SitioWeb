// Cargar datos de alumnos.json
fetch('alumnos.json')
    .then(response => response.json())
    .then(data => {
        const cardsContainer = document.querySelector('.cards-container');
        data.estudiantes.forEach(estudiante => {
            const card = crearCardEstudiante(estudiante);
            cardsContainer.appendChild(card);
        });
    });

function crearCardEstudiante(estudiante) {
    const card = document.createElement('div');
    card.className = 'card';

    const cardLeft = document.createElement('div');
    cardLeft.className = 'card-left';

    const img = document.createElement('img');
    img.src = estudiante.imagen;
    img.alt = estudiante.nombre;

    const h3 = document.createElement('h3');
    h3.textContent = estudiante.nombre;

    cardLeft.appendChild(img);
    cardLeft.appendChild(h3);

    const cardRight = document.createElement('div');
    cardRight.className = 'card-right';

    const table = document.createElement('table');

    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');
    const thTitulo = document.createElement('th');
    thTitulo.textContent = 'Título del trabajo';
    const thArchivo = document.createElement('th');
    thArchivo.textContent = 'Archivo';
    trHead.appendChild(thTitulo);
    trHead.appendChild(thArchivo);
    thead.appendChild(trHead);

    const tbody = document.createElement('tbody');

    estudiante.trabajos.forEach(trabajo => {
        const tr = document.createElement('tr');
        const tdTitulo = document.createElement('td');
        tdTitulo.textContent = trabajo.titulo;
        const tdArchivo = document.createElement('td');
        const button = document.createElement('button');
        button.textContent = 'Acceder';
        button.onclick = () => {
            window.location.href = trabajo.archivo;
        };
        tdArchivo.appendChild(button);
        tr.appendChild(tdTitulo);
        tr.appendChild(tdArchivo);
        tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    cardRight.appendChild(table);

    card.appendChild(cardLeft);
    card.appendChild(cardRight);

    return card;
}
