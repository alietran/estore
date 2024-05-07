export interface ICategory {
    id: number;
    label: string;
    icon?: string;
    items: ICategoryChild[];
  }

  export interface ICategoryChild {
    label: string;
  }
