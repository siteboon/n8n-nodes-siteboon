import type { INodeProperties } from 'n8n-workflow';

export const pageDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['page'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a new page',
				description: 'Create a new page in a site',
				routing: {
					request: {
						method: 'POST',
						url: '/pages',
						body: {
							siteId: '={{$parameter.siteId.value || $parameter.siteId}}',
							name: '={{$parameter.pageName}}',
							parentId: '={{$parameter.parentId ? ($parameter.parentId.value || $parameter.parentId) : undefined}}',
						},
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a page',
				description: 'Delete a specific page from a site',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/pages/{{$parameter.pageId.value || $parameter.pageId}}',
						qs: {
							siteId: '={{$parameter.siteId.value || $parameter.siteId}}',
						},
					},
				},
			},
			{
				name: 'Duplicate',
				value: 'duplicate',
				action: 'Duplicate a page',
				description: 'Create a copy of an existing page with a new name',
				routing: {
					request: {
						method: 'POST',
						url: '=/pages/{{$parameter.pageId.value || $parameter.pageId}}/duplicate',
						body: {
							siteId: '={{$parameter.siteId.value || $parameter.siteId}}',
							name: '={{$parameter.pageName}}',
							parentId: '={{$parameter.parentId ? ($parameter.parentId.value || $parameter.parentId) : undefined}}',
						},
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get page details',
				description: 'Retrieve detailed information about a specific page',
				routing: {
					request: {
						method: 'GET',
						url: '=/pages/{{$parameter.pageId.value || $parameter.pageId}}',
						qs: {
							siteId: '={{$parameter.siteId.value || $parameter.siteId}}',
						},
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				action: 'List pages',
				description: 'Retrieve all pages for a specific site',
				routing: {
					request: {
						method: 'GET',
						url: '/pages',
						qs: {
							siteId: '={{$parameter.siteId.value || $parameter.siteId}}',
							pageId: '={{$parameter.pageId ? ($parameter.pageId.value || $parameter.pageId) : undefined}}',
						},
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a page',
				description: 'Update page properties such as name, parent, or index status',
				routing: {
					request: {
						method: 'PUT',
						url: '=/pages/{{$parameter.pageId.value || $parameter.pageId}}',
						body: {
							siteId: '={{$parameter.siteId.value || $parameter.siteId}}',
							name: '={{$parameter.pageName || undefined}}',
							parentId: '={{$parameter.parentId ? ($parameter.parentId.value || $parameter.parentId) : undefined}}',
							index: '={{$parameter.setAsIndex || undefined}}',
						},
					},
				},
			},
		],
		default: 'list',
	},

	// Site ID field (required for all page operations)
	{
		displayName: 'Site',
		name: 'siteId',
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		required: true,
		displayOptions: {
			show: {
				resource: ['page'],
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

	// Page ID field (for get, update, delete, duplicate operations)
	{
		displayName: 'Page',
		name: 'pageId',
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		required: true,
		displayOptions: {
			show: {
				resource: ['page'],
				operation: ['get', 'update', 'delete', 'duplicate'],
			},
		},
		modes: [
			{
				displayName: 'From List',
				name: 'list',
				type: 'list',
				placeholder: 'Select a page...',
				typeOptions: {
					searchListMethod: 'getPages',
					searchable: true,
				},
			},
			{
				displayName: 'By ID',
				name: 'id',
				type: 'string',
				placeholder: 'e.g., 123',
			},
		],
	},

	// Optional Page ID field for filtering in list operation
	{
		displayName: 'Filter by Page',
		name: 'pageId',
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		displayOptions: {
			show: {
				resource: ['page'],
				operation: ['list'],
			},
		},
		modes: [
			{
				displayName: 'From List',
				name: 'list',
				type: 'list',
				placeholder: 'Select a page to filter...',
				typeOptions: {
					searchListMethod: 'getPages',
					searchable: true,
				},
			},
			{
				displayName: 'By ID',
				name: 'id',
				type: 'string',
				placeholder: 'e.g., 123',
			},
		],
		description: 'Optional: Filter for a specific page',
	},

	// Page Name field (for create, update, duplicate)
	{
		displayName: 'Page Name',
		name: 'pageName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['page'],
				operation: ['create', 'duplicate'],
			},
		},
		default: '',
		description: 'Name for the page',
		placeholder: 'e.g., About Us',
	},

	{
		displayName: 'Page Name',
		name: 'pageName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['page'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'New name for the page (leave empty to keep current name)',
		placeholder: 'e.g., About Us',
	},

	// Parent Page ID field (optional for create, update, duplicate)
	{
		displayName: 'Parent Page',
		name: 'parentId',
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		displayOptions: {
			show: {
				resource: ['page'],
				operation: ['create', 'update', 'duplicate'],
			},
		},
		modes: [
			{
				displayName: 'From List',
				name: 'list',
				type: 'list',
				placeholder: 'Select a parent page...',
				typeOptions: {
					searchListMethod: 'getPages',
					searchable: true,
				},
			},
			{
				displayName: 'By ID',
				name: 'id',
				type: 'string',
				placeholder: 'e.g., 123',
			},
		],
		description: 'Optional: Set a parent page for hierarchical structure',
	},

	// Set as Index field (for update operation)
	{
		displayName: 'Set as Index Page',
		name: 'setAsIndex',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['page'],
				operation: ['update'],
			},
		},
		default: false,
		description: 'Whether to set this page as the index page for the site',
	},
];