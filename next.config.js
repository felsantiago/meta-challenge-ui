module.exports = {
  async headers() {
    return [
      {
        source: '/(.*?)',
        headers: [
          {
            key: 'x-frame-options',
            value: 'SAMEORIGIN'
          }
        ]
      }
    ];
  },
  images: {
    domains: ['www.meta.com.br', 's3.us-west-2.amazonaws.com', 's3-us-west-2.amazonaws.com', 's3-sa-east-1.amazonaws.com', 's3.sa-east-1.amazonaws.com', 's3.amazonaws.com'],
    deviceSizes: [300, 640, 960, 1440, 1920]
  },
  poweredByHeader: false,
  publicRuntimeConfig: {
    NEXT_PUBLIC_METADATA_IMAGE: '/image.jpg',
    NEXT_PUBLIC_ACCEPTED_THEME: 'meta'
  }
};
