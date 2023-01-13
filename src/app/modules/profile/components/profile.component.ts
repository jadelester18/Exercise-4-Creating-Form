import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  emailArray: FormControl;
  nameArray: FormControl;
  bioArray: FormControl;
  activeArray: FormControl;
  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      email: ['jadeballester@gmail.co'],
      name: ['jade'],
      bio: ['CDP'],
      active: ['not active'],
    });

    this.emailArray = this.profileForm.get('email') as FormControl;
    this.nameArray = this.profileForm.get('name') as FormControl;
    this.bioArray = this.profileForm.get('bio') as FormControl;
    this.activeArray = this.profileForm.get('active') as FormControl;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
