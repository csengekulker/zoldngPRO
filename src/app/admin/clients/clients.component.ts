import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientApiService } from 'src/app/shared/api/client/clientApi.service';

@Component({
  selector: 'admin-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export default class ClientsComponent implements OnInit {
  constructor(private api: ClientApiService, private build: FormBuilder) {}
  clients!:any
  clientForm!:FormGroup
  form !: FormGroup;
  keyword!:string

  editPanel: boolean = false;
  modalTitle!:string
  editing:boolean = false

  formFields = [
    {
      forid: 'name',
      label: 'Teljes nev',
      formControlName: 'fullName',
      type: 'text'
    },
    {
      forid: 'dob',
      label: 'Szuletesi ido',
      formControlName: 'dob',
      type: 'date'
    },
    {
      forid: 'email',
      label: 'Email',
      formControlName: 'email',
      type: 'email'
    },
    {
      forid: 'phone',
      label: 'Telefon',
      formControlName: 'phone',
      type: 'text'
    },
    {
      forid: 'fullAddress',
      label: 'Lakcim',
      formControlName: 'fullAddress',
      type: 'text'
    }
  ]

  add():void { this.modalTitle = 'Uj vendeg felvetele'; this.editing = false}

  edit(client: any) {
    // FIXME: load values into form 
    this.form.patchValue({id: client.id});
    this.form.patchValue({fullName: client.fullName});
    this.form.patchValue({dob: client.dob});
    this.form.patchValue({email: client.email});
    this.form.patchValue({phone: client.phone});
    this.form.patchValue({fullAddress: client.fullAddress});

    this.modalTitle = 'Adatok szerkesztese'
    this.editing = true;
  }

  formSubmit(): void {
    if (!this.editing) {
      this.addClient()
    } else {
      this.updateClient()
    }
  }


  search(key: string): void {
    this.clients = this.clients.filter((val:any) =>
      val.fullName.toLowerCase().includes(key)
    );
  }

  fetchClients() {
    this.api.fetchClients().subscribe({
      next: (data:any) => {
        this.clients = data.data
      },
      error: (e:any) => console.log(e)
    })
  }

  addClient() {
    // TODO: validate on backend, then load errors in modal
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
        // this.clients.push(res.data);
        this.clientForm.reset()
        this.fetchClients()
      },
      error: (e:any) => {
        console.log(e.error.message);
        
      }
    });
  }

  updateClient() {
    let client = {
      id: this.form.value.id,
      fullName: this.form.value.fullName,
      dob: this.form.value.dob,
      email: this.form.value.email,
      phone: this.form.value.phone,
      fullAddress: this.form.value.fullAddress
    }

    this.api.updateClient(client).subscribe({
      next: res => {
        console.log(res);
        this.editPanel = false;
        this.fetchClients();
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
        this.fetchClients()

      }
    });
  }



  ngOnInit(): void {
    this.fetchClients()

      this.clientForm = this.build.group({
        fullName: [''],
        dob: [''],
        email: [''],
        phone: [''],
        fullAddress: ['']
      });

      this.form = this.build.group({
        id: [''],
        fullName: [''],
        dob: [''],
        email: [''],
        phone: [''],
        fullAddress: ['']
      });
  }
}
