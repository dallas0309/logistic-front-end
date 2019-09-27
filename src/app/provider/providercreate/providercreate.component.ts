import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProviderService} from '../../provider.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DialogService} from '../../dialog.service';
import {Observable} from 'rxjs';
import {StorageService} from '../../storage.service';

@Component({
  selector: 'app-providercreate',
  templateUrl: './providercreate.component.html',
  styleUrls: ['./providercreate.component.css']
})
export class ProvidercreateComponent implements OnInit {
  public user;
  public submit;
  public providerForm: FormGroup;
  constructor(private fb: FormBuilder,
              private providerService: ProviderService,
              private router: Router,
              private route: ActivatedRoute,
              private dialogService: DialogService,
              private storage: StorageService) { }


  ngOnInit() {
    this.user = this.storage.getUser();
    this.providerForm = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]],
      phone: ['', [Validators.pattern(/^[0-9]{10}$/)]],
      fax: ['', [Validators.pattern(/^[0-9]{10}$/)]],
      toll_free: ['', [Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.pattern(/^[a-zA-Z]{1}[a-zA-Z0-9.\-_]*@[a-zA-Z]{1}[a-zA-Z.-]*[a-zA-Z]{1}[.][a-zA-Z]{2,}$/)]],
      start_time: ['', [Validators.required]],
      end_time: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.providerForm);
    console.log(this.providerForm.value);
    this.submit = true;
    this.providerService.addProvider(this.providerForm.value)
      .subscribe(
        response => {
          console.log('Success!', response);
          this.router.navigate(['/provider']);
        },
        error => console.error('Error!', error)
      );
  }

  goBack() {
    this.router.navigate(['/provider'], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.submit === false && this.providerForm.dirty) {
      return this.dialogService.confirm();
    }
    return true;
  }
}
