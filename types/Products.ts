export interface SingleProductInterface {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

export type ProductsType = SingleProductInterface[]

export type ProductState = ProductsType | null