import assert      from "assert";
import { extract } from "../../../src/core/scrapers.js";

describe("Scraper: torrent", function () {
    it("should return video URL from torrent", async function () {
        const url = new URL("https://archive.org/download/Sintel" +
                                                     "/Sintel_archive.torrent");
        const options = { depth: false, incognito: false };

        const file = await extract(url, options);
        assert.strictEqual(file,
            "plugin://plugin.video.elementum/play" +
                                              "?uri=https%3A%2F%2Farchive.org" +
                               "%2Fdownload%2FSintel%2FSintel_archive.torrent");
    });
});
