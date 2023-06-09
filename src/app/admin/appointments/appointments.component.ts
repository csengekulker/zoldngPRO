import { Component, OnInit } from '@angular/core';
import { AppointmentApiService } from 'src/app/shared/api/appointments/appointmentApi.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export default class AppointmentsComponent implements OnInit {
  appointments!:any

  constructor(private api: AppointmentApiService) { }

  ngOnInit(): void {
      this.api.fetchApts().subscribe({
        next: (data:any) => {
          console.log(data.data);
          data.data.forEach((row:any) => {
            row.date = row.date.replaceAll('-', '. ')
            row.start = row.start.slice(0, 5)
            row.end = row.end.slice(0, 5)
          });
          
          this.appointments = data.data
        },
        error: (e:any) => {
          console.error(e)
        }
      })
  }

}
