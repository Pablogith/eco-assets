export interface UiState {
  overlay: {
    isOpen: boolean;
    title: string;
    component: UiStateComponents | null;
    data?: any;
  };
}

export enum UiStateComponents {
  BatteryEditFormComponent = 'BatteryEditFormComponent',
  BatteryCreateFormComponent = 'BatteryCreateFormComponent',
}
