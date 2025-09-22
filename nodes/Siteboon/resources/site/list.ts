import type { INodeProperties } from 'n8n-workflow';

export const listSitesOperation: INodeProperties[] = [
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
		],
		default: 'list',
	},
];