//mencionando que nuestro proyecto va a usar express
const express= require('express');
//creando nuestro objeto central (global) que se utilizará en nuestro proyecto (rutas, funciones, configuraciones)

const app= express();
//indicamos que nuestra api tiene un middleware para interpretar los datos que vienen en formato JSON 
// (body)
app.use(express.json());

//simulando una base de datos de estudiantes (arreglo de objetos)

const estudiantes = [
    { id: 1, nombre: "Ana García", edad: 18, correo: "ana.garcia@email.com" },
    { id: 2, nombre: "Carlos López", edad: 17, correo: "carlos.lopez@email.com" },
    { id: 3, nombre: "María Pérez", edad: 18, correo: "maria.p@email.com" }
]

//por defecto el puerto de express es el 3000
//servidor=localhost:3000
app.listen(3000,()=>{ 
    console.log("Hola, estes es el servidor localhost:3000")
})
//comando para ejecutar el servidos (archivo)-> node index.js

//creando enrutamiento para  nuestra API

//creando la ruta principal (peticion HTTP: GET, POST, PUT, DELETE, PATCH) 
/**
 * (PRIMER PARAMETRO) req= request(se utiliza cuando necesitamos por ejemplo datos del usuario (body), headers, parametros)
 * (Segundo parametro) res=response (lo que se devuelve al cliente, por ejemplo un mensaje, un objeto, un array, etc)
 */
//Mi primer endpoint
app.get('/',(req, res)=>{
    //CODIGO DE LA FUNCION

    res.send("Hola Mundo, Bienvenidos a mi API Estudiantes")
}) 

//ruta para obtener todos los estudiantes
app.get('/estudiantes',(req, res)=>{
    //codigo
    res.status(200).json(estudiantes)
})

//ruta para buscar un estudiante por su id
 //devolvemos el estudiante con el método find() la ruta lleva parametro(:) 
app.get('/estudiantes/:estudianteId',(req, res)=>{
    //capturando el valor del parametro
    
    const id = Number(req.params.estudianteId);
    const estudiante = estudiantes.find(estudiante => estudiante.id === id);
    //validar si el estudiante No existe
    if (!encontrar_estudiante) {
        return res.status(404).json({ error: "Estudiante no encontrado" })
    }
    res.status(200).json(encontrar_estudiante)
})

//ruta para crear un nuevo estudiante
app.post('/estudiantes',(req, res)=>{
    //codigo
    const { nombre, edad, correo } = req.body //obtenemos los datos del cuerpo de la solicitud
    const nuevoEstudiante = { id: estudiantes.length + 1, nombre, edad, correo } //creamos un nuevo estudiante
    estudiantes.push(nuevoEstudiante) //agregamos el nuevo estudiante al arreglo
    res.status(201).json(nuevoEstudiante) //devolvemos el nuevo estudiante con un código de estado 201 (creado)
})

//ruta para actualizar un estudiante(correo)
app.put('/estudiantes/:id',(req, res)=>{
    //codigo
    const id = parseInt(req.params.id) //obtenemos el id de la ruta y lo convertimos a numero
    const estudiante = estudiantes.find(est => est.id === id) //buscamos el estudiante por su id
    if (estudiante) {
        const { nombre, edad, correo } = req.body //obtenemos los datos del cuerpo de la solicitud
        estudiante.nombre = nombre
        estudiante.edad = edad
        estudiante.correo = correo
        res.status(200).json(estudiante)
    } else {
        res.status(404).json({ message: "Estudiante no encontrado" })
    }
})


// ruta para modificar totalmente un estudiante (PATCH)
    app.patch('/estudiantes/:id', (req, res) => {
  const { id } = req.params;
  const cambios = req.body; // Lo que el cliente quiere cambiar

  const usuarioIndex = usuarios.findIndex(u => u.id === parseInt(id));

  if (usuarioIndex !== -1) {
    // Sobrescribe solo las propiedades enviadas por el cliente
    usuarios[usuarioIndex] = { ...usuarios[usuarioIndex], ...cambios };
    res.json({ mensaje: "Usuario actualizado", usuario: usuarios[usuarioIndex] });
  } else {
    res.status(404).json({ error: "Usuario no encontrado" });
  }
});



// ruta para eliminar un estudiante
app.delete('/estudiantes/:id',(req, res)=>{
    //codigo
    const id = parseInt(req.params.id) //obtenemos el id de la ruta y lo convertimos a numero
    const estudiante = estudiantes.find(est => est.id === id) //buscamos el estudiante por su id
    if (estudiante) {
        estudiantes.splice(estudiantes.indexOf(estudiante), 1) //eliminamos el estudiante del arreglo
        res.status(200).json({ message: "Estudiante eliminado" })
    } else {
        res.status(404).json({ message: "Estudiante no encontrado" })
    }
})
