import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RosterComponent } from './roster/roster.component';
import { RosterRoutingModule } from './roster/roster-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RosterRoutingModule,
  ],
  declarations: [RosterComponent],
  exports: [RosterComponent],
})
export class RosterModule {}
