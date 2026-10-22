K HOTELS ENTEBBE WEBSITE

Run locally
1. Extract the ZIP.
2. Open a terminal in this folder.
3. Run `python -m http.server 8000` (Windows: `py -m http.server 8000`).
4. Open http://localhost:8000/

This is a static HTML/CSS/JavaScript package. Apache hosting should use the included .htaccess for clean URL and HTTPS redirects. The site uses the existing Google Fonts family and K Hotels charcoal, gold and green palette.

Before production launch
- Add the verified Google Business Profile map URL and pin coordinates to the Hotel JSON-LD before publishing.
- Confirm each ResAvenue room-specific booking link, the booking-engine GA4 tag, and a purchase event with value and currency.
- The conference form currently opens an email draft. Connect it to the confirmed sales inbox/backend and test a real submission before marking P04 complete.
- Add 8 to 12 approved guest quotes to the reviews page only after K Hotels has guest permission.
- Verify Google Search Console and Bing Webmaster Tools, submit the sitemap, then run the live crawl, schema/share-preview, mobile speed and indexing checks. Record the results in the companion checklist.
