import Papa from 'papaparse';
import { FluffyStoryRow } from '../types/fluffy';

export const parseFluffyCSV = async (): Promise<FluffyStoryRow[]> => {
  try {
    const response = await fetch('/dataset_fluffy_stories.csv');
    const csvText = await response.text();
    
    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const rows: FluffyStoryRow[] = results.data.map((row: any) => ({
            dominio: row['Dominio'] || '',
            categoria: row['Categoría'] || 'venta',
            slug: row['URL Final (Slug)'] || '',
            tituloH1: row['H1 Título'] || '',
            metaDescripcion: row['Meta Descripción'] || '',
            moneda: row['Moneda'] || 'USD',
            pais: row['País'] || '',
            aeropuerto: row['Aeropuerto'] || '',
            historiaLocal: row['Historia Local'] || '',
          }));
          resolve(rows);
        },
        error: (err: any) => {
          reject(err);
        }
      });
    });
  } catch (error) {
    console.error('Error fetching CSV:', error);
    return [];
  }
};
