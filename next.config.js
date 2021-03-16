const config = require('./src/conf');

const SanitizingPolicy = "default-src 'self' 'unsafe-inline' 'unsafe-eval';frame-src 'self' vars.hotjar.com;child-src 'self';script-src 'unsafe-eval' 'unsafe-inline' 'self' script.hotjar.com static.hotjar.com *.nr-data.net js-agent.newrelic.com *.amplitude.com googletagmanager.com *.googletagmanager.com;font-src 'self' 'unsafe-inline' *;img-src 'self' 'unsafe-inline' data: *;style-src 'self' 'unsafe-inline' 'unsafe-eval' *;connect-src localhost localhost:3000 *.hotjar.com vc.hotjar.io wss://*.hotjar.com *.nr-data.net *.newrelic.com js-agent.newrelic.com *.bonuz.com *.amplitude.com;media-src 'self';object-src;form-action 'self';frame-ancestors 'none';base-uri 'self'";

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*?)',
        headers: [
          {
            key: 'x-frame-options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Content-Security-Policy-Report-Only',
            value: SanitizingPolicy
          }
        ]
      }
    ];
  },
  images: {
    domains: ['s3.us-west-2.amazonaws.com', 's3-us-west-2.amazonaws.com', 's3-sa-east-1.amazonaws.com', 's3.sa-east-1.amazonaws.com', 's3.amazonaws.com'],
    deviceSizes: [300, 640, 960, 1440, 1920]
  },
  poweredByHeader: false,
  publicRuntimeConfig: {
    NEXT_PUBLIC_METADATA_IMAGE: config.get('NEXT_PUBLIC_METADATA_IMAGE'),
    NEXT_PUBLIC_ACCEPTED_THEME: config.get('NEXT_PUBLIC_ACCEPTED_THEME')
  }
};
