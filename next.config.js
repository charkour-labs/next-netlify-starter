/**
 * @type {import('next').NextConfig}
 */
module.exports = async () => {
  /**
   * @type {import('next').NextConfig}
   */
  const config = {
    i18n: {
      locales: ["en-US"],
      defaultLocale: "en-US",
    },
    swcMinify: false,
    experimental: {
      serverComponents: false,
    },
  };

  // Useful to see the config in deployments
  console.log("next.config.js", JSON.stringify(config, null, 2));

  return config;
};
