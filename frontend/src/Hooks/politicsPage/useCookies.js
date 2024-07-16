// (adaptado para utilizar o pacote js-cookie)

import { useEffect } from 'react';
import Cookies from 'js-cookie';

const useCookies = () => {
  useEffect(() => {
    const setCookie = (name, value, days) => {
      Cookies.set(name, value, { expires: days });
    };

    const getCookie = (name) => {
      return Cookies.get(name);
    };
    const removeCookie = (name) => {
      Cookies.remove(name);
    };

    setCookie('nomeDoCookie', 'valorDoCookie', 7);
    const valorCookie = getCookie('nomeDoCookie');

  }, []);
};

export default useCookies;
