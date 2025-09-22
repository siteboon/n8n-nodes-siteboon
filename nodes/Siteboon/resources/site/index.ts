import type { INodeProperties } from 'n8n-workflow';

export const siteDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['site'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				action: 'List all sites',
				description: 'Retrieve all sites owned by the authenticated user',
				routing: {
					request: {
						method: 'GET',
						url: '/sites',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get site details',
				description: 'Retrieve detailed information about a specific site including generation status',
				routing: {
					request: {
						method: 'GET',
						url: '=/sites/{{$parameter.siteId.value || $parameter.siteId}}',
					},
				},
			},
		],
		default: 'list',
	},
	{
		displayName: 'Site',
		name: 'siteId',
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		required: true,
		displayOptions: {
			show: {
				resource: ['site'],
				operation: ['get'],
			},
		},
		modes: [
			{
				displayName: 'From List',
				name: 'list',
				type: 'list',
				placeholder: 'Select a site...',
				typeOptions: {
					searchListMethod: 'getSites',
					searchable: true,
				},
			},
			{
				displayName: 'By ID',
				name: 'id',
				type: 'string',
				placeholder: 'e.g., 123e4567-e89b-12d3-a456-426614174000',
				validation: [
					{
						type: 'regex',
						properties: {
							regex: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
							errorMessage: 'Please enter a valid UUID',
						},
					},
				],
			},
		],
	},
];