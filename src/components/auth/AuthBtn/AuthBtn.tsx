import { FC } from 'react';

import Button from 'src/components/ui/Button';

interface AuthBtnProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
}

const AuthBtn: FC<AuthBtnProps> = ({ text, ...restProps }) => {
  return (
    <Button mods={['modAuthBtn']} {...restProps}>
      {text}
    </Button>
  );
};

export default AuthBtn;
