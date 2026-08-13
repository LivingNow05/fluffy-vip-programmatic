export interface FluffyStoryRow {
  dominio: string;
  categoria: string;
  slug: string;
  tituloH1: string;
  metaDescripcion: string;
  moneda: string;
  pais: string;
  aeropuerto: string;
  historiaLocal: string;
}

export interface FluffyManto {
  id: string;
  nombre: string;
  genetica: string;
  descripcion: string;
  imagen: string;
  precioEstimadoUSD: number;
  popularidad: string;
  caracteristicas: string[];
}
