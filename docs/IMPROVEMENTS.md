# Madilynns Craft Coffee Shop: spec site notes

Talking points for Anthony. Not part of the site.

## Pages

| Page | File | What it does |
|---|---|---|
| Home | index.html | Open now badge, order ahead buttons, three menu tiles with real "From" prices, fall lattes, family story, Instagram strip, hours and directions |
| Coffee and drinks | menu.html | Full drink menu as text with prices: specialty lattes, seasonal, coffee and espresso, cold brew, teas and lemonades, kids drinks, FAQ |
| Food | food.html | Bagels, pastries, parfait and the two hot sandwiches with prices, FAQ |
| Coffee beans | beans.html | 12 oz house blend bag ($17.99), Split Oak Coffee Roasters, shipping question link, The Inn at Celebration |
| Our story | our-story.html | 2018 idea, June 27, 2019 opening, September 2022 rename, owner quote, timeline |
| Visit | visit.html | One set of hours with today highlighted, address, phone, email, order buttons, message form with `?topic=` prefill |

Shared: styles.css, script.js. Gallery page skipped: only about 10 shop photos on the current site and they could not be viewed from the build sandbox to write accurate captions.

## Problems on the current site (checked Oct 19, 2026)

1. Footer "Easy to Find" shows template data: "Delicious Cafe, 1649 Norman Street, Los Angeles, 90011", phone 8 (800) 316-06-42, hello@deliciouscafe.com. https://www.madilynns.coffee/
2. The same filler paragraph about fish sits under Beautiful Interior, Only Fresh Food, Delicious Food, Special Events and Welcoming Atmosphere. https://www.madilynns.coffee/
3. Two hours lists disagree: "Opening Hours" Mon to Sat 8am to 10pm, Sunday closed; "Store Hours" Mon to Sat 8am to 4pm, Sunday 9am to 1pm. https://www.madilynns.coffee/
4. Map embed is labeled with the old name, Southern Grounds Craft Coffee Shop, and "View More Photos" goes to instagram.com/southern_grounds_ instead of @madilynns.coffee. https://www.madilynns.coffee/contact
5. Featured drinks show a blank "$" with no price, and three menu images have empty sources. https://www.madilynns.coffee/
6. Happy Hour reads "15-18PM" and "Guy 1 drink, get 1 FREE", which is after the 4pm close. https://www.madilynns.coffee/
7. Featured event is still a Christmas Door Hanger, a Valentine's Day Bundle button is in the nav, and the footer says Copyright 2022. https://www.madilynns.coffee/
8. The DoorDash button goes to the Australian DoorDash site (doordash.com/en-AU). https://www.madilynns.coffee/
9. Four menu layouts in the nav (Grid, Small Grid, List, Classic); Menu List and Menu Grid failed to load when checked. https://www.madilynns.coffee/menu-list
10. No image has alt text and there is no LocalBusiness structured data, so Google has less to work with for hours and address. https://www.madilynns.coffee/our-story

## What the new design does and why

- One set of hours everywhere (footer, visit page, structured data) plus a live "Open now until 4pm" badge. Fixes the 4pm versus 10pm confusion.
- The menu is real text with real prices, one page for drinks and one for food. Readable on a phone, searchable by Google, no blank "$".
- Order ahead is the main action on every page: header button, order strip, mobile bottom bar (Call and Order ahead). Pickup goes to their own order.online page; Uber Eats and DoorDash (US link) sit beside it.
- The family story and dates are front and center, since a sixth-generation local family is something no chain can say. The Experience Kissimmee feature is linked as proof.
- Coffee beans get their own page so the $17.99 bag, Split Oak Coffee Roasters and the Inn at Celebration connection can be found.
- CafeOrCoffeeShop JSON-LD with address, phone, hours and menu link on Home and Visit.

## Brand notes

- Name written "Madilynns" without an apostrophe, as on their site, order.online and Uber Eats.
- Logo hotlinked from their Webflow CDN. Colors could not be sampled from the logo in the build sandbox; the palette (espresso brown, cream, rose pink, light wood) follows the shop interior described by Experience Kissimmee: light wood counter, cursive "M", pink flowers. Sample the real logo colors before launch.
- Type: Fraunces for headings (warm, a little hand-made), Work Sans for text.
- Photos are their own, hotlinked from the current site. Template stock photos (instapost files and "Photo Aug 08") left out.

## Before launch checklist

- [ ] Confirm hours with the owner. Their site Store Hours, Restaurantji and Mugs USA say Mon to Sat 8am to 4pm, Sun 9am to 1pm; Uber Eats and Wheree show a 7:30am open and Sunday until 2pm.
- [ ] Confirm in-store prices. Menu prices come from their order.online pickup page; DoorDash marketplace shows some seasonal drinks at $6.20 instead of $5.89.
- [ ] Confirm the address: site and Google listings say 1022 10th Street, Uber Eats says 1018 10th St.
- [ ] Ask if they want Happy Hour back, with the right times.
- [ ] Ask about bag shipping and wholesale so the beans page can link to a real checkout.
- [ ] Replace the mailto form handoff with a form service tied to madilynnsllc@gmail.com.
- [ ] Download photos and the logo into the site folder instead of hotlinking; write alt text from the real photos.
- [ ] Sample brand colors from the logo file.
- [ ] Optional: add up to 3 named review quotes with permission (none were found with a first name and source).
- [ ] Remove `noindex,nofollow` and set canonical URLs when the owner approves.

## Sources

- https://www.madilynns.coffee/ (home, contact, our-story)
- https://order.online/store/-24345098/ (menu and prices)
- https://www.ubereats.com/store/madilynns-craft-coffee-shop/YNJA4YY6W4GlIkFdmwZm3w
- https://www.doordash.com/store/madilynns-craft-coffee-shop-st-cloud-24345098/
- https://www.experiencekissimmee.com/article/quality-brews-local-charm-meet-madilynns-craft-coffee-shop
- https://www.restaurantji.com/fl/st.-cloud/southern-grounds-craft-coffee-shop-/
- https://www.themugsusa.com/catalog/florida/st-cloud/coffee-shop/madilynns-craft-coffee-shop
- https://madilynns-craft-coffee-shop.wheree.com/
