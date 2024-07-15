export interface Product{
    id?: number ;
    title: string | null;
    price: number ;
    description: string | null;
    category: string | null;
    image:string;
    //rating: Rating;
}

// export interface Rating{
//     rate:  number;
//     count: number;
// }