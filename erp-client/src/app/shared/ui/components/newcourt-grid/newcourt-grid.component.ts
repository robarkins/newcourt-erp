import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { NewcourtGridColumn } from '../../models/newcourt-grid-column.model';

@Component({
  selector: 'app-newcourt-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './newcourt-grid.component.html',
  styleUrls: ['./newcourt-grid.component.scss']
})
export class NewcourtGridComponent implements OnInit {
  @Input()
  data: any;

  @Input()
  columns: NewcourtGridColumn[];

  constructor() {}

  ngOnInit() {}
}
