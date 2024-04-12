import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel, CreateEditionModel, EditionModel } from './editions';

const api = "https://localhost:7161/api/Edition/";

@Injectable({
  providedIn: 'root'
})
export class EditionService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<EditionModel[]> {
    return this.http.get<EditionModel[]>(api + "all");
  }

  getCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(api + "categories");
  }

  get(id: number): Observable<EditionModel> {
    return this.http.get<EditionModel>(api + id);
  }

  edit(model: EditionModel): Observable<any> {
    return this.http.put<EditionModel>(api, model);
  }

  create(item: CreateEditionModel): Observable<any> {
    console.log("Creating product:", item);

    const formData = new FormData();

    for (const key in item) {
      formData.append(key, item[key as keyof CreateEditionModel] as string | Blob);
    }

    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
    return this.http.post(api, formData, { headers: headers }); 
  }

  delete(id: number): Observable<any> {
    console.log("Deleting product id: " + id);
    return this.http.delete(api + id);
  }
}