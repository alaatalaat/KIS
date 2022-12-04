import { CartService } from './../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { PromotionAdsService } from './../services/promotion-ads.service';
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { filter, map, Subscription, Subscriber } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  showAll:boolean=false;
  like_dislike:boolean =true;
  stars = [1,2,3,4,5];
  rating = 2 ;
  public allProducts:any;
  public allExploreProducts:any;

  constructor(public translate:TranslateService,
              private productSer:ProductsService,
              private promoAds:PromotionAdsService,
              private http:HttpClient,
              private cartService:CartService) {}

  ngOnInit(): void {
    this.productSer.getAllProducts().subscribe(res=>{
      this.allProducts = res ;
      this.allProducts.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
        a.like = true ;
      });
    });


    this.productSer.getAllExploreProd().subscribe(res=>{
      this.allExploreProducts = res ;
      this.allExploreProducts.forEach((el:any) => {
        el.like = false;
      });
      console.log(this.allExploreProducts);
    })
  }

  addToCart(item:any){
    this.cartService.addToCart(item)
  }

  // exploreProd(item:any){
  //   this.cartService.exploreProd(item);
  //   console.log(this.cartService.exploreProd(item))
  // }


}
