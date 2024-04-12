export interface EditionModel {
    id: number;
    name: string;
    description: string | null;
    price: number;
    imageUrl: string | null;
    discount: number;
    TimeProgress: number;
    categoryId: number;
    categoryName: string;
}

export interface CategoryModel {
    id: number;
    name: string;
}

export interface CreateEditionModel {
    name: string;
    description: string | null;
    price: number;
    discount: number;
    image: File | null;
    categoryId: number;
}