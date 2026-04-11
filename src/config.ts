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
			"Forecast power demand for up to 20 years ahead. Automated data ingestion, custom model training, and real-time forecast monitoring.",
	},

	// ── Hero Section ───────────────────────────────────────────
	hero: {
		/** Main heading — keep under ~50 chars for mobile */
		heading: "Long-term Electrical Demand Forecasts, Powered by AI",
		/** Sub-heading description — keep under ~200 chars */
		description:
			"GridForesight combines automated data ingestion with advanced AI models to deliver forecasts with unprescedented spatio-temporal granularity that power sysyetms planners actually need.",
		/** Key stats displayed below the description */
		//stats: [
		//	{ value: "40%", label: "more accurate" },
		//	{ value: "200+", label: "assets monitored" },
		//	{ value: "5B+", label: "data points" },
		],
	},
		/** Primary CTA button text */
		cta: "Start Forecasting",

	// ── Features Section ───────────────────────────────────────
	features: {
		heading: "Everything you need to forecast with confidence",
		description:
			"From raw data to forecast production forecasts, GridForesight handles the entire pipeline so your team focuses on decisions, not data wrangling.",
		items: [
			{
				icon: "TrendingUp",
				title: "Temporal Granularity",
				description:
					"Hiourly values or weekly, monthly or annual peak values: All convered!",
				color: "text-primary",
			},
			{
				icon: "Sun",
				title: "Spatial Granularity",
				description:
					"From regional system level, to planning areas, to points of deliveries to transformers to feeders: spatial granularity is only limited by your metering data!",
				color: "text-accent",
			},
			{
				icon: "DatabaseZap",
				title: "Automated Data Ingestion",
				description:
					"Connect SCADA, metering, and weather feeds. GridForesight cleans, validates, and stores your data automatically.",
				color: "text-primary",
			},
			{
				icon: "BrainCircuit",
				title: "Custom Model Training",
				description:
					"Train forecasting models on your historical data with guided workflows. No coding required.",
				color: "text-accent",
			},
		],
		footerNote: "Plus fkexible visulaization, portfolio-level analytics, and much more!",
	},

	// ── How It Works Section ───────────────────────────────────
	howItWorks: {
		heading: "From raw data to reliable forecasts in three steps",
		steps: [
			{
				title: "Connect Your Data",
				description:
					"Link your data systems, and we handle ingestion and validation.",
			},
			{
				title: "Train Your Models",
				description:
					"Select your target variable and training period. GridForesight builds models tailored to your assets.",
			},
			{
				title: "Forecast and Monitor",
				description:
					"Deploy trained models to production, generate forecasts, compare models, track accuracy and retrain when conditions change.",
			},
		],
	},

	// ── Final CTA Section ──────────────────────────────────────
	cta: {
		heading: "Ready to streamline your forecasting workflows with confidence?",
		description:
			"Contact us.",
		button: "Start Forecasting",
	},

	// ── Navigation ─────────────────────────────────────────────
	nav: [
		{ label: "Features", href: "#features" },
		{ label: "How It Works", href: "#how-it-works" },
	],

	// ── Footer ─────────────────────────────────────────────────
	footer: {
		tagline: "AI-powered energy forecasting",
		copyright: "2026 GridForesight Inc. All rights reserved.",
		builtIn: "Built in Canada",
		productLinks: [
			{ label: "Features", href: "#features" },
			{ label: "How It Works", href: "#how-it-works" },
		],
	},
};

export type SiteConfig = typeof config;
