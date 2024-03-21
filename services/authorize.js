const authorize = async ( req, res, next ) => {

    if ( req.headers.cookie === undefined ) {
        req.authToken = "";
        next();
        return;
    }

    let result = getCookie( 'auth', req.headers.cookie );

    if ( !result.status ) {
        req.authToken =  "";
        next();
        return;
    }

    req.authToken = result.data;

    next();

};
const authorize2 = async ( req ) => {

    if ( req.headers.cookie === undefined ) {
        return req.authToken = "";
        return;
    }

    let result = getCookie( 'auth', req.headers.cookie );

    if ( !result.status ) {
        return req.authToken =  "";
        return;
    }

    return result.data;

};

const getCookie = (cookie_name, cookie) => {
    const re = new RegExp(`(?<=${cookie_name}=)[^;]*`);
    try {
        return {
            "status": true,
            "data": cookie.match(re)[0]
        }
    } catch {
        return {
            "status": false
        }
    }
};

module.exports = {authorize, authorize2};