import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * 次模块的作用是，把大家需要的东西导进来，再组合好导出去
 */
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CommonModule],
  declarations: []
})
export class SharedModule { }
