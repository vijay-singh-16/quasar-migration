import fs from "fs-extra";
import path from "path";

async function execute() {
	const distDir = "./dist/spa";
	const prodDir = "../prod";
	const files = await fs.readdir(prodDir, { recursive: true, });

	for (const file of files) {
		if (file.includes(".git")) {
			continue;
		}

		const fullPath = path.join(prodDir, file);
		await fs.remove(fullPath);
	}

	await fs.copy(distDir, prodDir);
}

execute();
