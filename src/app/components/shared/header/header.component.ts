import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ShoppingCart } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly ShoppingCart = ShoppingCart;
  countCard = signal(0);
}
