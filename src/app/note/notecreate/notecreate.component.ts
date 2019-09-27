import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NoteService} from '../../note.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DialogService} from '../../dialog.service';
import {Observable} from 'rxjs';
import {StorageService} from '../../storage.service';

@Component({
  selector: 'app-notecreate',
  templateUrl: './notecreate.component.html',
  styleUrls: ['./notecreate.component.css']
})
export class NotecreateComponent implements OnInit {
  public user;
  public providerId;
  public submit = false;
  public noteForm: FormGroup;
  constructor(private fb: FormBuilder,
              private noteService: NoteService,
              private router: Router,
              private route: ActivatedRoute,
              private dialogService: DialogService,
              private storage: StorageService) { }

  ngOnInit() {
    this.user = this.storage.getUser();
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.providerId = id;
    });
    this.noteForm = this.fb.group({
      note: ['', [Validators.required]],
    });
  }
  onSubmit() {
    console.log(this.noteForm);
    console.log(this.noteForm.value);
    this.submit = true;
    this.noteService.addNote(this.noteForm.value, this.providerId, this.user.id)
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
    if (this.submit === false && this.noteForm.dirty) {
      return this.dialogService.confirm();
    }
    return true;
  }
}
