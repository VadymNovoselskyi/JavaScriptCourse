const text = `
Apple
Get A$50–A$1,125 in credit towards a new iPhone 16 or iPhone 16 Pro when you trade in your eligible iPhone 7 Plus or higher.* Shop iPhone
 
iPhone 16 Pro
Hello, Apple Intelligence.

Learn more Buy
Apple Intelligence coming this December1

 
iPhone 16
Hello, Apple Intelligence.

Learn more Buy
Apple Intelligence coming this December1

 
Apple Watch Series 10
Thinstant classic.

Learn more Buy
 
Apple Watch Ultra 2
New finish. Never quit.

Learn more Buy
 
AirPods 4
Iconic. Now supersonic. Available with Active Noise Cancellation.2

Learn more Buy
 
Education
Greater access to a world of opportunity.

Learn more
 
MacBook Air
Lean. Mean. M3 machine.

Learn more Buy
 
iPad Pro
Unbelievably thin. Incredibly powerful.

Learn more Buy
Apple Trade In
Get A$50–A$1,125 in credit when you trade in an eligible iPhone 7 Plus or higher.*

Get your estimate
Apple TV+
Stream now
Action · George Clooney and Brad Pitt are rival fixers stuck on the same job for one wild night.

Stream now
Comedy · Catch up now. New season premieres 16 Oct.

Stream now
Thriller · Emmy® winner.

Stream now
Drama · Winner of 3 Emmy® Awards.

Stream now
Comedy · The shady side of paradise.

Stream now
Drama · Within us all lies the courage to change our destiny.

Stream now
Drama · He came from nothing. He conquered everything.

Stream now
Action · Worst. Heist. Ever.

Stream now
Crime · New series.

Stream now
Comedy · Kindness makes a comeback.


Item 1
Item 2
Item 3
Item 4
Item 5
Item 6
Item 7
Item 8
Item 9
Item 10

Apple Footer
1. Apple Intelligence will be available in beta on all iPhone 16 models, iPhone 15 Pro and iPhone 15 Pro Max, with Siri and device language set to US English, as an iOS 18 update this October. English (Australia, Canada, New Zealand, South Africa, UK) language support available this December. Some features and support for additional languages, like Chinese, English (India, Singapore), French, German, Italian, Japanese, Korean, Portuguese, Spanish, Vietnamese and others, will be coming over the course of the next year.
2. Available in two models: AirPods 4 and AirPods 4 with Active Noise Cancellation.
* Trade-in service is provided by Apple’s trade-in partners. Trade-in value quotes are estimated only and actual values may be lower than the estimation. Trade-in values vary based on the condition, year and model of your trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied towards qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. GST may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple’s trade-in partners reserve the right to refuse, cancel or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
Apple TV+ requires a subscription.
Shop and Learn
Store
Mac
iPad
iPhone
Watch
Vision
AirPods
TV & Home
AirTag
Accessories
Gift Cards
Apple Wallet
Wallet
Apple Pay
Account
Manage Your Apple Account
Apple Store Account
iCloud.com
Entertainment
Apple One
Apple TV+
Apple Music
Apple Arcade
Apple Fitness+
Apple News+
Apple Podcasts
Apple Books
App Store
Apple Store
Find a Store
Genius Bar
Today at Apple
Group Reservations
Apple Camp
Apple Store App
Certified Refurbished
Apple Trade In
Financing
Carrier Deals at Apple
Order Status
Shopping Help
Consumer Law
For Business
Apple and Business
Shop for Business
For Education
Apple and Education
Shop for K-12
Shop for University
For Healthcare
Apple in Healthcare
Mac in Healthcare
Apple Values
Accessibility
Education
Environment
Privacy
Racial Equity and Justice
Supply Chain
About Apple
Newsroom
Apple Leadership
Career Opportunities
Investors
Ethics & Compliance
Events
Contact Apple
More ways to shop: Find an Apple Store or other retailer near you. Or call 133-622.
Australia
Copyright © 2024 Apple Inc. All rights reserved.Privacy Policy Terms of Use Sales and Refunds Legal Site Map`;

const textArray = text.split("");
const cleanedTextArray = textArray.filter(symbol => symbol.match(/[a-zA-Z0-9]/));
const lowercaseTextArray = cleanedTextArray.map(symbol => symbol.toLowerCase());

function reduceText(allOccurences, symbol) {
    allOccurences[symbol] = (allOccurences[symbol] ?? 0) + 1;
    return allOccurences;
}

const occurenceCount = lowercaseTextArray.reduce(reduceText, {});
console.log(occurenceCount);