/**
 * Site configuration — the single source of truth for all marketing copy.
 * Edit values here to update the landing page without touching component code.
 */
export const config = {
	// ── Site-wide ──────────────────────────────────────────────
	site: {
		/** Canonical domain (no trailing slash) */
		url: "https://gridforesight.com",
		/** App/dashboard URL (no trailing slash) */
		appUrl: "https://app.gridforesight.com",
		defaultDescription:
			"Predict energy demand and renewable output with machine learning. Automated data ingestion, custom model training, and real-time forecast monitoring.",
	},

	// ── Hero Section ───────────────────────────────────────────
	hero: {
		/** Main heading — keep under ~50 chars for mobile */
		heading: "Accurate energy forecasts, powered by ML",
		/** Sub-heading description — keep under ~200 chars */
		description:
			"GridForesight combines automated data ingestion with advanced ML models to deliver forecasts that energy operators actually trust.",
		/** Key stats displayed below the description */
		stats: [
			{ value: "40%", label: "more accurate" },
			{ value: "200+", label: "assets monitored" },
			{ value: "5B+", label: "data points" },
		],
		/** Primary CTA button text */
		cta: "Start Forecasting",
	},

	// ── Features Section ───────────────────────────────────────
	features: {
		heading: "Everything you need to forecast with confidence",
		description:
			"From raw data to production forecasts, GridForesight handles the entire pipeline so your team focuses on decisions, not data wrangling.",
		items: [
			{
				icon: "TrendingUp",
				title: "Demand Forecasting",
				description:
					"Predict load curves hours to weeks ahead. Reduce imbalance costs and improve scheduling accuracy.",
				color: "text-primary",
			},
			{
				icon: "Sun",
				title: "Renewable Prediction",
				description:
					"Forecast solar and wind output using weather-aware ML models tuned to your specific assets.",
				color: "text-accent",
			},
			{
				icon: "DatabaseZap",
				title: "Automated Data Ingestion",
				description:
					"Connect SCADA, meters, and weather feeds. GridForesight cleans, validates, and stores your data automatically.",
				color: "text-primary",
			},
			{
				icon: "BrainCircuit",
				title: "Custom Model Training",
				description:
					"Train forecasting models on your historical data with guided workflows. No ML expertise required.",
				color: "text-accent",
			},
		],
		footerNote: "Plus real-time monitoring and portfolio-level analytics.",
	},

	// ── How It Works Section ───────────────────────────────────
	howItWorks: {
		heading: "From raw data to reliable forecasts in three steps",
		steps: [
			{
				title: "Connect Your Data",
				description:
					"Link your meters, SCADA systems, and weather feeds. We handle ingestion and validation.",
			},
			{
				title: "Train Your Models",
				description:
					"Select your target variable and training period. GridForesight builds ML models tailored to your assets.",
			},
			{
				title: "Forecast and Monitor",
				description:
					"Deploy forecasts to production. Track accuracy in real time and retrain when conditions change.",
			},
		],
	},

	// ── Final CTA Section ──────────────────────────────────────
	cta: {
		heading: "Ready to forecast with confidence?",
		description:
			"Join the energy operators already using GridForesight to make faster, more accurate decisions.",
		button: "Start Forecasting",
	},

	// ── Navigation ─────────────────────────────────────────────
	nav: [
		{ label: "Features", href: "#features" },
		{ label: "How It Works", href: "#how-it-works" },
	],

	// ── Footer ─────────────────────────────────────────────────
	footer: {
		tagline: "ML-powered energy forecasting",
		copyright: "2026 GridForesight Inc. All rights reserved.",
		builtIn: "Built in Canada",
		productLinks: [
			{ label: "Features", href: "#features" },
			{ label: "How It Works", href: "#how-it-works" },
		],
	},
};

export type SiteConfig = typeof config;
