export type Category = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    isActive: boolean;
    picture: string | null;
    isDefault: boolean;
    sequence: number;
    vendorId: string;
    catalogId: string;
    color: string;
};

export type CategoryLabelRendererTypes = Pick<Category, 'color' | 'name'>;

export type CategoryOptionsRendererTypes = Pick<Category, 'color' | 'name'>;
