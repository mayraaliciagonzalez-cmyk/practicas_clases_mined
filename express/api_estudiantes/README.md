# 🎓 API REST — Administración de Estudiantes

API RESTful construida con **Node.js** y **Express.js** para gestionar una lista de estudiantes almacenada en memoria (array de JavaScript). Responde a peticiones HTTP con formato JSON y códigos de estado apropiados.

---

## 📋 Tabla de Contenidos

- [Tecnologías](#tecnologías)
- [Requisitos previos](#requisitos-previos)
- [Instalación y ejecución](#instalación-y-ejecución)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Endpoints disponibles](#endpoints-disponibles)
- [Ejemplos de uso](#ejemplos-de-uso)
- [Notas importantes](#notas-importantes)

---

## 🛠 Tecnologías

| Tecnología | Versión  |
|------------|----------|
| Node.js    | ≥ 18.x   |
| Express.js | ^5.2.1   |

---

## ✅ Requisitos previos

Tener instalado **Node.js** en tu máquina. Podés verificarlo con:

```bash
node -v
npm -v
```

---

## 🚀 Instalación y ejecución

1. **Cloná o descargá** el repositorio en tu máquina local.

2. **Instalá las dependencias:**

```bash
npm install
```

3. **Ejecutá el servidor:**

```bash
node index.js
```

4. El servidor estará corriendo en:

```
http://localhost:3000
```

---

## 📁 Estructura del proyecto

```
api_estudiantes/
├── index.js          # Archivo principal del servidor
├── package.json      # Configuración del proyecto y dependencias
└── README.md         # Documentación del proyecto
```

---

## 🔗 Endpoints disponibles

| Método   | Ruta                          | Descripción                           |
|----------|-------------------------------|---------------------------------------|
| `GET`    | `/`                           | Bienvenida a la API                   |
| `GET`    | `/estudiantes`                | Obtiene todos los estudiantes         |
| `GET`    | `/estudiantes/:estudianteId`  | Obtiene un estudiante por su ID       |
| `POST`   | `/estudiantes`                | Registra un nuevo estudiante          |
| `PUT`    | `/estudiantes/:id`            | Actualiza todos los datos de un estudiante |
| `PATCH`  | `/estudiantes/:estudianteId`  | Actualiza únicamente el correo        |
| `DELETE` | `/estudiantes/:id`            | Elimina un estudiante                 |

---

## 📌 Ejemplos de uso

### 🔵 GET — Obtener todos los estudiantes

**Request:**
```
GET http://localhost:3000/estudiantes
```

**Response `200 OK`:**
```json
[
  { "id": 1, "nombre": "Ana García", "edad": 18, "correo": "ana.garcia@email.com" },
  { "id": 2, "nombre": "Carlos López", "edad": 17, "correo": "carlos.lopez@email.com" }
]
```

---

### 🔵 GET — Obtener estudiante por ID

**Request:**
```
GET http://localhost:3000/estudiantes/1
```

**Response `200 OK`:**
```json
{ "id": 1, "nombre": "Ana García", "edad": 18, "correo": "ana.garcia@email.com" }
```

**Response `404 Not Found`:**
```json
{ "error": "Estudiante no encontrado" }
```

---

### 🟢 POST — Registrar un nuevo estudiante

**Request:**
```
POST http://localhost:3000/estudiantes
Content-Type: application/json
```

**Body:**
```json
{
  "nombre": "Laura Martínez",
  "edad": 20,
  "correo": "laura.martinez@email.com"
}
```

**Response `201 Created`:**
```json
{
  "message": "Registrado exitosamente",
  "estudiante": {
    "id": 5,
    "nombre": "Laura Martínez",
    "edad": 20,
    "correo": "laura.martinez@email.com"
  }
}
```

---

### 🟡 PUT — Actualizar todos los datos de un estudiante

**Request:**
```
PUT http://localhost:3000/estudiantes/2
Content-Type: application/json
```

**Body:**
```json
{
  "nombre": "Carlos López Ramos",
  "edad": 18,
  "correo": "carlos.nuevo@email.com"
}
```

**Response `200 OK`:**
```json
{ "id": 2, "nombre": "Carlos López Ramos", "edad": 18, "correo": "carlos.nuevo@email.com" }
```

**Response `404 Not Found`:**
```json
{ "message": "Estudiante no encontrado" }
```

---

### 🟠 PATCH — Actualizar solo el correo de un estudiante

**Request:**
```
PATCH http://localhost:3000/estudiantes/3
Content-Type: application/json
```

**Body:**
```json
{
  "nuevo_correo": "maria.actualizado@email.com"
}
```

**Response `200 OK`:**
```json
{
  "message": "correo actualizado exitosamente",
  "estudiante": {
    "id": 3,
    "nombre": "María Pérez",
    "edad": 18,
    "correo": "maria.actualizado@email.com"
  }
}
```

---

### 🔴 DELETE — Eliminar un estudiante

**Request:**
```
DELETE http://localhost:3000/estudiantes/4
```

**Response `200 OK`:**
```json
{ "message": "Estudiante eliminado" }
```

**Response `404 Not Found`:**
```json
{ "message": "Estudiante no encontrado" }
```

---

## ⚠️ Notas importantes

- Los datos se almacenan **en memoria** (array de JavaScript). Al reiniciar el servidor, los cambios se pierden y se vuelve a los datos iniciales.
- No se utiliza base de datos; este proyecto es ideal para aprender los fundamentos de una API REST.
- Para probar los endpoints podés usar herramientas como [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/) o la extensión **Thunder Client** de VS Code.
