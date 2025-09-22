"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSites = getSites;
exports.getPages = getPages;
async function getSites(filter) {
    const returnData = [];
    try {
        const response = await this.helpers.httpRequestWithAuthentication.call(this, 'siteboonApi', {
            method: 'GET',
            baseURL: 'https://rbfdagomafltuzfmfmgk.supabase.co/functions/v1/api',
            url: '/sites',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        let sitesData;
        if (response.data && Array.isArray(response.data)) {
            sitesData = response.data;
        }
        else if (Array.isArray(response)) {
            sitesData = response;
        }
        else {
            return { results: returnData };
        }
        let filteredSites = sitesData;
        if (filter && filter.trim() !== '') {
            const searchTerm = filter.toLowerCase().trim();
            filteredSites = sitesData.filter((site) => {
                const siteName = (site.name || '').toLowerCase();
                const domainName = (site.domain_name || '').toLowerCase();
                const siteId = (site.id || '').toLowerCase();
                return siteName.includes(searchTerm) ||
                    domainName.includes(searchTerm) ||
                    siteId.includes(searchTerm);
            });
        }
        for (const site of filteredSites) {
            returnData.push({
                name: site.name || 'Unnamed Site',
                value: site.id,
                description: site.domain_name ? `Domain: ${site.domain_name}` : `Site ID: ${site.id}`,
            });
        }
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        returnData.push({
            name: `Error loading sites: ${errorMessage}`,
            value: 'error',
            description: 'Please check your API credentials and try again',
        });
    }
    return { results: returnData };
}
async function getPages(filter) {
    const returnData = [];
    try {
        const siteId = this.getCurrentNodeParameter('siteId');
        let siteIdValue = '';
        if (typeof siteId === 'object' && siteId !== null && 'value' in siteId) {
            siteIdValue = siteId.value;
        }
        else if (typeof siteId === 'string') {
            siteIdValue = siteId;
        }
        if (!siteIdValue) {
            return {
                results: [{
                        name: 'Please Select a Site First',
                        value: 'no-site',
                        description: 'A site must be selected to load pages',
                    }],
            };
        }
        const response = await this.helpers.httpRequestWithAuthentication.call(this, 'siteboonApi', {
            method: 'GET',
            baseURL: 'https://rbfdagomafltuzfmfmgk.supabase.co/functions/v1/api',
            url: '/pages',
            qs: {
                siteId: siteIdValue,
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        let pagesData;
        if (response.data && Array.isArray(response.data)) {
            pagesData = response.data;
        }
        else if (Array.isArray(response)) {
            pagesData = response;
        }
        else {
            return { results: returnData };
        }
        let filteredPages = pagesData;
        if (filter && filter.trim() !== '') {
            const searchTerm = filter.toLowerCase().trim();
            filteredPages = pagesData.filter((page) => {
                const pageName = (page.name || '').toLowerCase();
                const pageId = (page.id || '').toString().toLowerCase();
                return pageName.includes(searchTerm) || pageId.includes(searchTerm);
            });
        }
        for (const page of filteredPages) {
            returnData.push({
                name: page.name || `Page ${page.id}`,
                value: page.id.toString(),
                description: `Page ID: ${page.id}${page.parent_id ? ` | Parent: ${page.parent_id}` : ''}`,
            });
        }
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        returnData.push({
            name: `Error loading pages: ${errorMessage}`,
            value: 'error',
            description: 'Please check your API credentials and site selection',
        });
    }
    return { results: returnData };
}
//# sourceMappingURL=loadOptions.js.map