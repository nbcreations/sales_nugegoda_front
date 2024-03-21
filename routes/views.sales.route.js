const express = require("express");
const router = express.Router();

/*******************
* Global variables 
********************/
var sales = __dirname + "/../views/sales/"; // global folder path

//sales Panel variables
const { header_tags } = require("./../views/components/header_tags");
const { script_tags } = require("./../views/components/script_tags");
const { sidebar } = require("../views/components/sidebar");
const { top_header } = require("../views/components/top_header");

const dotenv = require('dotenv');
dotenv.config({ path: '.env/config.env' });

/**
 * @Details
 * sales Routes 
 */

router.get("/page1", async (req, res) => {

    try {

        res.render(
            sales + "page1.html",
            {
                header_tags: header_tags,
                script_tags: script_tags,
                top_header: top_header,
                sidebar: sidebar,
            }
        );

    } catch (err) {
        console.log(err);
        res.render(
            global + "500.html"
        );
    }

});

router.get("/page2", async (req, res) => {

    try {

        res.render(
            sales + "page2.html",
            {
                header_tags: header_tags,
                script_tags: script_tags,
                top_header: top_header,
                sidebar: sidebar,
            }
        );

    } catch (err) {
        console.log(err);
        res.render(
            global + "500.html"
        );
    }

});

router.get("/page3", async (req, res) => {

    try {

        res.render(
            sales + "page3.html",
            {
                header_tags: header_tags,
                script_tags: script_tags,
                top_header: top_header,
                sidebar: sidebar,
            }
        );

    } catch (err) {
        console.log(err);
        res.render(
            global + "500.html"
        );
    }

});



module.exports = router;