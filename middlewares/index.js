const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const compression =  require("compression")

module.exports = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }))

    app.use(cors());
    app.use(compression());

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    }
}