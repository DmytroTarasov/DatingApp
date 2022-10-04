import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { take } from 'rxjs/operators';
import { User } from '../models/user';
import { AccountService } from '../_services/account.service';

@Directive({
  selector: '[appHasRole]',
})
export class HasRoleDirective implements OnInit {
  @Input() appHasRole: string[];
  user: User;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private accountService: AccountService
  ) {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: (user) => {
        this.user = user;
      }
    })
  }

  ngOnInit(): void {
    // clear a view if user has no roles or the user is not authenticated
    if (!this.user?.roles || this.user == null) {
      this.viewContainerRef.clear();
      return;
    }

    // if the user's roles array contains a role which is specified as an input property into this directive
    if (this.user?.roles.some(r => this.appHasRole.includes(r))) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      // user has no required role to view some element on the page
      this.viewContainerRef.clear();
    }
  }
}
