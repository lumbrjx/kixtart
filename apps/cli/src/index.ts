import { execa } from "execa";
import { fileURLToPath } from "url";
import path from "path";
// Get the absolute path to the core binary in the same directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const coreFilePath = path.resolve(__dirname, "core");
const args = ["arg1", "arg2", "arg3"];
try {
	const { stdout } = await execa(coreFilePath, args);
	console.log(stdout);
} catch (error) {
	console.error("Error executing command:", error);
}
