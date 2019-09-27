import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../../contact.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {DialogService} from '../../dialog.service';
import {StorageService} from '../../storage.service';

@Component({
  selector: 'app-contactedit',
  templateUrl: './contactedit.component.html',
  styleUrls: ['./contactedit.component.css']
})
export class ContacteditComponent implements OnInit {
  public user;
  public providerId;
  public contactId;
  public contact;
  public submit = false;
  public contactForm: FormGroup;
  constructor(private fb: FormBuilder,
              private contactService: ContactService,
              private route: ActivatedRoute,
              private router: Router,
              private dialogService: DialogService,
              private storage: StorageService) { }

  ngOnInit() {
    this.user = this.storage.getUser();
    this.route.paramMap.subscribe((params: ParamMap) => {
      let provider_id = parseInt(params.get('id'));
      this.providerId = provider_id;
      let contact_id = parseInt(params.get('id2'));
      this.contactId = contact_id;
    });
    this.contactForm = this.fb.group({
      title: ['', ],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      fax: ['', [Validators.pattern(/^[0-9]{10}$/)]],
      toll_free: ['', [Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.pattern(/^[a-zA-Z]{1}[a-zA-Z0-9.\-_]*@[a-zA-Z]{1}[a-zA-Z.-]*[a-zA-Z]{1}[.][a-zA-Z]{2,}$/)]]
    });
    this.contactService.getContactDetail(this.providerId, this.contactId).subscribe(
      (data) => {
        this.contact = data;
        this.contactForm.setValue({
          title: this.contact.title,
          first_name: this.contact.first_name,
          last_name: this.contact.last_name,
          mobile: this.contact.mobile,
          phone: this.contact.phone,
          fax: this.contact.fax,
          toll_free: this.contact.toll_free,
          email: this.contact.email,
        });
      }
    );
  }

  onSubmit() {
    console.log(this.contactId);
    console.log(this.contactForm.value);
    this.submit = true;
    this.contactService.editContact(this.contactForm.value, this.providerId, this.user.id, this.contactId)
      .subscribe(
        response => {
          console.log('Success!', response);
          this.router.navigate(['/provider', this.providerId]);
        },
        error => console.error('Error!', error)
      );
  }

  goBack() {
    this.router.navigate(['/provider', this.providerId], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.submit === false && this.contactForm.dirty) {
      return this.dialogService.confirm();
    }
    return true;
  }
}
