import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientApiService } from 'src/app/shared/api/client/clientApi.service';

@Component({
  selector: 'admin-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  constructor(private api: ClientApiService, private build: FormBuilder) {}
  clients!:any
  clientForm!:FormGroup
  editForm !: FormGroup;

  editPanel: boolean = false;


  addClient() {
    let client = {
      fullName: this.clientForm.value.fullName,
      dob: this.clientForm.value.dob,
      email: this.clientForm.value.email,
      phone: this.clientForm.value.phone,
      fullAddress: this.clientForm.value.fullAddress,


    }
 
    this.api.addClient(client).subscribe({
      next: res => {
        console.log(res)
        this.clients.push(res);
      }
    });
  }
  updateClient() {
    let client = {
      id: this.editForm.value.id,
      fullName: this.editForm.value.fullName,
      dob: this.editForm.value.dob,
      email: this.editForm.value.email,
      phone: this.editForm.value.phone,
      fullAddress: this.editForm.value.fullAddress


    }
    this.api.updateClient(client).subscribe({
      next: res => {
        console.log(res);
        this.editPanel = false;
        this.api.fetchClients();
      }      
    });    
  }

  delClient(client: any) {
    this.api.delClient(client.id).subscribe({
      next: res => {
        console.log(res);
        this.clients.forEach( (emp: any, index: number) => {
          if (emp.id === client.id ) {
            this.clients.splice(index, 1)
          }
        })
 
      }
    });
  }

  showEdit(client: any) {
    this.editForm.patchValue({id: client.id});
    this.editForm.patchValue({fullName: client.fullName});
    this.editForm.patchValue({dob: client.dob});
    this.editForm.patchValue({email: client.email});
    this.editForm.patchValue({phone: client.phone});
    this.editForm.patchValue({fullAddress: client.fullAddress});

    this.editPanel = true;
  }

  ngOnInit(): void {
      this.api.fetchClients().subscribe({
        next: (data:any) => {
          console.log(data);
          this.clients = data.data
          
        },
        error: (e:any) => {
          console.log(e);
          
        }
      })

      this.clientForm = this.build.group({
        fullName: [''],
        dob: [''],
        email: [''],
        phone: [''],
        fullAddress: ['']
      });

      this.editForm = this.build.group({
        id: [''],
        fullName: [''],
        dob: [''],
        email: [''],
        phone: [''],
        fullAddress: ['']
      });
  }
}
