"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteboonApi = void 0;
class SiteboonApi {
    constructor() {
        this.name = 'siteboonApi';
        this.displayName = 'Siteboon API';
        this.documentationUrl = 'https://github.com/org/-siteboon?tab=readme-ov-file#credentials';
        this.properties = [
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                typeOptions: { password: true },
                required: true,
                default: '',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    'x-api-key': '={{$credentials.apiKey}}',
                },
            },
        };
        this.test = {
            request: {
                baseURL: 'https://rbfdagomafltuzfmfmgk.supabase.co/functions/v1/api',
                url: '/sites',
            },
        };
    }
}
exports.SiteboonApi = SiteboonApi;
//# sourceMappingURL=SiteboonApi.credentials.js.map