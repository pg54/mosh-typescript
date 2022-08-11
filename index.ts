// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

interface Product {
  name: string;
  price: number;
}

class Store<T> {
  private _objects: T[] = [];
  add(obj: T): void {
    this._objects.push(obj)
  }
}

// 拓展geneirc class
class CompressibleStore<T> extends Store<T> {
  compress() {}

}

let cp = new CompressibleStore<Product>();
cp.add({name: 'apple', price: 10})