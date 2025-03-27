export interface StartMenuItem {
  id: string;
  label: string;
  icon?: string;
  onClick?: () => void;
  children?: StartMenuItem[];
}
