import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class SiteboonApi implements ICredentialType {
	name = 'siteboonApi';

	displayName = 'Siteboon API';

	// Link to your community node's README
	documentationUrl = 'https://github.com/org/-siteboon?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'x-api-key': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://rbfdagomafltuzfmfmgk.supabase.co/functions/v1/api',
			url: '/sites',
		},
	};
}
