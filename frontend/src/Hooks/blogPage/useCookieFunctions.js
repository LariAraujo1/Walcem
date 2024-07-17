import { useEffect } from 'react';
import Cookies from 'js-cookie';

const useCookieFunctions = () => {
  useEffect(() => {
    Cookies.set('nomeDoCookie', 'valorDoCookie', { expires: 7 });
    const valorCookie = Cookies.get('nomeDoCookie');
    console.log(valorCookie);
    Cookies.remove('nomeDoCookie');
  }, []);
};

export default useCookieFunctions;
