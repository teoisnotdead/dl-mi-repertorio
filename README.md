# Modulo

6 - Node con Express

## Descripción
Se crea un proyecto de Node.js con Express, el cual permite realizar operaciones CRUD sobre un listado de canciones.

## Instalación
Para levantar el proyecto, se debe ejecutar los sgtes comandos:
```
npm install
npm run dev
```

## Endopoints

### `GET /api/canciones`
**Descripción:** Retorna un listado de canciones.

**Respuesta:**
```json
[
  {
    "id": 8000,
    "titulo": "Godfather Flows",
    "artista": "Jay Francis",
    "tono": "Em"
  },
  {
    "id": 4720,
    "titulo": "Till I Collapse",
    "artista": "Eminem",
    "tono": "Am"
  },
  {
    "id": 362,
    "titulo": "Still D.R.E",
    "artista": "Dr Dre, Snoop Dog",
    "tono": "C"
  },
  {
    "id": 5361,
    "titulo": "IN DA CLUB",
    "artista": "50 Cent",
    "tono": "Em"
  }
]
```

### `POST /api/canciones/:id`
Crea una nueva canción

**Body:**
```json
{
  "titulo": "Godfather Flows",
  "artista": "Jay Francis",
  "tono": "Em"
}
```

### `PUT /api/canciones/:id`
Actualiza una canción

**Body:**
```json
{
  "titulo": "Godfather Flows",
  "artista": "Jay Francis",
  "tono": "Em"
}
```

### `DELETE /api/canciones/:id`
Elimina una canción

