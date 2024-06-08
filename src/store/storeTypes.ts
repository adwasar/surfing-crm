import { Auth } from './slice/authSlice';
import { Cookie } from './slice/authCookieSlice';


export interface RootState {
  auth: Auth;
  authCookie: Cookie;
}
