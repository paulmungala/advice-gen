/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
});

module.exports = withPWA({
    // next js config
});
