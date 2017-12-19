import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MdToolbarModule, MdIconModule, MdButtonModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from '../utils/svg.util';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  //如果不导出去只能在这个模块里用
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {
  /**
   * CoreModule要求在系统中只加载一次，所以需要以下操作
   * 它是一个模块，可在constructor进行依赖注入
   * parent: CoreModule构造函数里只写这个会进入死循环，因为在找注入的时候还是去找CoreModule，它又会去判断，为了解决这可以加SkipSelf，它会告诉模块你不要再这里找我，你可以去父级模块找，但是还会有一个问题，第一次加载CoreModule就没法找到了，所以可以用Optional，这个依赖是可选的
   */
  constructor( @Optional() @SkipSelf() parent: CoreModule, ir: MdIconRegistry, ds: DomSanitizer) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载！')
    }
    loadSvgResources(ir, ds);
  }
}
