const express = require("express");
const router = express.Router();

/*******************
* Global variables 
********************/
var admin = __dirname + "/../views/admin/"; // global folder path
var global = __dirname + "/../views/global/"; // global folder path

//Admin Panel variables
const { header_tags } = require("./../views/components/header_tags");
const { script_tags } = require("./../views/components/script_tags");
const { sidebar } = require("../views/components/sidebar");
const { top_header } = require("../views/components/top_header");

const {render_data_post, render_data} = require("./../services/render");
const {authorize} = require("./../services/authorize");

const dotenv = require('dotenv');
dotenv.config({ path: '.env/config.env' });

/**
 * @Details
 * Admin Routes 
 */

router.get("/", async (req, res) => {

    try {

        res.render(
            admin + "login.html",
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


router.get("/product", authorize, async (req, res) => {

    try {
        let data = await render_data_post("/api/v1/product/list", req.authToken, {});
        if(!data.status){
            res.redirect("/");
            return;
        }
        res.render(
            admin + "product-list.html",
            {
                header_tags: header_tags,
                script_tags: script_tags,
                top_header: top_header,
                sidebar: sidebar,
                data: data.data
            }
        );

    } catch (err) {
        console.log(err);
        res.render(
            global + "500.html"
        );
    }

});


router.get("/orders", authorize, async (req, res) => {

    try {
        let order_bill = await render_data("/api/v1/order_bill/list", req.authToken);
        console.log("🚀 ~ router.get ~ order_bill:", order_bill)
        if(!order_bill.status){
            res.redirect("/");
            return;
        }
        res.render(
            admin + "orders.html",
            {
                header_tags: header_tags,
                script_tags: script_tags,
                top_header: top_header,
                sidebar: sidebar,
                order_bill: order_bill.data
            }
        );

    } catch (err) {
        console.log(err);
        res.render(
            global + "500.html"
        );
    }

});


router.get("/order-bill/:id", async (req, res) => {

    try {

        res.render(
            global + "invoice.html",
            {
            }
        );

    } catch (err) {
        console.log(err);
        res.render(
            global + "500.html"
        );
    }

});

router.get("/product-add", async (req, res) => {

    try {

        res.render(
            admin + "product-add.html",
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

router.get("/product-edit/:id", async (req, res) => {

    try {

        res.render(
            admin + "product-edit.html",
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


router.get("/sub-category-add", async (req, res) => {

    try {

        res.render(
            admin + "product-sub-category-add.html",
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

router.get("/sub-category-list", async (req, res) => {

    try {

        res.render(
            admin + "product-sub-category-list.html",
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

router.get("/sub-category-edit/:id", async (req, res) => {

    try {

        res.render(
            admin + "product-sub-category-edit.html",
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

router.get("/order-payment", async (req, res) => {

    try {

        res.render(
            admin + "order-payment.html",
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