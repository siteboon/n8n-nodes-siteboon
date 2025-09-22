import { NodeConnectionType, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { siteDescription } from './resources/site';
import { pageDescription } from './resources/page';
import { getSites, getPages } from './methods/loadOptions';

export class Siteboon implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Siteboon',
		name: 'siteboon',
		icon: { light: 'file:siteboon.svg', dark: 'file:siteboon.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Siteboon AI website builder API',
		defaults: {
			name: 'Siteboon',
		},
		usableAsTool: true,
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [{ name: 'siteboonApi', required: true }],
		requestDefaults: {
			baseURL: 'https://rbfdagomafltuzfmfmgk.supabase.co/functions/v1/api',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Site',
						value: 'site',
					},
					{
						name: 'Page',
						value: 'page',
					},
				],
				default: 'site',
			},
			...siteDescription,
			...pageDescription,
		],
	};

	methods = {
		listSearch: {
			getSites,
			getPages,
		},
	};
}
