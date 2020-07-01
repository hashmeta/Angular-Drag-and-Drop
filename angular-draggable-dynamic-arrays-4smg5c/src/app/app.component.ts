import { Component } from '@angular/core';
import { CdkDragDrop, } from '@angular/cdk/drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fleet = [
    {
      "id": 1,
      "Task": "Sonair",
      "Description": "Coast Range Fawnlily",
      "status": "completed"
    }, {
      "id": 2,
      "Task": "Job",
      "Description": "Psorotichia Lichen",
      "status": "completed"
    }, {
      "id": 3,
      "Task": "Sonair",
      "Description": "Lilytree",
      "status": "new"
    }, {
      "id": 4,
      "Task": "Viva",
      "Description": "Bowstring Hemp",
      "status": "completed"
    }, {
      "id": 5,
      "Task": "Namfix",
      "Description": "Cucumberleaf Sunflower",
      "status": "new"
    }, {
      "id": 6,
      "Task": "Zamit",
      "Description": "Elegant Rockcress",
      "status": "completed"
    }, {
      "id": 7,
      "Task": "Subin",
      "Description": "Pygmy Waterlily",
      "status": "inprocess"
    }, {
      "id": 8,
      "Task": "Tres-Zap",
      "Description": "Kauaikinana Woodfern",
      "status": "inprocess"
    }, {
      "id": 9,
      "Task": "Overhold",
      "Description": " Goldenaster",
      "status": "completed"
    }, {
      "id": 10,
      "Task": "Otcom",
      "Description": "Devil Cholla",
      "status": "completed"
    }, {
      "id": 11,
      "Task": "Zontrax",
      "Description": "Thinfruit Sedge",
      "status": "completed"
    }, {
      "id": 12,
      "Task": "Y-find",
      "Description": "Desert Twinbugs",
      "status": "completed"
    }, {
      "id": 13,
      "Task": "Vagram",
      "Description": "Marsh Dandelion",
      "status": "inprocess"
    }, {
      "id": 14,
      "Task": "Bigtax",
      "Description": "Munchkin Liveforever",
      "status": "new"
    }, {
      "id": 15,
      "Task": "Greenlam",
      "Description": "Depauperate Milkvetch",
      "status": "completed"
    }

  ]
  statuses = [...new Set(this.fleet.map(a => a.status))]
  transferArrayItem() { }
  drop(event: CdkDragDrop<{}[]>) {
    const data = JSON.parse(event.item.element.nativeElement.textContent)
    const updatedData = [...this.fleet]
    console.log(typeof (updatedData))
    const oldID = updatedData.findIndex(p => p.id === data.id)
    updatedData[oldID].status = event.container.data as any
    this.fleet = updatedData
  }
  name = 'Angular';
}
