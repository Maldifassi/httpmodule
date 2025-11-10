import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'; // controlla il path

export interface Apod {
  title: string;
  explanation: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class NasaService {
  constructor(private http: HttpClient) {}

  getApod() {
    return this.http.get<Apod>(
      `https://api.nasa.gov/planetary/apod?api_key=${environment.nasaKey}`
    );
  }
}
