# Archivo

The site's primary typeface, self-hosted (no third-party runtime request).

| File | Bytes | sha256 |
|---|---|---|
| `archivo-normal.woff2` | 34,952 | `ab45e5166ef0210bb9e19d2f44ccbdaef4ee51a8c2d19580169b066432554f89` |
| `archivo-italic.woff2` | 39,080 | `d240e41b477ee90ec8904dff6c9e08ecffc63b3376200d8af3883f1f8da6378a` |

- **Family:** Archivo, by Omnibus-Type.
- **Source:** Google Fonts. Each file is the variable font's Latin subset (302 glyphs), which covers English and Spanish.
- **Width pinned (v1.1.1):** the width axis is fixed at 100%, so each file varies by weight only (100–900). Rebuild from Google's originals (normal 90,096 B `4c98b9d4…`, italic 101,888 B `d2a3a083…`) with fonttools 4.60.2: `fonttools varLib.instancer <original>.woff2 wdth=100 -o archivo-<style>.woff2`. Glyph set and weight range are unchanged; a style that needs another width needs the original files back.
- **Licence:** SIL Open Font License 1.1, in `OFL.txt` beside the files.
- **Loaded by:** `assets/css/base/fonts.css`, which also declares the metric-matched `Archivo Fallback` (local Arial) shown while the files load.
