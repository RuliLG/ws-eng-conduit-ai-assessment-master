import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '@realworld/core/http-client';
import { HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserStatsService {
  constructor(private apiService: ApiService) {}

  getUserStats(): Observable<any[]> {
    return this.apiService.get<any[]>('/users/stats');
  }
}
