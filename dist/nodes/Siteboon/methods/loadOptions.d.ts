import type { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
export declare function getSites(this: ILoadOptionsFunctions, filter?: string): Promise<INodeListSearchResult>;
export declare function getPages(this: ILoadOptionsFunctions, filter?: string): Promise<INodeListSearchResult>;
