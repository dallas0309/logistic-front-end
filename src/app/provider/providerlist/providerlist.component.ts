import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../../provider.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StorageService} from '../../storage.service';

@Component({
  selector: 'app-providerlist',
  templateUrl: './providerlist.component.html',
  styleUrls: ['./providerlist.component.css']
})
export class ProviderlistComponent implements OnInit {
  public user;
  public providers = [];
  public errorMsg;
  constructor(private providerService: ProviderService,
              private router: Router,
              private route: ActivatedRoute,
              private storage: StorageService) { }

  ngOnInit() {
    this.user = this.storage.getUser();
    this.providerService.getProvider().subscribe(
      (data) => this.providers = data,
      (error) => this.errorMsg = error
    );
  }

  detail(provider) {
    this.router.navigate([provider.id], { relativeTo: this.route });
  }
  create() {
    // this.router.navigate(['/new/providers']);
    this.router.navigate(['/provider/new']);
  }
  delete(id, index) {
    this.providerService.deleteProvider(id).subscribe(
      response => {
        this.providers.splice(index, 1);
      },
      error => console.error('Error!', error)
    );
    // this.router.navigate(['/providers']);
  }
  edit(provider) {
    this.router.navigate(['/provider', provider.id, 'edit']);
  }

}
