export enum CustomButtonType {
  BUTTON = 'button',
  A = 'a',
}

export interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  textSize?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  buttonType?: CustomButtonType.BUTTON | CustomButtonType.A;
  customHref?: string;
}
