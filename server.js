const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Base de datos simulada
const db = {
    estudiantes: [
        { id: 1, nombre: "Ana", apellido: "Gomez", correo: "ana@gmail.com", carrera: "Ingeniería", calificaciones: [95, 85, 90] },
        { id: 2, nombre: "Luis", apellido: "Perez", correo: "luis@gmail.com", carrera: "Medicina", calificaciones: [78, 88, 82] }
    ],
    cursos: [
        { id: 1, nombre: "Matemáticas", descripcion: "Curso de álgebra y cálculo", codigo: "MAT101", inscritos: [1, 2] },
        { id: 2, nombre: "Física", descripcion: "Curso de física clásica", codigo: "FIS101", inscritos: [1] }
    ],
    profesores: [
        { id: 1, nombre: "Dr. Juan", apellido: "Martinez", correo: "juan.martinez@gmail.com", nombremat: "Matemáticas" },
        { id: 2, nombre: "Dra. Laura", apellido: "Fernandez", correo: "laura.fernandez@gmail.com", nombremat: "Física" }
    ],
    departamentos: [
        { id: 1, nombredep: "Ciencias Exactas", nombrerec: "Carlos Reyes", correodep: "ciencias@universidad.com" },
        { id: 2, nombredep: "Salud", nombrerec: "Sofia Lopez", correodep: "salud@universidad.com" }
    ],
    usuarios: [
        { id: 1, usuario: "admin", password: "admin123" },
        { id: 2, usuario: "user1", password: "user123" }
    ],
    notificaciones: []
};

// Middleware de autenticación
let loggedInUser = null;

function authMiddleware(req, res, next) {
    if (loggedInUser) {
        next();
    } else {
        res.status(403).json({ message: "Acceso denegado. Inicie sesión." });
    }
}

// Generar ID único
function generateId() {
    return Math.floor(Math.random() * 10000);
}

// Autenticación
app.post('/login', (req, res) => {
    const { usuario, password } = req.body;
    const user = db.usuarios.find(u => u.usuario === usuario && u.password === password);
    if (user) {
        loggedInUser = user;
        res.json({ message: "Autenticación exitosa" });
    } else {
        res.status(401).json({ message: "Credenciales incorrectas" });
    }
});

app.post('/logout', (req, res) => {
    loggedInUser = null;
    res.json({ message: "Sesión cerrada" });
});

// CRUD Estudiantes
app.get('/api/estudiantes', authMiddleware, (req, res) => res.json(db.estudiantes));

app.get('/api/estudiantes/:id', authMiddleware, (req, res) => {
    const estudiante = db.estudiantes.find(e => e.id === parseInt(req.params.id));
    estudiante ? res.json(estudiante) : res.status(404).json({ message: "Estudiante no encontrado" });
});

app.post('/api/estudiantes', authMiddleware, (req, res) => {
    const { nombre, apellido, correo, carrera } = req.body;
    const nuevoEstudiante = { id: generateId(), nombre, apellido, correo, carrera, calificaciones: [] };
    db.estudiantes.push(nuevoEstudiante);
    res.status(201).json({ message: "Estudiante creado", estudiante: nuevoEstudiante });
});

app.put('/api/estudiantes/:id', authMiddleware, (req, res) => {
    const estudiante = db.estudiantes.find(e => e.id === parseInt(req.params.id));
    if (estudiante) {
        Object.assign(estudiante, req.body);
        res.json({ message: "Estudiante actualizado", estudiante });
    } else {
        res.status(404).json({ message: "Estudiante no encontrado" });
    }
});

app.delete('/api/estudiantes/:id', authMiddleware, (req, res) => {
    const index = db.estudiantes.findIndex(e => e.id === parseInt(req.params.id));
    index >= 0 ? res.json(db.estudiantes.splice(index, 1)) : res.status(404).json({ message: "Estudiante no encontrado" });
});

// CRUD Cursos
app.get('/api/cursos', authMiddleware, (req, res) => res.json(db.cursos));

app.get('/api/cursos/:id', authMiddleware, (req, res) => {
    const curso = db.cursos.find(c => c.id === parseInt(req.params.id));
    curso ? res.json(curso) : res.status(404).json({ message: "Curso no encontrado" });
});

app.post('/api/cursos', authMiddleware, (req, res) => {
    const { nombre, descripcion, codigo } = req.body;
    const nuevoCurso = { id: generateId(), nombre, descripcion, codigo, inscritos: [] };
    db.cursos.push(nuevoCurso);
    res.status(201).json({ message: "Curso creado", curso: nuevoCurso });
});

app.put('/api/cursos/:id', authMiddleware, (req, res) => {
    const curso = db.cursos.find(c => c.id === parseInt(req.params.id));
    if (curso) {
        Object.assign(curso, req.body);
        res.json({ message: "Curso actualizado", curso });
    } else {
        res.status(404).json({ message: "Curso no encontrado" });
    }
});

app.delete('/api/cursos/:id', authMiddleware, (req, res) => {
    const index = db.cursos.findIndex(c => c.id === parseInt(req.params.id));
    index >= 0 ? res.json(db.cursos.splice(index, 1)) : res.status(404).json({ message: "Curso no encontrado" });
});

