export class PagedList<T> {
    items: T[];
    totalItemCount: number;
    page: number;
    pageSize: number;
}