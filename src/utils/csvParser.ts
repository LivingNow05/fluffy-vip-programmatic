import citiesData from '../data/fluffy_cities.json';
import { FluffyStoryRow } from '../types/fluffy';

export const FLUFFY_CITIES_SYNC: FluffyStoryRow[] = citiesData as FluffyStoryRow[];

export const parseFluffyCSV = async (): Promise<FluffyStoryRow[]> => {
  return FLUFFY_CITIES_SYNC;
};