// CRUD Profesores
app.get('/api/profesores', authMiddleware, (req, res) => res.json(db.profesores));

app.get('/api/profesores/:id', authMiddleware, (req, res) => {
    const profesor = db.profesores.find(p => p.id === parseInt(req.params.id));
    profesor ? res.json(profesor) : res.status(404).json({ message: "Profesor no encontrado" });
});

app.post('/api/profesores', authMiddleware, (req, res) => {
    const { nombre, apellido, correo, nombremat } = req.body;
    const nuevoProfesor = { id: generateId(), nombre, apellido, correo, nombremat };
    db.profesores.push(nuevoProfesor);
    res.status(201).json({ message: "Profesor creado", profesor: nuevoProfesor });
});

app.put('/api/profesores/:id', authMiddleware, (req, res) => {
    const profesor = db.profesores.find(p => p.id === parseInt(req.params.id));
    if (profesor) {
        Object.assign(profesor, req.body);
        res.json({ message: "Profesor actualizado", profesor });
    } else {
        res.status(404).json({ message: "Profesor no encontrado" });
    }
});

app.delete('/api/profesores/:id', authMiddleware, (req, res) => {
    const index = db.profesores.findIndex(p => p.id === parseInt(req.params.id));
    index >= 0 ? res.json(db.profesores.splice(index, 1)) : res.status(404).json({ message: "Profesor no encontrado" });
});

// CRUD Departamentos
app.get('/api/departamentos', authMiddleware, (req, res) => res.json(db.departamentos));

app.get('/api/departamentos/:id', authMiddleware, (req, res) => {
    const departamento = db.departamentos.find(d => d.id === parseInt(req.params.id));
    departamento ? res.json(departamento) : res.status(404).json({ message: "Departamento no encontrado" });
});

app.post('/api/departamentos', authMiddleware, (req, res) => {
    const { nombredep, nombrerec, correodep } = req.body;
    const nuevoDepartamento = { id: generateId(), nombredep, nombrerec, correodep };
    db.departamentos.push(nuevoDepartamento);
    res.status(201).json({ message: "Departamento creado", departamento: nuevoDepartamento });
});

app.put('/api/departamentos/:id', authMiddleware, (req, res) => {
    const departamento = db.departamentos.find(d => d.id === parseInt(req.params.id));
    if (departamento) {
        Object.assign(departamento, req.body);
        res.json({ message: "Departamento actualizado", departamento });
    } else {
        res.status(404).json({ message: "Departamento no encontrado" });
    }
});

app.delete('/api/departamentos/:id', authMiddleware, (req, res) => {
    const index = db.departamentos.findIndex(d => d.id === parseInt(req.params.id));
    index >= 0 ? res.json(db.departamentos.splice(index, 1)) : res.status(404).json({ message: "Departamento no encontrado" });
});

// Notificaciones y Reportes
app.get('/notificaciones', authMiddleware, (req, res) => res.json(db.notificaciones));

app.get('/notificaciones/estudiante/:id', authMiddleware, (req, res) => {
    const notificaciones = db.notificaciones.filter(n => n.destinatario === "estudiante" && n.id === parseInt(req.params.id));
    res.json(notificaciones);
});

app.get('/notificaciones/curso/:id', authMiddleware, (req, res) => {
    const notificaciones = db.notificaciones.filter(n => n.destinatario === "curso" && n.id === parseInt(req.params.id));
    res.json(notificaciones);
});

// Reportes
app.get('/reportes/inscripcion', authMiddleware, (req, res) => {
    const totalEstudiantes = db.estudiantes.length;
    const totalCursos = db.cursos.length;
    const reporte = {
        totalEstudiantes,
        totalCursos,
        estudiantes: db.estudiantes.map(est => ({
            nombre: est.nombre,
            apellido: est.apellido,
            carrera: est.carrera,
            calificaciones: est.calificaciones
        })),
        cursos: db.cursos.map(c => ({
            nombre: c.nombre,
            inscritos: c.inscritos.length
        }))
    };
    res.json(reporte);
});

app.get('/reportes/calificaciones', authMiddleware, (req, res) => {
    const calificaciones = db.estudiantes.map(est => ({
        nombre: est.nombre,
        apellido: est.apellido,
        promedio: (est.calificaciones.reduce((a, b) => a + b, 0) / est.calificaciones.length) || 0
    }));
    res.json({ calificaciones });
});

app.get('/reportes/financiero', authMiddleware, (req, res) => {
    // Simulación de reporte financiero
    const totalInscripciones = db.cursos.reduce((acc, curso) => acc + curso.inscritos.length, 0);
    const totalIngreso = totalInscripciones * 200; // Suponiendo un costo de 200 por inscripción
    const reporte = {
        totalInscripciones,
        totalIngreso,
        detalles: db.cursos.map(curso => ({
            curso: curso.nombre,
            inscritos: curso.inscritos.length,
            ingreso: curso.inscritos.length * 200 // Costo por inscripción
        }))
    };
    res.json(reporte);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});