export interface IPageCreateParams {
  siteId: string;
  name: string;
  parentId?: string;
}

export interface IPageDeleteParams {
  siteId: string;
  pageId: string;
}

export interface IPageDuplicateParams {
  siteId: string;
  pageId: string;
} 