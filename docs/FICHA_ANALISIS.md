# Ficha de análisis — Villa Peñas

| GET público | Datos relevantes | Uso |
|---|---|---|
| `/public/paquetes` | `id`, `nombre`, `descripcion`, `precioColones`, `activo`, `paquetesServicios` | Catálogo, precios y búsqueda |
| `/public/opciones-productos-adicionales` | `id`, `nombre`, `descripcion` y otros campos devueltos por la API | Listado de complementos y búsqueda |
| `/public/paquetes/{id}` | Identificador, nombre, descripción, precio y servicios asociados | Detalle al seleccionar un paquete |

## Justificación
Se eligieron operaciones GET de las secciones públicas de Swagger, sin candado, para consultar datos turísticos sin modificar el backend ni enviar credenciales. La respuesta del listado de paquetes fue observada en el navegador, con paquetes Essentials y Premium y sus servicios. El listado de adicionales fue reportado como accesible por el usuario. El GET de detalle requiere verificación en Network al seleccionar un paquete.

## Validación requerida
1. Abrir la aplicación desde Vite.
2. Revisar DevTools → Network → Fetch/XHR: `GET /public/paquetes`, `GET /public/opciones-productos-adicionales` y, al abrir un detalle, `GET /public/paquetes/1`.
3. Guardar capturas con código HTTP y pestaña Response; comprobar que la API permita CORS desde localhost.
4. Probar búsqueda sin resultados, actualización y comportamiento ante errores de red.

## Limitaciones
La API depende de un servidor externo y de su configuración CORS. No se incorporan credenciales ni datos privados. La disponibilidad y respuestas deben verificarse en el navegador antes de la entrega.
