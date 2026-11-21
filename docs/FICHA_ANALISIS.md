# Ficha de análisis — Villa Peñas

**Estudiante:** Yefri Jose Garcia Villalta  
**Curso:** Programación III  
**Proyecto:** Desarrollo de una interfaz consumiendo una API REST pública  
**Tecnologías:** React, TypeScript y Vite

## 1. Análisis de los servicios GET

| Endpoint público | Datos relevantes | Uso en la aplicación |
|---|---|---|
| `/public/paquetes` | `id`, `nombre`, `descripcion`, `precioColones`, `activo`, `paquetesServicios` | Mostrar el catálogo turístico, precios y búsqueda de paquetes. |
| `/public/opciones-productos-adicionales` | `id`, `nombre`, `descripcion` y otros atributos devueltos por la API. | Mostrar los productos adicionales disponibles y permitir búsquedas. |
| `/public/paquetes/{id}` | Identificador, nombre, descripción, precio y servicios asociados. | Consultar la información detallada de un paquete seleccionado. |

## 2. Justificación de los servicios seleccionados

Se seleccionaron tres operaciones GET públicas identificadas en la documentación Swagger de Villa Peñas.

Estos servicios permiten consultar información turística real sin utilizar credenciales ni modificar el backend.

Los endpoints seleccionados permiten desarrollar una interfaz con catálogo de paquetes, productos adicionales y consulta detallada de servicios incluidos.

## 3. Tecnologías utilizadas

- **React:** construcción de la interfaz mediante componentes.
- **TypeScript:** definición de tipos para trabajar con los datos de la API.
- **Vite:** ejecución del servidor de desarrollo.
- **Fetch API:** realización de solicitudes HTTP.
- **CSS:** diseño visual y adaptación de la interfaz.

## 4. Pruebas realizadas

Se ejecutó la aplicación desde el servidor local de Vite y se verificaron las solicitudes HTTP mediante las herramientas de desarrollo de Google Chrome.

| Prueba | Resultado |
|---|---|
| GET `/public/paquetes` | 200 OK |
| GET `/public/opciones-productos-adicionales` | 200 OK |
| GET `/public/paquetes/1` | 200 OK |
| Visualización de paquetes turísticos | Correcto |
| Visualización de productos adicionales | Correcto |
| Consulta de detalles de un paquete | Correcto |
| Búsqueda sin coincidencias | Muestra mensaje de resultados vacíos |
| Búsqueda por nombre Premium | Muestra únicamente el paquete correspondiente |

Durante las pruebas se visualizaron dos paquetes turísticos y diez productos adicionales.

## 5. Manejo de estados

La aplicación contempla los siguientes estados:

- **Carga:** indica que se está realizando una consulta.
- **Sin resultados:** informa cuando una búsqueda no encuentra coincidencias.
- **Error:** presenta un mensaje cuando falla la consulta a la API.

Se comprobó el comportamiento de resultados vacíos y se observó el mensaje de error durante las pruebas iniciales. El estado de carga queda pendiente de una verificación visual específica.

## 6. Problemas encontrados y soluciones

Durante el desarrollo se presentó un error de CORS que impedía realizar solicitudes desde React hacia la API alojada en Railway.

Para solucionarlo se configuró un proxy en `vite.config.ts`, permitiendo que las solicitudes del frontend fueran reenviadas al servidor externo.

Posteriormente se verificó en la pestaña Network que los tres endpoints respondieran correctamente con código HTTP 200.

## 7. Limitaciones

La aplicación depende de la disponibilidad de la API externa y de la conexión a Internet.

El proxy configurado funciona durante el desarrollo con Vite. Para publicar la aplicación en producción sería necesario configurar un proxy equivalente o habilitar los orígenes correspondientes en el servidor.

No se utilizan credenciales, datos privados ni modificaciones al backend.

## 8. Conclusión

Se desarrolló una aplicación web que permite consultar información real de la API REST pública de Villa Peñas.

Se verificó el consumo de tres servicios GET, la visualización de paquetes y productos adicionales, la consulta detallada y el funcionamiento de las búsquedas.

El proyecto demuestra el consumo de servicios REST mediante React y TypeScript, con una interfaz organizada para facilitar la consulta de información turística.

## 9. Repositorio

https://github.com/Yefri-Garcia/VillaPenas-ProgramacionIII-Yefri-Garcia
