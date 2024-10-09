git clone https://github.com/yourusername/sistema-de-gestion-universitaria.git
cd sistema-de-gestion-universitaria
npm install
npm start
estudiantes
GET /api/estudiantes - Obtener una lista de todos los estudiantes
GET /api/estudiantes/ - Obtener un solo estudiante por identificación
POST /api/estudiantes - Crear un nuevo estudiante
PUT /api/estudiantes/ - Actualizar un estudiante existente
DELETE /api/estudiantes/ - Eliminar un estudiante por ID
cursos
GET /api/cursos - Obtener una lista de todos los cursos
GET /api/cursos/ - Obtener un solo curso por identificación
POST /api/cursos - Crear un nuevo curso
PUT /api/cursos/ - Actualizar un curso existente
DELETE /api/cursos/ - Eliminar un curso por ID
profesores
GET /api/profesores - Obtener una lista de todos los profesores
GET /api/profesores/ - Obtener un solo profesor por identificación
POST /api/profesores - Crear un nuevo profesor
PUT /api/profesores/ - Actualizar un profesor existente
DELETE /api/profesores/ - Eliminar un profesor por ID
departamentos
GET /api/departamentos - Obtener una lista de todos los departamentos
GET /api/departamentos/ - Obtener un solo departamento por identificación
POST /api/departamentos - Crear un nuevo departamento
PUT /api/departamentos/ - Actualizar un departamento existente
DELETE /api/departamentos/ - Eliminar un departamento por ID
Notificaciones
/Notificaciones: Lista las notificaciones enviadas a los estudiantes.
/Notificaciones/estudiante: Devuelve las notificaciones enviadas a un estudiante específico.
/Notificaciones/curso: Devuelve las notificaciones enviadas a un curso específico.
Reportes
/Reportes/inscripción: Devuelve un reporte de matrícula de la universidad.
/Reportes/calificaciones: Devuelve un reporte de calificaciones de la universidad.
/Reportes/financiero: Devuelve un reporte financiero de la universidad.
Autenticación
/login: Autentica a un usuario.
/logout: Cierra la sesión de un usuario.
/forgot-password: Envía un correo electrónico para restablecer la contraseña.
