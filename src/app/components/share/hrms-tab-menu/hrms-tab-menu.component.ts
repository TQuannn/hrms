import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'hrms-tab-menu',
  templateUrl: './hrms-tab-menu.component.html',
  styleUrls: ['./hrms-tab-menu.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class HrmsTabMenuComponent {
  @Input() labelItems!: MenuItem[];
  @Input() activeItem!: MenuItem;
  @Output() handleActiveItemChange = new EventEmitter();

  itemChanges(item: MenuItem): void {
    this.handleActiveItemChange.emit(item);
  }
}
