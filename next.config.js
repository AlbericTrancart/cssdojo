module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgProps: { role: 'img', width: '100%', height: 'auto' },
            titleProp: true,
          },
        },
      ],
    });
    return config;
  },
};
