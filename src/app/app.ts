import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selectedFile: File | null = null;
  jobDescription: string = '';
  analysisResult: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private http: HttpClient,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.errorMessage = '';
      this.analysisResult = '';
    }
  }

  analyzeResume(): void {
    this.errorMessage = '';
    this.analysisResult = '';

    if (!this.selectedFile) {
      this.errorMessage = 'Please upload a resume PDF.';
      return;
    }

    if (!this.jobDescription.trim()) {
      this.errorMessage = 'Please paste a job description.';
      return;
    }

    const formData = new FormData();
    formData.append('resume', this.selectedFile);
    formData.append('jobDescription', this.jobDescription);

    this.isLoading = true;
    this.changeDetectorRef.detectChanges();

    console.log('Sending request to backend...');

    this.http.post(
      'http://localhost:8080/api/resume/analyze',
      formData,
      { responseType: 'text' }
    ).subscribe({
      next: (response: string) => {
        console.log('Backend response received:', response);

        this.analysisResult = response;
        this.errorMessage = '';
        this.isLoading = false;

        this.changeDetectorRef.detectChanges();
      },
      error: (error) => {
        console.error('Backend error:', error);

        this.errorMessage = 'Something went wrong. Please make sure Spring Boot and Ollama are running.';
        this.analysisResult = '';
        this.isLoading = false;

        this.changeDetectorRef.detectChanges();
      },
      complete: () => {
        console.log('Request completed');

        this.isLoading = false;
        this.changeDetectorRef.detectChanges();
      }
    });
  }
}
