import { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  displayOptions: {
    show: {
      resource: ['page'],
    },
  },
  options: [
    {
      name: 'Create',
      value: 'create',
      description: 'Create a new page',
      action: 'Create a page',
      routing: {
        request: {
          method: 'POST',
          url: '/api/pages',
        },
      },
    },
    {
      name: 'Delete',
      value: 'delete',
      description: 'Delete a page',
      action: 'Delete a page',
      routing: {
        request: {
          method: 'POST',
          url: '/api/pages',
        },
      },
    },
    {
      name: 'Duplicate',
      value: 'duplicate',
      description: 'Duplicate a page',
      action: 'Duplicate a page',
      routing: {
        request: {
          method: 'POST',
          url: '/api/pages',
        },
      },
    },
    {
      name: 'Get List',
      value: 'list',
      description: 'Get list of pages',
      action: 'Get list of pages',
      routing: {
        request: {
          method: 'GET',
          url: '={{"/api/pages?siteId=" + $parameter.siteId + ($parameter.returnAll ? "" : "&pageId=" + $parameter.pageId)}}',
        },
        output: {
          postReceive: [
            {
              type: 'rootProperty',
              properties: {
                property: 'data',
              },
            },
          ],
        },
      },
    },
    {
      name: 'Import HTML',
      value: 'import',
      description: 'Import HTML to a page',
      action: 'Import HTML to a page',
      routing: {
        request: {
          method: 'POST',
          url: '/html-import',
        },
      },
    },
  ],
  default: 'create',
};

export const fields: INodeProperties[] = [
  {
    displayName: 'Action',
    name: 'action',
    type: 'hidden',
    displayOptions: {
      show: {
        resource: ['page'],
      },
    },
    routing: {
      send: {
        type: 'body',
        property: 'action',
      },
    },
    default: '={{$parameter.operation}}',
  },
  {
    displayName: 'Site ID',
    name: 'siteId',
    type: 'string',
    default: '',
    required: true,
    displayOptions: {
      show: {
        resource: ['page'],
      },
    },
    routing: {
      send: {
        type: 'body',
        property: 'siteId',
        value: '={{$parameter.operation === "list" ? undefined : $parameter.siteId}}',
      },
    },
  },
  {
    displayName: 'Return All',
    name: 'returnAll',
    type: 'boolean',
    default: true,
    displayOptions: {
      show: {
        resource: ['page'],
        operation: ['list'],
      },
    },
    description: 'Whether to return all pages or filter by Page ID',
  },
  {
    displayName: 'Page ID',
    name: 'pageId',
    type: 'string',
    default: '',
    required: true,
    displayOptions: {
      show: {
        resource: ['page'],
        operation: ['delete', 'duplicate', 'import'],
      },
    },
    routing: {
      send: {
        type: 'body',
        property: 'pageId',
      },
    },
  },
  {
    displayName: 'Page ID',
    name: 'pageId',
    type: 'string',
    default: '',
    required: true,
    displayOptions: {
      show: {
        resource: ['page'],
        operation: ['list'],
        returnAll: [false],
      },
    },
    description: 'ID of the specific page to return',
  },
  {
    displayName: 'Page Name',
    name: 'name',
    type: 'string',
    default: '',
    required: true,
    displayOptions: {
      show: {
        resource: ['page'],
        operation: ['create'],
      },
    },
    routing: {
      send: {
        type: 'body',
        property: 'name',
      },
    },
  },
  {
    displayName: 'Parent ID',
    name: 'parentId',
    type: 'string',
    default: '',
    displayOptions: {
      show: {
        resource: ['page'],
        operation: ['create'],
      },
    },
    routing: {
      send: {
        type: 'body',
        property: 'parentId',
        value: '={{$parameter.parentId || null}}',
      },
    },
  },
  {
    displayName: 'HTML Content',
    name: 'html',
    type: 'string',
    typeOptions: {
      rows: 10,
    },
    default: '',
    required: true,
    displayOptions: {
      show: {
        resource: ['page'],
        operation: ['import'],
      },
    },
    routing: {
      send: {
        type: 'body',
        property: 'html',
      },
    },
    description: 'The HTML content to import into the page',
  },
] 