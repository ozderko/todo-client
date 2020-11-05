export class Color {
  public id: string;
  public color: string;

  constructor(obj: any) {
    this.id = obj._id;
    this.color = obj.color;
  }
}
