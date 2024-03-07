export type ICategoryType = string | undefined;
export type ITagsType = string[] | undefined;

export interface IFilterType {
  category?: ICategoryType;
  tags?: ITagsType;
}
