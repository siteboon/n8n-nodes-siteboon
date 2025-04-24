import { INodePropertyOptions } from 'n8n-workflow';

export const BASE_URL = 'https://rbfdagomafltuzfmfmgk.supabase.co/functions/v1';

export const RESOURCE_OPTIONS: INodePropertyOptions[] = [
  {
    name: 'Site',
    value: 'site',
  },
  {
    name: 'Page',
    value: 'page',
  },
]; 