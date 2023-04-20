import { Component, OnInit } from '@angular/core';
import { AppointmentApiService } from 'src/app/shared/api/appointments/appointmentApi.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  appointments!:any

  constructor(private api: AppointmentApiService) { }

  ngOnInit(): void {
      this.api.fetchApts().subscribe({
        next: (data:any) => {
          console.log(data.data);
          
          this.appointments = data.data
        },
        error: (e:any) => {
          console.error(e)
        }
      })
  }

}
