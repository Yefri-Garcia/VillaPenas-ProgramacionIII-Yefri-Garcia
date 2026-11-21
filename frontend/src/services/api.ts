export const API_BASE = '';
export interface Servicio { id:number; nombre:string; descripcion?:string; }
export interface PaqueteServicio { id:number; servicio?:Servicio; orden?:number; }
export interface Paquete { id:number; nombre:string; descripcion?:string; precioColones?:number; activo?:boolean; paquetesServicios?:PaqueteServicio[]; }
export interface Adicional { id:number; nombre?:string; descripcion?:string; precioColones?:number; activo?:boolean; [key:string]:unknown; }
async function getJSON<T>(path:string, signal?:AbortSignal):Promise<T>{
 const response=await fetch(`${API_BASE}${path}`,{method:'GET',headers:{Accept:'application/json'},signal});
 if(!response.ok)throw new Error(`HTTP ${response.status}: ${response.status===401?'Se requiere autenticación':response.status===404?'Recurso no encontrado':'No se pudo consultar el servicio'}`);
 return response.json() as Promise<T>;
}
function lista<T>(v:unknown):T[]{if(Array.isArray(v))return v as T[];if(v&&typeof v==='object'){const obj=v as Record<string,unknown>;for(const key of ['data','items','results'])if(Array.isArray(obj[key]))return obj[key] as T[];}return [];}
export async function obtenerPaquetes(signal?:AbortSignal){return lista<Paquete>(await getJSON<unknown>('/public/paquetes',signal));}
export async function obtenerAdicionales(signal?:AbortSignal){return lista<Adicional>(await getJSON<unknown>('/public/opciones-productos-adicionales',signal));}
export async function obtenerPaquete(id:number,signal?:AbortSignal){const result=await getJSON<Paquete|{data:Paquete}>(`/public/paquetes/${encodeURIComponent(id)}`,signal);return 'data' in result?result.data:result;}
