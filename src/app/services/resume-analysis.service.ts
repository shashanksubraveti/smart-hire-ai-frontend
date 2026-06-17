import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeAnalysisService {
  private readonly apiUrl = 'http://localhost:8080/api/resume/analyze';

  constructor(private http: HttpClient) {}

  analyzeResume(resume: File, jobDescription: string): Observable<string> {
    const formData = new FormData();
    formData.append('resume', resume);
    formData.append('jobDescription', jobDescription);

    return this.http.post(this.apiUrl, formData, {
      responseType: 'text'
    });
  }
}
