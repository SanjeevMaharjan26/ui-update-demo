import { ChangeDetectorRef, Component, EventEmitter, Input, NgZone, OnDestroy, OnInit, Output } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface NavItem {
  label: string;
  route?: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-nav-item',
  standalone: false,
  templateUrl: './nav-item.html',
  styleUrl: './nav-item.scss',
})
export class NavItemComponent implements OnInit, OnDestroy {
  @Input() item!: NavItem;
  @Input() index = 0;
  @Output() toggled = new EventEmitter<number>();

  isOpen = false;

  private routerSub = Subscription.EMPTY;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
  ) {}

  ngOnInit(): void {
    this.routerSub = this.router.events
      .pipe(filter(e => e instanceof NavigationStart))
      .subscribe(() => {
        this.ngZone.run(() => {
          this.isOpen = false;
          this.cdr.detectChanges();
        });
      });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  toggle(): void {
    this.ngZone.run(() => {
      this.isOpen = !this.isOpen;
      this.cdr.detectChanges();
      this.toggled.emit(this.index);
    });
  }

  close(): void {
    this.ngZone.run(() => {
      this.isOpen = false;
      this.cdr.detectChanges();
    });
  }
}
