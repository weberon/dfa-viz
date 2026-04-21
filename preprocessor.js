import { readFileSync, writeFileSync } from "fs";
import { JSDOM } from "jsdom";

/**
 * Strips the leading slash from a URL path, converting absolute paths
 * to relative paths.
 *
 * @param {string} url - The URL string to transform (e.g. "/assets/index.js").
 * @returns {string} The URL with the leading slash removed (e.g. "assets/index.js").
 *                   If the URL has no leading slash, it is returned unchanged.
 *
 * @example
 * toRelativePath("/vite.svg");        // "vite.svg"
 * toRelativePath("/assets/index.js"); // "assets/index.js"
 * toRelativePath("assets/index.js");  // "assets/index.js" (unchanged)
 */
const toRelativePath = (url) => {
    return url.startsWith("/") ? url.slice(1) : url;
};

/**
 * Reads the given HTML file, converts all absolute asset URLs in
 * `<link href>` and `<script src>` attributes to relative paths by
 * removing leading slashes, then writes the modified HTML back to
 * the same file.
 *
 * @param {string} filePath - Path to the index.html file to update.
 * @returns {void}
 * @throws Will log the error and call `process.exit(1)` on any I/O failure.
 *
 * @example
 * // Converts:
 * //   <link href="/assets/index-3GCrKh-A.css" …>
 * // To:
 * //   <link href="assets/index-3GCrKh-A.css" …>
 * updateAssetUrls("./build/index.html");
 */
const updateAssetUrls = (filePath) => {
    try {
        const htmlContent = readFileSync(filePath, "utf8");

        const dom = new JSDOM(htmlContent);
        const document = dom.window.document;

        document.querySelectorAll("link[href]").forEach((link) => {
            link.setAttribute("href", toRelativePath(link.getAttribute("href")));
        });

        document.querySelectorAll("script[src]").forEach((script) => {
            script.setAttribute("src", toRelativePath(script.getAttribute("src")));
        });

        writeFileSync(filePath, dom.serialize(), "utf8");
        console.log(`${filePath} successfully updated.`);
    } catch (error) {
        console.error("Error updating index.html:", error);
        process.exit(1);
    }
};

/**
 * Entry point. Runs {@link updateAssetUrls} on the configured build
 * output file and exits with code 1 on any unhandled error.
 *
 * @returns {Promise<void>}
 */
const init = async () => {
    try {
        const FILE_PATH = "./build/index.html";
        updateAssetUrls(FILE_PATH);
    } catch (error) {
        console.error("[ERROR]", error);
        process.exit(1);
    }
};

init();