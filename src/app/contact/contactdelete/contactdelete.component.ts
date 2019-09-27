import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../../contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../../contact.service';

@Component({
  selector: 'app-contactdelete',
  templateUrl: './contactdelete.component.html',
  styleUrls: ['./contactdelete.component.css']
})
export class ContactdeleteComponent implements OnInit {
  @Input()contact: Contact;
  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor(private _route: ActivatedRoute, private _router: Router,
              private contactService: ContactService) { }

  deleteContact() {
    this.contactService.deleteContact(this.contact.id, 1);
    this.notifyDelete.emit(this.contact.id);
  }

  ngOnInit() {
  }
}
