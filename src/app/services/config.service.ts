import { IComponentConfig, IComponent  } from './../interfaces/config.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  configs: IComponentConfig[] = [
    {
      areaId: 1,
      porfolioId: 1,
      importComponentPath: 'components/info/info',
      componentName: 'InfoComponent',
      inputsComponent: {
        name: 'INFO COMPONENT',
        descr: 'This is Info Component for Dynamic Test',
      },
    },
    {
      areaId: 1,
      porfolioId: 2,
      importComponentPath: 'components/note/note',
      componentName: 'NoteComponent',
      inputsComponent: {
        name: 'NOTE COMPONENT',
        descr: 'This is Note Component for Dynamic Test',
      },
    },
  ];

  getConfigComponents(): IComponent[] {
    return this.configs.map(
      ({ importComponentPath, componentName, inputsComponent }) => {
        return  {
          component: () => import(`../${importComponentPath}.component`).then((it) => it[componentName]),
          inputs: inputsComponent,
        }
      }
    );
  }
}
