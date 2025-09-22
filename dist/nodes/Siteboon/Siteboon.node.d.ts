import { type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { getSites, getPages } from './methods/loadOptions';
export declare class Siteboon implements INodeType {
    description: INodeTypeDescription;
    methods: {
        listSearch: {
            getSites: typeof getSites;
            getPages: typeof getPages;
        };
    };
}
