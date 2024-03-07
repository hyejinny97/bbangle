export type ICategoryType = string | undefined;
export type ITagsType = string[] | undefined;
export type ISortType = string;

export interface IFilterType {
  category?: ICategoryType;
  tags?: ITagsType;
  sort: ISortType;
}
