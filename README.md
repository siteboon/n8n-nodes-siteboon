# n8n-nodes-siteboon

![Siteboon Logo](https://static.siteboon.ai/images/logo-logotype-color.svg)

This is an n8n community node. It lets you use Siteboon AI website builder in your n8n workflows.

Siteboon is an AI-powered website builder platform that enables users to create, manage, and publish websites with intelligent automation.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

- [Installation](#installation)
- [Operations](#operations)
- [Credentials](#credentials)
- [Compatibility](#compatibility)
- [Usage](#usage)
- [Resources](#resources)
- [Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### Site Operations
- **List Sites**: Retrieve all sites owned by the authenticated user
- **Get Site**: Get detailed information about a specific site including generation status

### Page Operations
- **List Pages**: Retrieve all pages for a specific site (with optional filtering)
- **Get Page**: Get detailed information about a specific page
- **Create Page**: Create a new page in a site
- **Update Page**: Update page properties (name, parent, index status)
- **Delete Page**: Delete a specific page from a site
- **Duplicate Page**: Create a copy of an existing page with a new name

## Credentials

To use this node, you need a Siteboon API key:

1. **Sign up** for a Siteboon account at [siteboon.ai](https://siteboon.ai)
2. **Generate an API key** from your Siteboon dashboard
3. **Configure credentials** in n8n:
   - Credential Type: `Siteboon API`
   - API Key: Your Siteboon API key

The node uses API key authentication via the `x-api-key` header.

## Compatibility

- **Minimum n8n version**: 0.226.0
- **Tested with**: n8n 1.0+
- **Node API version**: 1

## Usage

### Basic Workflow Examples

**List all your sites:**
1. Add Siteboon node to workflow
2. Select Resource: `Site`
3. Select Operation: `List`
4. Configure your Siteboon API credentials

**Create a new page:**
1. Add Siteboon node to workflow
2. Select Resource: `Page`
3. Select Operation: `Create`
4. Select site from dropdown or enter Site ID
5. Enter page name and optional parent page

**Smart Site/Page Selection:**
- Use dropdown to select sites/pages by name
- Or enter IDs manually using expressions
- Page dropdown automatically loads based on selected site

### Resource Locators
This node uses n8n's resource locator pattern, allowing you to:
- Select items from searchable dropdowns
- Enter IDs manually for dynamic workflows
- Use expressions for advanced automation

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)

## Version history

### 0.1.0
- Initial release
- Site operations: List, Get
- Page operations: List, Get, Create, Update, Delete, Duplicate
- API key authentication
- Resource locator support with searchable dropdowns
