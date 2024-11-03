/** @type {import('next').NextConfig} */
const withImages = require('next-images');

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/XYIANSoftware/images/**',
            },
            {
                protocol: 'https',
                hostname: 'github.com',
                port: '',
                pathname: '/XYIANSoftware/images/**',
            },
        ],
    },
};
