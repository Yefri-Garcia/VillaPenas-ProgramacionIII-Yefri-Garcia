# Villa Peñas — Explorador de servicios públicos

**Estudiante:** Yefri Jose Garcia Villalta  
**Curso:** Programación III  
**Tecnologías:** React, TypeScript y Vite

## Descripción del proyecto

Aplicación web académica que permite consultar información turística real mediante tres endpoints GET públicos de la API REST de Villa Peñas.

La aplicación permite visualizar paquetes turísticos, consultar productos adicionales, buscar información y explorar los servicios incluidos en cada paquete.

No modifica el backend, no utiliza credenciales y no incorpora datos simulados.

## Requisitos

- Node.js y npm.
- Visual Studio Code u otro editor.
- Navegador web.
- Conexión a Internet.

## Instrucciones de ejecución

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Abrir una terminal y ejecutar los siguientes comandos, uno por uno:

```bash
cd frontend
npm install
npm run dev
```

4. Abrir en el navegador:

http://127.0.0.1:5173/

La terminal debe permanecer abierta mientras se utiliza la aplicación.

## Endpoints públicos utilizados

| Método | Endpoint | Función |
|---|---|---|
| GET | `/public/paquetes` | Consultar el catálogo de paquetes turísticos. |
| GET | `/public/opciones-productos-adicionales` | Consultar productos adicionales disponibles. |
| GET | `/public/paquetes/{id}` | Obtener el detalle de un paquete y sus servicios asociados. |

**Servidor de la API:** https://villa-penas-production.up.railway.app

**Documentación Swagger:** https://villa-penas-production.up.railway.app/api/docs

## Funcionalidades

- Visualización de paquetes turísticos.
- Visualización de productos adicionales.
- Búsqueda por texto.
- Consulta detallada de paquetes.
- Actualización de información.
- Manejo de estados de carga, error y resultados vacíos.
- Interfaz adaptable a diferentes tamaños de pantalla.

## Estructura del proyecto

- `frontend/src/services/api.ts`: modelos TypeScript y funciones para consultar la API.
- `frontend/src/main.tsx`: interfaz React, búsqueda, estados y detalle de paquetes.
- `frontend/src/style.css`: estilos de la aplicación.
- `frontend/vite.config.ts`: configuración del servidor de desarrollo y proxy.
- `docs/ficha_analisis.md`: análisis y justificación de los servicios GET.
- `docs/evidencias/`: capturas de funcionamiento y solicitudes HTTP.

## Configuración de conexión

La aplicación utiliza un proxy de Vite durante el desarrollo para redirigir las solicitudes HTTP hacia la API alojada en Railway.

Esta configuración permite consultar los servicios desde el entorno local sin modificar el backend.

El proxy funciona durante la ejecución mediante `npm run dev`. Para desplegar la aplicación en producción sería necesario configurar una solución equivalente.

## Evidencias

Se realizaron pruebas utilizando Google Chrome y su herramienta Network (Red).

Se comprobaron los tres endpoints GET con respuestas HTTP `200 OK`.

También se verificaron las búsquedas, los resultados vacíos y el indicador de carga.

Las capturas se encuentran en la carpeta `docs/evidencias/`.

## Limitaciones

El funcionamiento depende de la disponibilidad del servidor externo y de la conexión a Internet.

La aplicación está diseñada para consultar información pública, sin operaciones de modificación de datos.

## Repositorio

https://github.com/Yefri-Garcia/VillaPenas-ProgramacionIII-Yefri-Garcia

