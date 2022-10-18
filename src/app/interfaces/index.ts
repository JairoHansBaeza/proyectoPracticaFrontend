export interface ProductResponse {
    ok:       boolean;
    products: Product[];
}

export interface Product {
    _id:      string;
    name:     string;
    category: string;
    price:    number;
    brand:    string;
    image:    string;
    _v:      number;
}
