const path = require("path");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
	experimental: {
		outputStandalone: true,
	},
	assetPrefix: isProd ? "https://notes.marcocaldera.com/" : "",
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	webpack: function (config, { dev, isServer }) {
		config.module.rules.push({
			test: /\.md$/,
			use: "raw-loader",
		});

		if (!dev && !isServer) {
			Object.assign(config.resolve.alias, {
				react: "preact/compat",
				"react-dom/test-utils": "preact/test-utils",
				"react-dom": "preact/compat",
			});
		}
		return config;
	},
};
