import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const satoshiBold = readFileSync(
	join(root, "src/assets/fonts/Satoshi-Bold.ttf"),
);
const interRegular = readFileSync(
	join(root, "src/assets/fonts/Inter-Regular.ttf"),
);

async function generateOgImage() {
	const svg = await satori(
		{
			type: "div",
			props: {
				style: {
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					width: "100%",
					height: "100%",
					backgroundColor: "#ffffff",
				},
				children: [
					{
						type: "div",
						props: {
							style: {
								fontSize: 64,
								fontFamily: "Satoshi",
								fontWeight: 700,
								color: "#0f172a",
								letterSpacing: "-0.02em",
							},
							children: "GridForesight",
						},
					},
					{
						type: "div",
						props: {
							style: {
								fontSize: 24,
								fontFamily: "Inter",
								fontWeight: 400,
								color: "#64748b",
								marginTop: 16,
							},
							children: "ML-Powered Energy Forecasting",
						},
					},
				],
			},
		},
		{
			width: 1200,
			height: 630,
			fonts: [
				{ name: "Satoshi", data: satoshiBold, weight: 700, style: "normal" },
				{ name: "Inter", data: interRegular, weight: 400, style: "normal" },
			],
		},
	);

	const ogResvg = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } });
	const ogPng = ogResvg.render().asPng();
	const { writeFileSync } = await import("node:fs");
	writeFileSync(join(root, "public/og-image.png"), ogPng);
	console.log("Generated public/og-image.png (1200x630)");

	// Apple touch icon — reuse same layout but smaller
	const iconSvg = await satori(
		{
			type: "div",
			props: {
				style: {
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: "100%",
					height: "100%",
					backgroundColor: "#2563eb",
					borderRadius: 32,
				},
				children: {
					type: "div",
					props: {
						style: {
							fontSize: 100,
							fontFamily: "Satoshi",
							fontWeight: 700,
							color: "#ffffff",
						},
						children: "G",
					},
				},
			},
		},
		{
			width: 180,
			height: 180,
			fonts: [
				{ name: "Satoshi", data: satoshiBold, weight: 700, style: "normal" },
			],
		},
	);

	const iconResvg = new Resvg(iconSvg, {
		fitTo: { mode: "width", value: 180 },
	});
	const iconPng = iconResvg.render().asPng();
	writeFileSync(join(root, "public/apple-touch-icon.png"), iconPng);
	console.log("Generated public/apple-touch-icon.png (180x180)");
}

generateOgImage().catch(console.error);
