import { Tag } from "./tag";

export interface project{
    id:number;
    name:string;
    summary:string;
    description:string;
    projectlink:string;
    pictures:string[]
    tags:Tag[];

}