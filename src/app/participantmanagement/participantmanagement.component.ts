import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../services/participant.service';
import { Participant } from '../models/participant.model';

@Component({
  selector: 'app-participant-management',
  templateUrl: './participant-management.component.html',
  styleUrls: ['./participant-management.component.css']
})
export class ParticipantManagementComponent implements OnInit {
  participants: Participant[] = [];
  participant: Participant = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    jobTitle: ''
  };

  constructor(private participantService: ParticipantService) { }

  ngOnInit(): void {
    this.loadParticipants();
  }

  loadParticipants() {
    this.participantService.getParticipants().subscribe((data: Participant[]) => {
      this.participants = data;
    });
  }

  onSubmit() {
    if (this.participant.id === 0) {
      this.participantService.createParticipant(this.participant).subscribe(() => {
        this.resetForm();
        this.loadParticipants();
      });
    } else {
      this.participantService.updateParticipant(this.participant).subscribe(() => {
        this.resetForm();
        this.loadParticipants();
      });
    }
  }

  editParticipant(participant: Participant) {
    this.participant = { ...participant };
  }

  deleteParticipant(id: number) {
    this.participantService.deleteParticipant(id).subscribe(() => {
      this.loadParticipants();
    });
  }

  resetForm() {
    this.participant = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      department: '',
      jobTitle: ''
    };
  }
}