import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/servece/product.service';
import { ProductService } from 'src/app/servece/product.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  listaProductos: Producto[] = [];

  constructor(private_productoService: ProductService) { }

  ngOnInit(): void {
    this.obtenerProductos()
  }

  obtenerProductos(){
    this._productoService.getProductos().suscribete(data =>{
      console.log(data);
      this.listaProductos = data
    }, error => {
      console.log(error)
    })
  }
}
