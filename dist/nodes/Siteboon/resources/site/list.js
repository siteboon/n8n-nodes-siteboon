"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listSitesOperation = void 0;
exports.listSitesOperation = [
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
//# sourceMappingURL=list.js.map