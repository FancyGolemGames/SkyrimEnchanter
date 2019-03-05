import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class EnchantmentProvider {
  
  public apparelEnch = [];
  public weaponEnch = [];
  public EnchantmentModel ={
    name: "",
    head: false,
    neck: false,
    chest: false,
    hands: true,
    finger: true,
    feet: false,
    shield: false,
    baseMagnitude: "",
    cost: 0
  }
    
  private tempEnch;
  
  constructor(public http: HttpClient) {
      this.importApparel();
  }
    
  importApparel(){
      this.http.get('assets/Apparel.json').subscribe(data => {
            console.log(data);
        });
      
      /*this.tempEnch = JSON.parse(JSON.stringify(this.EnchantmentModel));
      this.apparelEnch.push();*/
  }

}
