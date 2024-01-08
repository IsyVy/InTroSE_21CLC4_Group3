import Cookies from 'js-cookie'

export const getCookies = (name) => {
    return Cookies.get(name)||null;
}

export const removeCookieCustom = (name) => {
    Cookies.remove(name);
}

export const setCookieCustom = (name, value, days) => {
    if (Cookies) {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + days);
        Cookies.set(name, value, { expires: expirationDate });
    } else {
        console.error('Error when use cookies');
    }
}