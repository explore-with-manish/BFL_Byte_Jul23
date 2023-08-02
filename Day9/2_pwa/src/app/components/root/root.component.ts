import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html'
})
export class RootComponent implements OnInit{
  
  isOnline: boolean = false;
  ngOnInit(): void {
    this.updateOnlineStatus();

    window.addEventListener('online', this.updateOnlineStatus.bind(this));
    window.addEventListener('offline', this.updateOnlineStatus.bind(this));
  }

  private updateOnlineStatus():void {
    this.isOnline = navigator.onLine;
  }

}
