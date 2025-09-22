"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Siteboon = void 0;
const site_1 = require("./resources/site");
const page_1 = require("./resources/page");
const loadOptions_1 = require("./methods/loadOptions");
class Siteboon {
    constructor() {
        this.description = {
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
            inputs: ["main"],
            outputs: ["main"],
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
                ...site_1.siteDescription,
                ...page_1.pageDescription,
            ],
        };
        this.methods = {
            listSearch: {
                getSites: loadOptions_1.getSites,
                getPages: loadOptions_1.getPages,
            },
        };
    }
}
exports.Siteboon = Siteboon;
//# sourceMappingURL=Siteboon.node.js.map