import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// kendo
import { GridModule } from '@progress/kendo-angular-grid';

// components
import { NewcourtGridComponent } from './ui/components/newcourt-grid/newcourt-grid.component';

@NgModule({
  imports: [CommonModule, GridModule],
  declarations: [NewcourtGridComponent],
  exports: [NewcourtGridComponent]
})
export class SharedModule {}
