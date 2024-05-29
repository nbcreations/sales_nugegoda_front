const {render_data} = require("./../services/render");

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

    // Get userInformation
    let userInformation = await checkUser(req.authToken);
    if(!userInformation.status) {
        console.error("Error getting user information");
        res.redirect("/");
        return;
    }
    req.userId = userInformation.data.id;
    req.role = userInformation.data.role;

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

// This is for get user information from backend and check if cookie is valid for specific user
const checkUser = async (token) => {
    try {
        let check = await render_data('/api/v1/user/check', token);
        return check;
    } catch ( err ) {
        console.error( err );
        return "";
    }
}

module.exports = {authorize, authorize2};