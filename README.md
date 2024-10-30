# Sistema de Gestión Universitaria

Este proyecto es una API RESTful para gestionar una universidad, que permite la administración de estudiantes, cursos, profesores, departamentos, notificaciones y reportes. La aplicación también incluye funcionalidades de autenticación de usuario.

## Estructura del Proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Horacio-Retorta/Horacio-Retorta


## Accede al directorio del proyecto:
    bash
    cd sistema-de-gestion-universitaria


## Instala las dependencias:
    bash
    npm install


## Inicia el servidor:
    bash
    npm start

## Rutas de la API
## Estudiantes
    GET /api/estudiantes - Obtener una lista de todos los estudiantes.
    GET /api/estudiantes/:id - Obtener un solo estudiante por ID.
    Respuesta:
    Status 404: "Estudiante no encontrado"
    POST /api/estudiantes - Crear un nuevo estudiante.
    Respuesta:
    Status 201: "Estudiante creado"
    PUT /api/estudiantes/:id - Actualizar un estudiante existente.
    Respuesta:
    Status 404: "Estudiante no encontrado"
    DELETE /api/estudiantes/:id - Eliminar un estudiante por ID.
    Respuesta:
    Status 404: "Estudiante no encontrado"
## cursos
    GET /api/cursos - Obtener una lista de todos los cursos.    
    GET /api/cursos/:id - Obtener un solo curso por ID.
    Respuesta:
    Status 404: "Curso no encontrado"
    POST /api/cursos - Crear un nuevo curso.
    Respuesta:
    Status 201: "Curso creado"
    PUT /api/cursos/:id - Actualizar un curso existente.
    Respuesta:
    Status 404: "Curso no encontrado"
    DELETE /api/cursos/:id - Eliminar un curso por ID.
    Respuesta:
    Status 404: "Curso no encontrado"
## Profesores
    GET /api/profesores - Obtener una lista de todos los profesores.
    GET /api/profesores/:id - Obtener un solo profesor por ID.
    Respuesta:
    Status 404: "Profesor no encontrado"
    POST /api/profesores - Crear un nuevo profesor.
    Respuesta:
    Status 201: "Profesor creado"
    PUT /api/profesores/:id - Actualizar un profesor existente.
    Respuesta:
    Status 404: "Profesor no encontrado"
    DELETE /api/profesores/:id - Eliminar un profesor por ID.
    Respuesta:
    Status 404: "Profesor no encontrado"
## Departamentos
    GET /api/departamentos - Obtener una lista de todos los departamentos.
    GET /api/departamentos/:id - Obtener un solo departamento por ID.
    Respuesta:
    Status 404: "Departamento no encontrado"
    POST /api/departamentos - Crear un nuevo departamento.
    Respuesta:
    Status 201: "Departamento creado"
    PUT /api/departamentos/:id - Actualizar un departamento existente.
    Respuesta:
    Status 404: "Departamento no encontrado"
    DELETE /api/departamentos/:id - Eliminar un departamento por ID.
    Respuesta:
    Status 404: "Departamento no encontrado"
## Notificaciones
    GET /api/notificaciones - Lista todas las notificaciones enviadas a los estudiantes.
    GET /api/notificaciones/estudiante/:id - Devuelve las notificaciones enviadas a un estudiante específico.
    GET /api/notificaciones/curso/:id - Devuelve las notificaciones enviadas a un curso específico.
    
## Reportes
    GET /api/reportes/inscripcion - Devuelve un reporte de matrículas de la universidad.
    GET /api/reportes/calificaciones - Devuelve un reporte de calificaciones de la universidad.
    GET /api/reportes/financiero - Devuelve un reporte financiero de la universidad.

## Autenticación
    POST /api/auth/login - Autentica a un usuario.
    POST /api/auth/logout - Cierra la sesión de un usuario.
    POST /api/auth/forgot-password - Envía un correo electrónico para restablecer la contraseña.
