# assets/vendor/pdfjs/

Mozilla's PDF.js, which draws the CV on the Résumé page for phones and tablets, where the browser can't show a PDF inside the page well. Computers with a mouse use the browser's own viewer instead, and never load these files.

| File | Who it's for |
|---|---|
| [`pdf.min.mjs`](pdf.min.mjs) | The library the Résumé page's script imports on phones and tablets ([`../../js/pages/resume/cv.js`](../../js/pages/resume/cv.js)) |
| [`pdf.worker.min.mjs`](pdf.worker.min.mjs) | Its worker, which reads the PDF off the main thread |
| [`LICENSE`](LICENSE) | The Apache License 2.0 these files are distributed under |

Version 6.5.438 of `pdfjs-dist`, copied unchanged from cdn.jsdelivr.net on 15 Nov 2026. SHA-256: `pdf.min.mjs` 3a88402882cfa3e7e72c2c9b5149f52f0f88baf1c5b62aa11a41abdbc2072440 · `pdf.worker.min.mjs` 1e64c8240e54735ec5913b37acd5134747799cb8c6bb3777c70adbc01232d2aa · `LICENSE` 0d542e0c8804e39aa7f37eb00da5a762149dc682d7829451287e11b938e94594. These are third-party files under their own license, not the all-rights-reserved terms of the rest of this repository. To update, replace all three together and record the new version and checksums here.
