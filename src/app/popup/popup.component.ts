import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDetailsService } from '../user-details.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  standalone: true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule,],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {

  userForm: any = FormGroup;

  constructor(private us:UserDetailsService, public dialogRef: MatDialogRef<PopupComponent>){}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      fName: new FormControl("",Validators.required),
      lName: new FormControl("",Validators.required),
      email: new FormControl("",[Validators.required,Validators.email]),
      profile: new FormControl(""),
    })
  }

  userData(){
    let formData = this.userForm.value;
    // this.us.addUser(formData);
    this.us.addData(formData);
    this.us.setBooleanData(true);
    console.log("login user data: ",formData);
  }

  closeMe(){
    this.dialogRef.close();
  }
}
