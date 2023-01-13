import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CommandBarComponent } from './components/command-bar/command-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CommandBarComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [CommandBarComponent, HeaderComponent],
})
export class SharedModule {}
