import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participant } from '../models/participant.model';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  private apiUrl = 'http://localhost:7200/api/participants';

  constructor(private http: HttpClient) { }

  getParticipants(): Observable<Participant[]> {
    return this.http.get<Participant[]>(this.http://localhost:7200/api/participants);
  }

  getParticipant(id: number): Observable<Participant> {
    return this.http.get<Participant>
  }


}