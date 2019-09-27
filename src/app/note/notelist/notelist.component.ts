import { Component, OnInit } from '@angular/core';
import {NoteService} from '../../note.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {StorageService} from '../../storage.service';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})
export class NotelistComponent implements OnInit {
  public user;
  public userId;
  public providerId;
  public notes = [];
  public errorMsg;
  constructor(private noteService: NoteService,
              private route: ActivatedRoute,
              private router: Router,
              private storage: StorageService) { }

  ngOnInit() {
    this.user = this.storage.getUser();
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.providerId = id;
    });
    this.noteService.getNote(this.providerId).subscribe(
      (data) => {
        console.log(data);
        this.notes = data;
      },
      (error) => {this.errorMsg = error; console.log(error); }
    );
  }

  add() {
    this.router.navigate(['/provider', this.providerId, 'note', 'new']);
  }
  edit(note) {
    this.router.navigate(['/provider', this.providerId, 'note', note.id, 'edit']);
  }

  delete(id, index) {
    // console.log(id);
    this.noteService.deleteNote(this.providerId, id).subscribe(
      response => {
        this.notes.splice(index, 1);
      },
      error => console.error('Error!', error)
    );
  }

  confirmDelete(note, i) {
    // console.log(note);
    if (confirm('Are you sure to delete')) {
      // console.log(note);
      this.delete(note.id, i);
      console.log('delete success!');
    }
  }

}
