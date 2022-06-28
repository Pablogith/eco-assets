export interface UiState {
  overlay: {
    isOpen: boolean;
    title: string;
    component: UiStateComponents | null;
  };
}

export enum UiStateComponents {
  BatteryEditFormComponent = 'BatteryEditFormComponent',
}
