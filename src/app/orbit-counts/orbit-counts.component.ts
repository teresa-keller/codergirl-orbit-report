import { Input, Component, OnInit } from '@angular/core';
import { Satellite } from '../satellite';


@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  
  total:number;
  spaceDebrisTotal: number;
  communicationTotal: number;
  probeTotal: number;
  positioningTotal: number;
  spaceStationTotal: number;
  telescopeTotal: number;
  constructor() {
    this.spaceDebrisTotal = 0;
    this.communicationTotal = 0;
    this.probeTotal = 0;
    this.positioningTotal = 0;
    this.spaceStationTotal = 0;
    this.telescopeTotal = 0;
  }

  @Input() satellites: Satellite[];

  ngOnInit() {
  }

  countingSpaceDebris(array) {
    for (let item of array) {
      if (item.type.toLowerCase() === 'space debris') {
        this.spaceDebrisTotal +=1;
      } 
    }
    return this.spaceDebrisTotal;
  }

  countingCommunication(array) {
    for (let item of array) {
      if (item.type.toLowerCase() === 'communication') {
        this.communicationTotal +=1;
      } 
    }
    return this.communicationTotal;
  }

  countingProbe(array) {
    for (let item of array) {
      if (item.type.toLowerCase() === 'probe') {
        this.probeTotal +=1;
      } 
    }
    return this.probeTotal;
  }
  
  countingPositioning(array) {
    for (let item of array) {
      if (item.type.toLowerCase() === 'positioning') {
        this.positioningTotal +=1;
      } 
    }
    return this.positioningTotal;
  }

  countingSpaceStation(array) {
    for (let item of array) {
      if (item.type.toLowerCase() === 'space station') {
        this.spaceStationTotal +=1;
      } 
    }
    return this.spaceStationTotal;
  }

  countingTelescope(array) {
    for (let item of array) {
      if (item.type.toLowerCase() === 'telescope') {
        this.telescopeTotal +=1;       
      } 
    }
    return this.telescopeTotal;
  }
}