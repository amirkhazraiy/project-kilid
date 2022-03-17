import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {BackEndService} from '../../services/back-end.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  cities = [
    {title: 'tehran', titleFa: 'تهران'}
  ];
  typeOption = [
    {title: 'اپارتمان', key: 'prpApartmentTower'},
    {title: 'ویلا', key: 'prpVillaGarden'},
    {title: 'دفترکار', key: 'prpOffice'},
  ];
  cityTitle;
  dataList: any[] = [];
  typeSelected: string = '';

  constructor(private activeRoute: ActivatedRoute, private backendService: BackEndService) {
    this.activeRoute.params.subscribe(
      (param: Params) => {
        if (param.city) {
          this.cityTitle = this.cities?.find(a => a.title == param.city);
        } else {
          alert('not found !');
        }


      }
    );
    this.backendService.decode({'url': 'buy-apartment/tehran'}).subscribe({
      next: data => {
        console.log('dataa', data);
      },
    });
  }

  getList(filter?) {
    this.backendService.listingSearch({
        locations: [
          {
            locationId: 2301021576,
            type: 'CITY',
            nameFa: this.cityTitle.titleFa,
            nameLat: this.cityTitle.title,
            polygon: null,
            point: null
          }
        ],
        type: 'listing',
        subType: 'buy',
        ...filter
      }
    ).subscribe((data: any) => {
      this.dataList = data.content;

    });
    console.log('data', this.dataList);
  }

  ngOnInit(): void {
    this.getList();


  }

  filterType() {
    if (this.typeSelected) {
      const filter = {};
      filter[this.typeSelected] = true;
      this.getList(filter);
    }
  }
}
