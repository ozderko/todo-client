import {Component, Input, OnInit} from '@angular/core';
import {Marker} from '../../models/marker.model';
import {Store} from '@ngrx/store';
import {State} from '../../actions/reducer/tasks.reducers';
import {SaveMarkerAction, SelectMarkerAction} from '../../actions/tasks.action';

@Component({
  selector: 'app-markers',
  templateUrl: './markers.component.html',
  styleUrls: ['./markers.component.scss']
})
export class MarkersComponent implements OnInit {
  @Input() isOpen: boolean;
  @Input() taskId: string;
  @Input() markers: Marker[];
  public isAddColor = false;
  public color: string;

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    console.log(this.markers);
  }

  selectMarker(id: string, color: string) {
    this.store.dispatch(new SelectMarkerAction(id, color));
  }

  saveMarker(colorHex: string, name: string) {
    const color = colorHex.replace(/#/gi, '');
    this.store.dispatch(new SaveMarkerAction(new Marker({color, name})));
  }

}
