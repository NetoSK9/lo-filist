export abstract class ResponsePageable {
    abstract content: any[];
    abstract firist: boolean;
    abstract last: boolean;
    abstract number:number;
    abstract numberofElements: number;
    abstract pageable: any [];
    abstract size: number;
    abstract sort: number;
    abstract totalElementts: number;
    abstract totalpages: number;
}