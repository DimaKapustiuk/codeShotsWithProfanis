export interface IComponentConfig {
  porfolioId: number;
  areaId: number;
  importComponentPath: string;
  componentName: string;
  inputsComponent: any;
}

export interface IComponent {
  component: () => Promise<any>;
  inputs: any;
}