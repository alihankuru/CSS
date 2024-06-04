import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductModel, productTypes } from '../../models/product.model';
import { HttpService } from '../../services/http.service';
import { SwalService } from '../../services/swal.service';
import { NgForm } from '@angular/forms';
import { ProductPipe } from "../../pipes/product.pipe";
import { SharedModule } from '../../modules/shared.module';

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
    imports: [SharedModule,ProductPipe]
})
export class ProductsComponent implements OnInit{
  products: ProductModel[] = [];
  search:string="";
  types=productTypes;

  @ViewChild("createModalCloseBtn") createModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;
  @ViewChild("updateModalCloseBtn") updateModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;



  createModel:ProductModel=new ProductModel();
  updateModel:ProductModel=new ProductModel();

  constructor(
    private  http: HttpService,
    private swall: SwalService
  ){}

  ngOnInit(): void{
    this.getAll();
  }

  getAll(){
    this.http.post<ProductModel[]>("Products/GetAll",{},(res)=>{
      this.products=res;
    });
  }

  create(form: NgForm){
    if(form.valid){
      this.http.post<string>("Products/Create",this.createModel,(res)=>{
        this.swall.callToas(res);
        this.createModel=new ProductModel();
        this.createModalCloseBtn?.nativeElement.click();
        this.getAll();
      });
    }
  }

  deleteById(model: ProductModel){
    this.swall.callSwal("Depoyu Sil?",`${model.name} Ürünü silmek istiyor musunuz?`,()=> {
      this.http.post<string>("Products/DeleteById",{id: model.id},(res)=> {
        this.getAll();
        this.swall.callToas(res,"info");
      });
    })
  }

  get(model: ProductModel){
    this.updateModel={...model};
  }

  update(form: NgForm){
    if(form.valid){
      this.http.post<string>("Products/Update",this.updateModel,(res)=>{
        this.swall.callToas(res,"info");
       
        this.updateModalCloseBtn?.nativeElement.click();
        this.getAll();
      });
    }
  }
}
