import {Color} from './color.model';

export class Task {
  public id?: string;
  public name: string;
  public description: string;
  public selected: boolean;
  public markers: Color[];

  constructor(obj: any) {
    this.id = obj._id;
    this.name = obj.name;
    this.description = obj.description;
    this.selected = obj.selected;
    this.markers = obj.markers.map((marker: Color) => new Color(marker));
  }
}
