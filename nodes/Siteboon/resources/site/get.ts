import type { INodeProperties } from 'n8n-workflow';

export const getSiteOperation: INodeProperties[] = [
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
				name: 'Get',
				value: 'get',
				action: 'Get site details',
				description: 'Retrieve detailed information about a specific site including generation status',
				routing: {
					request: {
						method: 'GET',
						url: '=/sites/{{$parameter.siteId}}',
					},
				},
			},
		],
		default: 'get',
	},
	{
		displayName: 'Site ID',
		name: 'siteId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['site'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'The unique identifier of the site to retrieve',
		placeholder: 'e.g., 123e4567-e89b-12d3-a456-426614174000',
	},
];