# Siteboon AI Website Builder for n8n

![Siteboon Logo](https://static.siteboon.ai/images/logo-logotype-color.svg)

**Automate your website creation and management with Siteboon's AI-powered tools directly in n8n workflows.**

This n8n community node integrates [Siteboon](https://siteboon.ai) - the AI first website builder - with your automation workflows. Create landing pages, manage your sites, and build complete websites using artificial intelligence, all through n8n's powerful automation platform.

## 🚀 What is Siteboon?

[Siteboon](https://siteboon.ai) is a AI-powered website builder that revolutionizes web development by combining artificial intelligence with intuitive design tools. Whether you're building landing pages, corporate websites, or complex websites for lead generation, Siteboon's AI technology helps you create professional websites in minutes, while being able to create any kind of website you need without any limitations.

### Key Features:
- **AI-Powered Design**: Let artificial intelligence create and change stunning website layouts
- **SEO Optimized**: Automatically optimized for search engines
- **Mobile Responsive**: All websites are fully responsive across devices
- **API Integration**: Connect with any service through robust APIs

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

## Use Cases & Examples

### 🎯 Marketing Automation
- **Lead Generation**: Automatically create landing pages for new campaigns
- **A/B Testing**: Deploy multiple page variants and track performance
- **Dynamic Content**: Update website content based on user behavior or external data

### 🔄 Workflow Integration
- **CRM Integration**: Create proposals for new leads when needed
- **Multi-site Management**: Manage multiple Siteboon websites from one n8n workflow

## Why Choose Siteboon + n8n?

✅ **AI-First Approach**: Leverage artificial intelligence for website creation and optimization
✅ **Seamless Integration**: Native n8n node with  API access
✅ **Scalable Solution**: Perfect for agencies managing multiple client websites
✅ **Cost-Effective**: Reduce development time and costs with automation
✅ **Future-Proof**: Built on modern technologies with continuous updates

## Resources

* [Siteboon Official Website](https://siteboon.ai) - Learn more about Siteboon AI Website Builder

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [GitHub Repository](https://github.com/siteboon/n8n-nodes-siteboon) - Source code and issues

