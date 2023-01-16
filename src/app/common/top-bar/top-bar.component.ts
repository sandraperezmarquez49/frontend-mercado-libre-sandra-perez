import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit, OnDestroy {
  searchForm: FormGroup;
  searchInput:any; 

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
 
  ) {
      this.searchForm = this.formBuilder.group({
        searchInput: [''],
      });
   }

  ngOnInit(): void {}

  search(){
    this.router.navigate(['items?search='],this.searchForm.value.searchInput);
  }


  searchView(ev:any){
    //console.log(ev)
    if(ev!==undefined && ev.length >=4){
      this.search();
      
    }else {
      this.router.navigate([""]);
    }
  }
  ngOnDestroy() {}
}
