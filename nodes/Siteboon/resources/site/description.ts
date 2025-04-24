import { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties = {
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
      value: 'list',
      description: 'Get list of sites',
      action: 'Get list of sites',
      routing: {
        request: {
          method: 'GET',
          url: '={{"/api/sites" + ($parameter.returnAll ? "" : "/" + $parameter.siteId)}}',
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
  ],
  default: 'get',
};

export const fields: INodeProperties[] = [
  {
    displayName: 'Site ID',
    name: 'siteId',
    type: 'string',
    default: '',
    required: true,
    displayOptions: {
      show: {
        resource: ['site'],
        operation: ['get', 'delete'],
      },
    },
  },
  {
    displayName: 'Site Name',
    name: 'siteName',
    type: 'string',
    default: '',
    required: true,
    displayOptions: {
      show: {
        resource: ['site'],
        operation: ['create'],
      },
    },
    routing: {
      send: {
        type: 'body',
        property: 'site_name',
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
        resource: ['site'],
        operation: ['list'],
      },
    },
    description: 'Whether to return all sites or filter by Site ID',
  },
  {
    displayName: 'Site ID',
    name: 'siteId',
    type: 'string',
    default: '',
    required: true,
    displayOptions: {
      show: {
        resource: ['site'],
        operation: ['list'],
        returnAll: [false],
      },
    },
    description: 'ID of the specific site to return',
  },
]; 