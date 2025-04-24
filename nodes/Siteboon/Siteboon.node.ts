import {
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { BASE_URL, RESOURCE_OPTIONS } from './constants';
import { operations as siteOperations, fields as siteFields } from './resources/site/description';
import { operations as pageOperations, fields as pageFields } from './resources/page/description';

export class Siteboon implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Siteboon',
		name: 'siteboon',
		icon: 'file:siteboon.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
		description: 'Interact with Siteboon API',
		defaults: {
			name: 'Siteboon',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'siteboonApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: BASE_URL,
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
				options: RESOURCE_OPTIONS,
				default: 'site',
			},
			// Site Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['site'],
					},
				},
				options: [
					{
						name: 'Create',
						value: 'create',
						description: 'Create a new site',
						action: 'Create a site',
						routing: {
							request: {
								method: 'POST',
								url: '/api/sites',
							},
						},
					},
					{
						name: 'Delete',
						value: 'delete',
						description: 'Delete a site',
						action: 'Delete a site',
						routing: {
							request: {
								method: 'DELETE',
								url: '/api/sites/{{$parameter.siteId}}',
							},
						},
					},
					{
						name: 'Get',
						value: 'get',
						description: 'Get a site by ID',
						action: 'Get a site',
						routing: {
							request: {
								method: 'GET',
								url: '/api/sites/{{$parameter.siteId}}',
							},
						},
					},
					{
						name: 'Get List',
						value: 'getList',
						description: 'Get list of sites',
						action: 'Get list of sites',
						routing: {
							request: {
								method: 'GET',
								url: '/api/sites',
							},
						},
					},
				],
				default: 'get',
			},
			// Page Operations
			pageOperations,
			...siteFields,
			...pageFields,
		],
	};
} 