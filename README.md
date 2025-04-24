# Siteboon for n8n

![Siteboon Logo](https://siteboon.com/assets/logo.png)

> Official n8n integration for the Siteboon Website Builder and CMS platform

## Overview

This n8n integration allows you to connect your automated workflows with the Siteboon website builder platform. Control your websites, pages, and content programmatically through n8n's powerful workflow automation system.

## Features

- **Site Management**: Create, retrieve, and delete sites from your Siteboon account
- **Page Operations**: Create, duplicate, delete, and list pages across your sites
- **HTML Import**: Import HTML content directly into your Siteboon pages

## Installation

### Via npm (recommended)

```bash
npm install n8n-nodes-siteboon
```

### Manual Installation

1. Download the latest release package
2. Extract it to your n8n custom nodes directory:
   ```bash
   cp -r ./n8n-nodes-siteboon/dist/* ~/.n8n/custom/
   ```
3. Restart your n8n instance

## Authentication


1. Obtain your Siteboon API key from your account settings
2. In n8n, create a new credential of type "Siteboon API"
3. Enter your API key and save

## Operations

### Site

| Operation | Description |
|-----------|-------------|
| Create | Create a new site in your Siteboon account |
| Get | Retrieve details of a specific site |
| Delete | Remove a site from your account |
| List | Get all available sites |

### Page

| Operation | Description |
|-----------|-------------|
| Create | Create a new page within a site |
| Delete | Remove a page from a site |
| Duplicate | Create an exact copy of an existing page |
| List | Get all pages within a site |
| Import HTML | Import HTML content into a page |

## Example Workflows

### Create a new page when form is submitted

```
[Form Trigger] → [Siteboon: Create Page]
```

### Import blog content to your website

```
[RSS Feed] → [HTML Format] → [Siteboon: Import HTML]
```

## Compatibility

- Requires n8n version 1.0.0 or later

## Support

For issues, questions, or feature requests:

- [GitHub Issues](https://github.com/siteboon/n8n-nodes-siteboon/issues)
- [Siteboon Support](https://siteboon.com/support)
- Email: [support@siteboon.com](mailto:support@siteboon.com)

## License

[MIT](LICENSE.md) © Siteboon
