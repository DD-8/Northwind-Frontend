import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product: Product) {
    let item = CartItems.find(c => c.product.productId === product.productId);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem: CartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItems.push(cartItem)
    }
  }

  removeFromCart(product: Product) {
    let item: CartItem = CartItems.find(c => c.product.productId === product.productId);
    item.quantity -= 1;
    if(item.quantity == 0) {
      CartItems.splice(CartItems.indexOf(item), 1);
    }
  }

  list(): CartItem[] {
    return CartItems;
  }
}
