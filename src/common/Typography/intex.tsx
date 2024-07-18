import { TypographyProps } from './types';

export const Typography: React.FC<TypographyProps> = ({
  fontSize = 16,
  fontWeight = 400,
  children,
  ...props
}) => {
  return (
    <p style={{ fontSize, fontWeight }} {...props}>
      {children}
    </p>
  );
};
