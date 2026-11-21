# Villa Peñas — Explorador de servicios públicos

Aplicación académica con React, TypeScript y Vite que consulta tres GET públicos de la API REST de Villa Peñas. No modifica el backend, no utiliza credenciales ni simula registros.

## Ejecutar

Requisitos: Node.js y npm.

```bash
cd frontend
npm install
npm run dev
```

Abrir la URL indicada por Vite, normalmente http://localhost:5173.

## Endpoints

- `GET /public/paquetes`: catálogo turístico.
- `GET /public/opciones-productos-adicionales`: complementos.
- `GET /public/paquetes/{id}`: detalle de paquete al pulsar **Ver detalles y servicios**.

Base URL: `https://villa-penas-production.up.railway.app`. Configurable con `VITE_API_URL` en `.env`.

## Estructura

- `frontend/src/services/api.ts`: modelos TypeScript y llamadas HTTP.
- `frontend/src/main.tsx`: componentes, búsqueda, estados y modal de detalle.
- `frontend/src/style.css`: estilos responsive.
- `docs/FICHA_ANALISIS.md`: análisis de los tres servicios.

## Evidencias pendientes para entrega

Capturar interfaz funcional, DevTools → Network (las tres solicitudes GET y sus respuestas), y crear/publicar un repositorio Git propio. No se incluyen capturas ni URL de repositorio ficticias.

## Comprobaciones

- Búsqueda por texto, sin resultados, carga, error de consulta.
- Selección de paquete con petición HTTP adicional.
- Confirmar que la API responde `200` y autoriza CORS en el navegador.
