import {Component, HostBinding, OnInit} from '@angular/core';
import {COUNTRIES} from '../../data/model/db';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {Country} from "../../data/model/Country";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.hero, form', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(-30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ]),
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({ opacity: 0, width: '0px' }),
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 1, width: '*' })),
          ]),
        ], { optional: true })
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 0, width: '0px' })),
          ]),
        ])
      ]),
    ]),
  ]
})


export class CountriesComponent implements OnInit {

  constructor() { }
  get listOfCountries() {
    return this._listOfCountries;
  }
  @HostBinding('@pageAnimations')
  public animatePage = true;

  _listOfCountries = [];
  countryTotal = -1;

  id: string = 'id';
  name: string = 'name';
  reverse = false;

  ngOnInit() {
    this._listOfCountries = COUNTRIES;
  }
  sortById(id) {
    this.id = id;
    this.reverse = !this.reverse;
  }

  sortByName(name) {
    this.name = name;
    this.reverse = !this.reverse;
  }

  updateCriteria(criteria: string) {
    criteria = criteria ? criteria.trim() : '';

    this._listOfCountries = COUNTRIES.filter(country => country.name.toLowerCase().includes(criteria.toLowerCase()));
    const newTotal = this.listOfCountries.length;

    if (this.countryTotal !== newTotal) {
      this.countryTotal = newTotal;
    } else if (!criteria) {
      this.countryTotal = -1;
    }
  }
}
