import { ConfigService } from './services/config.service';
import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { WidgetOneComponent } from './widget-one/widget-one.component';
import { WidgetTwoComponent } from './widget-two/widget-two.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  constructor(private configService: ConfigService) {}

  createComponentsBasedOnConfig() {
    this.configService.getConfigComponents().forEach(async (componentConfig) => {
      const componentInstance = await componentConfig.component();
      const componentRef = this.container.createComponent(componentInstance) as ComponentRef<any>;
     
      if (componentRef.instance && componentRef.instance?.closeAction) {
        componentRef.instance.closeAction.subscribe(() => console.log(this.container));
      }
  
      Object.entries(componentConfig.inputs).forEach(([key, value]) => {
        componentRef.setInput(key, value);
        // componentRef.instance = value;
      });
    });
  }

  clearComponentsBasedOnConfig() {
    this.container.clear();
  }
}
