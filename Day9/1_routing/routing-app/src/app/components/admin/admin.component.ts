import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit, OnDestroy {
  message: string;
  users?: Array<User>;
  gu_sub?: Subscription;

  constructor(private usersService: UsersService) {
    this.message = 'Loading Data, please wait...';
  }

  ngOnInit(): void {
    this.gu_sub = this.usersService.getAllUsers().subscribe({
      next: (data: Array<User>) => {
        this.users = data;
        this.message = '';
      },
      error: (err: string) => {
        this.message = err;
      }
    });
  }

  ngOnDestroy(): void {
    this.gu_sub?.unsubscribe();
  }
}
