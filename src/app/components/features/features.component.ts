import { Component, OnInit } from '@angular/core';
import { Feature } from '../../models/feature';
import { FEATURES } from '../../Shared/features'

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  public featuresList: Feature[] = FEATURES;
  public featureSearchText: string = "";

  ngOnInit() {
  }

}
