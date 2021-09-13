export interface ISubCategories {
  id: string;
  name: string;
}

export interface ICategoriesModel {
  id: string;
  name: string;
  subCategories: ISubCategories[];
}
