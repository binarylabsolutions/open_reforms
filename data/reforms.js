window.OPEN_REFORMS = {
  "levels": [
    "low",
    "medium",
    "high"
  ],
  "statuses": [
    "idea",
    "research",
    "proposal",
    "production",
    "published"
  ],
  "scopes": [
    "city",
    "provincial",
    "federal"
  ],
  "metrics": [
    {
      "key": "impact",
      "label": "Impact",
      "better": "high",
      "weight": 2,
      "help": "How much better life gets, and for how many people."
    },
    {
      "key": "cost",
      "label": "Cost",
      "better": "low",
      "weight": 1,
      "help": "Public money needed up front and to keep it running."
    },
    {
      "key": "difficulty",
      "label": "Difficulty",
      "better": "low",
      "weight": 1,
      "help": "How hard it is to build and operate (skills, systems, coordination)."
    },
    {
      "key": "resistance",
      "label": "Resistance",
      "better": "low",
      "weight": 1,
      "help": "Political and vested-interest pushback against passing it."
    },
    {
      "key": "time",
      "label": "Time",
      "better": "low",
      "weight": 1,
      "help": "How long before citizens see results."
    }
  ],
  "reforms": [
    {
      "id": "001",
      "slug": "metro-stations-as-commercial-hubs",
      "path": "reforms/001-metro-stations-as-commercial-hubs",
      "title": "Metro stations as commercial hubs",
      "summary": "Fund cheap metro fares with shop rent and property income at stations, the way Hong Kong and Japan do.",
      "sector": "transport",
      "scope": "city",
      "countries": [
        "Hong Kong",
        "Japan"
      ],
      "status": "proposal",
      "video": "",
      "impact": "high",
      "cost": "medium",
      "difficulty": "medium",
      "resistance": "low",
      "time": "medium",
      "score": 75,
      "proposal": "# Metro stations as commercial hubs\n\n## The problem in Pakistan\n\nPakistan's mass transit lines (Lahore Orange Line, the metrobus systems in Lahore, Rawalpindi-Islamabad and Multan, Peshawar BRT, Karachi Green Line) keep fares low with a yearly government subsidy. Fares do not cover the cost of running the service, so every new line adds a permanent bill to a provincial budget.\n\nStations are built as places to pass through. Thousands of people walk through them every day, and almost none of that footfall earns the operator anything.\n\n> Numbers needed before this goes to video: yearly subsidy per line, daily ridership per line, fare revenue as a share of operating cost. See Sources.\n\n## How others solved it\n\n**Hong Kong.** The MTR uses a model it calls \"Rail plus Property\". The government gives the operator the right to develop land above and around new stations. The operator builds housing, offices and malls there, and also rents out shops inside stations. Property and retail income pays for building and running the railway, while fares stay affordable.\n\n**Japan.** Private railway companies such as Tokyu and Hankyu were built as railway-plus-real-estate businesses: department stores at terminals, housing along the line. JR East earns a large part of its income from shops and malls inside stations (\"ekinaka\") and from station buildings.\n\nThe shared idea: a station creates valuable footfall and land. The transit operator, not only nearby private landlords, should capture that value.\n\n## The proposal\n\n1. **Existing stations: lease the space that is already there.** Kiosks, small shops, ATMs, parcel lockers, food counters and advertising in concourses and under viaducts. Lease by open auction.\n2. **New stations: design for commerce from day one.** Every new station plan includes leasable floor area and a commercial block above or beside the station.\n3. **Development rights around stations.** For new lines, give the transit authority the right to develop or auction public land within walking distance of stations, and share in the uplift.\n4. **Ring-fence the money.** All non-fare revenue goes into the transit operating account and is reported publicly, line by line.\n5. **Publish every lease.** Tenant, area, rent and term, online. This is what stops the leases going to insiders.\n\n## Scorecard\n\n| Metric | Rating | Why |\n|---|---|---|\n| Impact | high | Can cut the subsidy on every line and make new lines easier to justify. |\n| Cost | medium | Kiosks in existing stations are cheap. Commercial blocks at new stations need capital, though private developers can carry it. |\n| Difficulty | medium | Needs commercial leasing skills that transit authorities do not have today. |\n| Resistance | low | No one loses a job or a subsidy. Nearby landlords and existing informal vendors may object. |\n| Time | medium | Retail in existing stations within a year. Property development takes several years. |\n\n## Risks and objections\n\n- **\"Our stations are too small.\"** True for many elevated stations. Start with the largest interchange and terminal stations, and the land under viaducts.\n- **Leases captured by insiders.** Open auctions and published contracts are part of the proposal, not an extra.\n- **Land is not owned by the transit authority.** Station land and nearby public land often sit with different agencies. This needs one provincial decision to transfer or pool it.\n- **Hong Kong is denser and richer.** Correct, so the target is not full cost recovery. The target is a meaningful share of operating cost from non-fare income.\n\n## Pilot\n\nOne line, five busiest stations, twelve months. Auction retail space, publish the leases, and report rent earned against that line's subsidy.\n\n## Sources\n\n- [ ] MTR Corporation annual report: revenue split between fares, station commercial and property.\n- [ ] JR East annual report: share of revenue from non-transport business.\n- [ ] Punjab Mass Transit Authority budget documents: subsidy per line and ridership.\n- [ ] TransPeshawar and Sindh Mass Transit Authority: same figures for Peshawar and Karachi.\n- [ ] Existing commercial leasing at Pakistani stations: what is already being done, and what it earns.\n",
      "presentation": "# Metro stations as commercial hubs: presentation\n\nEach slide is one image on screen plus the narration spoken over it.\nSave images in `images/` named by slide number: `01.png`, `02.png`, ...\n\n## Slide 1: Hook\n\n![Slide 1](images/01.png)\n\n**Image prompt:** A busy Hong Kong metro station concourse lined with bright shops, commuters walking past, clean modern architecture, wide shot.\n\n**Narration:** Hong Kong's metro is one of the few in the world that makes money, and a ride still costs very little. The secret is not the tickets.\n\n## Slide 2: The problem in Pakistan\n\n![Slide 2](images/02.png)\n\n**Image prompt:** An elevated metro station in Lahore, crowded platform, bare concrete concourse with no shops, daytime.\n\n**Narration:** In Pakistan, every metro and BRT line runs on a government subsidy. Fares don't cover the running cost, so each new line becomes a bill we pay every year.\n\n## Slide 3: How Hong Kong does it\n\n![Slide 3](images/03.png)\n\n**Image prompt:** Cutaway illustration of a metro station with a shopping mall and apartment towers built directly above it.\n\n**Narration:** In Hong Kong, the metro company gets the right to build on top of and around its stations. Malls, offices, apartments. The rent pays for the trains.\n\n## Slide 4: How Japan does it\n\n![Slide 4](images/04.png)\n\n**Image prompt:** Inside a Japanese railway station, rows of food shops and boutiques inside the ticket gates, commuters shopping.\n\n**Narration:** Japan's railway companies do the same. Their stations are shopping centres, and a large part of their income comes from shops and property, not from tickets.\n\n## Slide 5: The proposal\n\n![Slide 5](images/05.png)\n\n**Image prompt:** The same Lahore station reimagined with kiosks, a food court and a commercial block beside it, people shopping.\n\n**Narration:** Our proposal has three parts. Lease shop space in the stations we already have. Design every new station with commercial space. And put all of that rent back into running the line.\n\n## Slide 6: Keeping it clean\n\n![Slide 6](images/06.png)\n\n**Image prompt:** A simple public website on a laptop screen listing shop leases with tenant names and rents, flat illustration style.\n\n**Narration:** Every lease goes to open auction, and every contract is published. Who rented it, how much they pay. That is what keeps it from going to insiders.\n\n## Slide 7: Scorecard\n\n![Slide 7](images/07.png)\n\n**Image prompt:** Clean scorecard graphic with five rows: Impact high, Cost medium, Difficulty medium, Resistance low, Time medium.\n\n**Narration:** On our scorecard: high impact, medium cost, medium difficulty, low political resistance. Shops in existing stations could open within a year.\n\n## Slide 8: Call to action\n\n![Slide 8](images/08.png)\n\n**Image prompt:** A map of a Pakistani city with five metro stations highlighted as glowing commercial hubs.\n\n**Narration:** Start small. One line, five stations, one year. Publish the numbers. The full proposal is open on our GitHub. Tell us what we got wrong.\n",
      "images": []
    },
    {
      "id": "002",
      "slug": "full-wrap-bus-advertising",
      "path": "reforms/002-full-wrap-bus-advertising",
      "title": "Full-wrap advertising on public buses",
      "summary": "Auction whole-bus advertising wraps, as Japan does, and use the income to hold fares down.",
      "sector": "transport",
      "scope": "city",
      "countries": [
        "Japan",
        "United Kingdom"
      ],
      "status": "proposal",
      "video": "",
      "impact": "medium",
      "cost": "low",
      "difficulty": "low",
      "resistance": "low",
      "time": "low",
      "score": 83,
      "proposal": "# Full-wrap advertising on public buses\n\n## The problem in Pakistan\n\nPublic bus fleets in Lahore, Karachi, Islamabad, Peshawar and Multan run at a loss covered by subsidy. Each bus is a large moving billboard that drives through the busiest roads of the city all day, and that space is mostly unsold or sold ad hoc.\n\n> Numbers needed before this goes to video: fleet size per city, current advertising income per fleet, subsidy per bus per year. See Sources.\n\n## How others solved it\n\n**Japan.** City bus operators sell \"wrapping bus\" advertising: the whole body of the bus is covered in one advertiser's design, on contracts that run for months. Operators publish rate cards and design rules.\n\n**United Kingdom.** London's bus advertising is sold through a single long-term contract with a media company, which pays the transport authority and handles sales to advertisers.\n\nThe shared idea: treat the fleet as one advertising product, sell it professionally, and send the money to the transit budget.\n\n## The proposal\n\n1. **One advertising contract per fleet.** Auction the right to sell wraps and interior ads on the whole fleet to a media company, for a fixed term, with a guaranteed minimum payment plus a revenue share.\n2. **Published rate card and rules.** What can be advertised, safety rules (windows, lights, route numbers stay clear), and prices.\n3. **Money goes to the fleet.** Advertising income is reported per fleet and offsets the subsidy.\n4. **Extend to stops and shelters** once the bus contract works.\n\n## Scorecard\n\n| Metric | Rating | Why |\n|---|---|---|\n| Impact | medium | Real money, but advertising usually covers a small share of a bus system's cost. It will not end the subsidy. |\n| Cost | low | The advertiser pays for the wrap. The authority only runs an auction. |\n| Difficulty | low | A standard contract that many cities already use. |\n| Resistance | low | No losers of any size. |\n| Time | low | An auction and first wraps within months. |\n\n## Risks and objections\n\n- **Ugly or unsafe buses.** Design rules: no covering of windscreen, lights, route displays or emergency exits.\n- **Unsuitable advertisers.** A published list of banned categories.\n- **Underpriced contract.** Open auction with a minimum guaranteed payment, and a short first term so the price can be reset.\n- **\"It's too small to matter.\"** It is small. It is also nearly free and fast, which is why it is worth doing first.\n\n## Pilot\n\nOne city fleet, a two-year contract, open auction. Publish the winning bid and the income each quarter.\n\n## Sources\n\n- [ ] A Japanese city bus operator's wrapping-bus rate card (for example Tokyo's Toei Bus).\n- [ ] Transport for London advertising revenue and contract structure.\n- [ ] Punjab Mass Transit Authority, TransPeshawar, Sindh Mass Transit Authority: current advertising income and fleet sizes.\n- [ ] Local outdoor advertising rates in Lahore and Karachi, to estimate what a wrap is worth.\n",
      "presentation": "# Full-wrap advertising on public buses: presentation\n\nEach slide is one image on screen plus the narration spoken over it.\nSave images in `images/` named by slide number: `01.png`, `02.png`, ...\n\n## Slide 1: Hook\n\n![Slide 1](images/01.png)\n\n**Image prompt:** A Japanese city bus fully wrapped in a colourful advertisement, driving through a busy street.\n\n**Narration:** In Japan, a city bus is not just a bus. It is a moving billboard, and someone is paying for every square metre of it.\n\n## Slide 2: The problem in Pakistan\n\n![Slide 2](images/02.png)\n\n**Image prompt:** A plain red public bus in Lahore traffic, blank sides, crowded road.\n\n**Narration:** Our public buses run at a loss, and the government covers the gap. Meanwhile the buses drive through the busiest roads in the country all day with their sides empty.\n\n## Slide 3: How others do it\n\n![Slide 3](images/03.png)\n\n**Image prompt:** Split image: a wrapped bus in Tokyo on the left, a London double-decker with a large advertisement on the right.\n\n**Narration:** Japanese operators sell full-body wraps on contracts that last for months. London sells advertising across its whole fleet through one big contract.\n\n## Slide 4: The proposal\n\n![Slide 4](images/04.png)\n\n**Image prompt:** A Pakistani metrobus fully wrapped in a bright, tasteful advertisement, windows and route number clearly visible.\n\n**Narration:** Our proposal: one open auction per city for the right to sell advertising on the whole fleet. Clear safety rules. And the money goes straight back into running the buses.\n\n## Slide 5: Scorecard\n\n![Slide 5](images/05.png)\n\n**Image prompt:** Clean scorecard graphic with five rows: Impact medium, Cost low, Difficulty low, Resistance low, Time low.\n\n**Narration:** We will be honest: this will not end the subsidy. Impact is medium. But it costs the government almost nothing, it is easy, nobody loses, and it can start in months.\n\n## Slide 6: Call to action\n\n![Slide 6](images/06.png)\n\n**Image prompt:** A row of wrapped buses parked at a depot at sunrise, hopeful mood.\n\n**Narration:** One city, one auction, two years. Publish what it earns. The full proposal is open on our GitHub.\n",
      "images": []
    },
    {
      "id": "003",
      "slug": "receipt-lottery-for-sales-tax",
      "path": "reforms/003-receipt-lottery-for-sales-tax",
      "title": "Receipt lottery for sales tax",
      "summary": "Turn every official receipt into a lottery ticket so customers demand receipts and shops record their sales.",
      "sector": "tax",
      "scope": "federal",
      "countries": [
        "Taiwan",
        "Portugal"
      ],
      "status": "idea",
      "video": "",
      "impact": "high",
      "cost": "low",
      "difficulty": "medium",
      "resistance": "medium",
      "time": "medium",
      "score": 75,
      "proposal": "# Receipt lottery for sales tax\n\nTurn every official receipt into a lottery ticket so customers demand receipts and shops record their sales.\n\n> Status: idea. Ratings are a first guess and the claims below still need sources.\n\n## How others solved it\n\nTaiwan has run its Uniform Invoice lottery since the 1950s: every receipt carries a number and prizes are drawn regularly. Customers ask for receipts, so sales get recorded and taxed. Portugal and others run similar schemes.\n\n## Open questions\n\n- [ ] FBR ran a prize scheme for point-of-sale invoices. What happened to it, and why?\n- [ ] How many retailers are connected to the FBR point-of-sale system today?\n- [ ] What did the lottery add to tax collection in Taiwan and Portugal?\n",
      "presentation": "# Receipt lottery for sales tax: presentation\n\nEach slide is one image on screen plus the narration spoken over it.\nSave images in `images/` named by slide number: `01.png`, `02.png`, ...\n\n## Slide 1: Hook\n\n![Slide 1](images/01.png)\n\n**Image prompt:** What the AI image should show.\n\n**Narration:** What is said while this image is on screen.\n\n## Slide 2: The problem in Pakistan\n\n![Slide 2](images/02.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 3: How others solved it\n\n![Slide 3](images/03.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 4: The proposal\n\n![Slide 4](images/04.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 5: Scorecard\n\n![Slide 5](images/05.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 6: Call to action\n\n![Slide 6](images/06.png)\n\n**Image prompt:**\n\n**Narration:**\n",
      "images": []
    },
    {
      "id": "004",
      "slug": "one-stop-public-service-halls",
      "path": "reforms/004-one-stop-public-service-halls",
      "title": "One-stop public service halls",
      "summary": "Put every common government service (ID, property, business, licences) under one roof with one queue.",
      "sector": "governance",
      "scope": "provincial",
      "countries": [
        "Georgia"
      ],
      "status": "idea",
      "video": "",
      "impact": "medium",
      "cost": "medium",
      "difficulty": "medium",
      "resistance": "medium",
      "time": "medium",
      "score": 50,
      "proposal": "# One-stop public service halls\n\nPut every common government service (ID, property, business, licences) under one roof with one queue.\n\n> Status: idea. Ratings are a first guess and the claims below still need sources.\n\n## How others solved it\n\nGeorgia built Public Service Halls where a citizen gets passports, property registration, business registration and more in one building, from one counter, usually within minutes. It was a central part of the country's anti-corruption drive.\n\n## Open questions\n\n- [ ] How do Punjab's e-Khidmat centres compare, and why have they not scaled?\n- [ ] Which services cause the most visits and bribes today?\n- [ ] Which departments would resist giving up their own counters?\n",
      "presentation": "# One-stop public service halls: presentation\n\nEach slide is one image on screen plus the narration spoken over it.\nSave images in `images/` named by slide number: `01.png`, `02.png`, ...\n\n## Slide 1: Hook\n\n![Slide 1](images/01.png)\n\n**Image prompt:** What the AI image should show.\n\n**Narration:** What is said while this image is on screen.\n\n## Slide 2: The problem in Pakistan\n\n![Slide 2](images/02.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 3: How others solved it\n\n![Slide 3](images/03.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 4: The proposal\n\n![Slide 4](images/04.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 5: Scorecard\n\n![Slide 5](images/05.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 6: Call to action\n\n![Slide 6](images/06.png)\n\n**Image prompt:**\n\n**Narration:**\n",
      "images": []
    },
    {
      "id": "005",
      "slug": "open-contracting-for-public-procurement",
      "path": "reforms/005-open-contracting-for-public-procurement",
      "title": "Open contracting for public procurement",
      "summary": "Publish every government tender, bid and contract online in full, so anyone can check who won and at what price.",
      "sector": "governance",
      "scope": "federal",
      "countries": [
        "Ukraine"
      ],
      "status": "idea",
      "video": "",
      "impact": "high",
      "cost": "low",
      "difficulty": "medium",
      "resistance": "high",
      "time": "medium",
      "score": 67,
      "proposal": "# Open contracting for public procurement\n\nPublish every government tender, bid and contract online in full, so anyone can check who won and at what price.\n\n> Status: idea. Ratings are a first guess and the claims below still need sources.\n\n## How others solved it\n\nUkraine's ProZorro system runs government purchasing as open online auctions and publishes all bids and contracts. Its motto is \"everyone sees everything\". Civil society and competitors do the monitoring.\n\n## Open questions\n\n- [ ] What does Pakistan's existing e-procurement system publish, and what does it hide?\n- [ ] How much does Pakistan spend through public procurement each year?\n- [ ] What savings did Ukraine measure?\n",
      "presentation": "# Open contracting for public procurement: presentation\n\nEach slide is one image on screen plus the narration spoken over it.\nSave images in `images/` named by slide number: `01.png`, `02.png`, ...\n\n## Slide 1: Hook\n\n![Slide 1](images/01.png)\n\n**Image prompt:** What the AI image should show.\n\n**Narration:** What is said while this image is on screen.\n\n## Slide 2: The problem in Pakistan\n\n![Slide 2](images/02.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 3: How others solved it\n\n![Slide 3](images/03.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 4: The proposal\n\n![Slide 4](images/04.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 5: Scorecard\n\n![Slide 5](images/05.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 6: Call to action\n\n![Slide 6](images/06.png)\n\n**Image prompt:**\n\n**Narration:**\n",
      "images": []
    },
    {
      "id": "006",
      "slug": "deposit-return-for-bottles",
      "path": "reforms/006-deposit-return-for-bottles",
      "title": "Deposit-return for bottles and cans",
      "summary": "Add a small refundable deposit to every drink container so they come back instead of ending up in drains.",
      "sector": "environment",
      "scope": "provincial",
      "countries": [
        "Germany"
      ],
      "status": "idea",
      "video": "",
      "impact": "medium",
      "cost": "medium",
      "difficulty": "medium",
      "resistance": "medium",
      "time": "medium",
      "score": 50,
      "proposal": "# Deposit-return for bottles and cans\n\nAdd a small refundable deposit to every drink container so they come back instead of ending up in drains.\n\n> Status: idea. Ratings are a first guess and the claims below still need sources.\n\n## How others solved it\n\nGermany charges a deposit (\"Pfand\") on drink bottles and cans, refunded when the container is returned to any shop. Return rates are among the highest in the world.\n\n## Open questions\n\n- [ ] How would this work with Pakistan's informal waste pickers, who already collect bottles?\n- [ ] Who runs the clearing system between producers and shops?\n- [ ] What deposit amount is meaningful but affordable?\n",
      "presentation": "# Deposit-return for bottles and cans: presentation\n\nEach slide is one image on screen plus the narration spoken over it.\nSave images in `images/` named by slide number: `01.png`, `02.png`, ...\n\n## Slide 1: Hook\n\n![Slide 1](images/01.png)\n\n**Image prompt:** What the AI image should show.\n\n**Narration:** What is said while this image is on screen.\n\n## Slide 2: The problem in Pakistan\n\n![Slide 2](images/02.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 3: How others solved it\n\n![Slide 3](images/03.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 4: The proposal\n\n![Slide 4](images/04.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 5: Scorecard\n\n![Slide 5](images/05.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 6: Call to action\n\n![Slide 6](images/06.png)\n\n**Image prompt:**\n\n**Narration:**\n",
      "images": []
    },
    {
      "id": "007",
      "slug": "congestion-pricing-in-city-centres",
      "path": "reforms/007-congestion-pricing-in-city-centres",
      "title": "Congestion pricing in city centres",
      "summary": "Charge cars to enter the busiest zones at peak hours and spend the money on public transport.",
      "sector": "transport",
      "scope": "city",
      "countries": [
        "Singapore",
        "United Kingdom",
        "Sweden"
      ],
      "status": "idea",
      "video": "",
      "impact": "medium",
      "cost": "high",
      "difficulty": "high",
      "resistance": "high",
      "time": "high",
      "score": 17,
      "proposal": "# Congestion pricing in city centres\n\nCharge cars to enter the busiest zones at peak hours and spend the money on public transport.\n\n> Status: idea. Ratings are a first guess and the claims below still need sources.\n\n## How others solved it\n\nSingapore has charged for road use electronically for decades. London and Stockholm charge vehicles entering the centre. Traffic fell and the income funds transit.\n\n## Open questions\n\n- [ ] Is public transport good enough anywhere in Pakistan to offer drivers an alternative?\n- [ ] Can number-plate cameras (Safe City) be reused for charging?\n- [ ] Which city centre is the realistic first candidate?\n",
      "presentation": "# Congestion pricing in city centres: presentation\n\nEach slide is one image on screen plus the narration spoken over it.\nSave images in `images/` named by slide number: `01.png`, `02.png`, ...\n\n## Slide 1: Hook\n\n![Slide 1](images/01.png)\n\n**Image prompt:** What the AI image should show.\n\n**Narration:** What is said while this image is on screen.\n\n## Slide 2: The problem in Pakistan\n\n![Slide 2](images/02.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 3: How others solved it\n\n![Slide 3](images/03.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 4: The proposal\n\n![Slide 4](images/04.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 5: Scorecard\n\n![Slide 5](images/05.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 6: Call to action\n\n![Slide 6](images/06.png)\n\n**Image prompt:**\n\n**Narration:**\n",
      "images": []
    },
    {
      "id": "008",
      "slug": "dual-vocational-training",
      "path": "reforms/008-dual-vocational-training",
      "title": "Dual vocational training",
      "summary": "Train young people half in a classroom and half as paid apprentices inside real companies.",
      "sector": "education",
      "scope": "provincial",
      "countries": [
        "Germany",
        "Switzerland"
      ],
      "status": "idea",
      "video": "",
      "impact": "high",
      "cost": "medium",
      "difficulty": "high",
      "resistance": "low",
      "time": "high",
      "score": 58,
      "proposal": "# Dual vocational training\n\nTrain young people half in a classroom and half as paid apprentices inside real companies.\n\n> Status: idea. Ratings are a first guess and the claims below still need sources.\n\n## How others solved it\n\nIn Germany and Switzerland most vocational students spend part of the week at a company as paid apprentices and part at school. Companies help write the curriculum, so graduates have the skills employers want.\n\n## Open questions\n\n- [ ] What do TEVTA and NAVTTC already do, and how many graduates get jobs?\n- [ ] Will Pakistani firms pay apprentices? What incentive is needed?\n- [ ] Which three industries should go first?\n",
      "presentation": "# Dual vocational training: presentation\n\nEach slide is one image on screen plus the narration spoken over it.\nSave images in `images/` named by slide number: `01.png`, `02.png`, ...\n\n## Slide 1: Hook\n\n![Slide 1](images/01.png)\n\n**Image prompt:** What the AI image should show.\n\n**Narration:** What is said while this image is on screen.\n\n## Slide 2: The problem in Pakistan\n\n![Slide 2](images/02.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 3: How others solved it\n\n![Slide 3](images/03.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 4: The proposal\n\n![Slide 4](images/04.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 5: Scorecard\n\n![Slide 5](images/05.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 6: Call to action\n\n![Slide 6](images/06.png)\n\n**Image prompt:**\n\n**Narration:**\n",
      "images": []
    },
    {
      "id": "009",
      "slug": "mandatory-rainwater-harvesting",
      "path": "reforms/009-mandatory-rainwater-harvesting",
      "title": "Mandatory rainwater harvesting",
      "summary": "Require every large building to capture rainwater and recharge the ground instead of flooding the street.",
      "sector": "water",
      "scope": "city",
      "countries": [
        "India"
      ],
      "status": "idea",
      "video": "",
      "impact": "medium",
      "cost": "low",
      "difficulty": "medium",
      "resistance": "low",
      "time": "medium",
      "score": 67,
      "proposal": "# Mandatory rainwater harvesting\n\nRequire every large building to capture rainwater and recharge the ground instead of flooding the street.\n\n> Status: idea. Ratings are a first guess and the claims below still need sources.\n\n## How others solved it\n\nThe Indian state of Tamil Nadu made rainwater harvesting compulsory for buildings in the early 2000s, with Chennai as the best-known case. Groundwater levels were reported to recover in the following years.\n\n## Open questions\n\n- [ ] How fast is groundwater falling in Lahore, Islamabad and Quetta?\n- [ ] Do building by-laws already require this, and are they enforced?\n- [ ] What does a recharge well cost for a typical house?\n",
      "presentation": "# Mandatory rainwater harvesting: presentation\n\nEach slide is one image on screen plus the narration spoken over it.\nSave images in `images/` named by slide number: `01.png`, `02.png`, ...\n\n## Slide 1: Hook\n\n![Slide 1](images/01.png)\n\n**Image prompt:** What the AI image should show.\n\n**Narration:** What is said while this image is on screen.\n\n## Slide 2: The problem in Pakistan\n\n![Slide 2](images/02.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 3: How others solved it\n\n![Slide 3](images/03.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 4: The proposal\n\n![Slide 4](images/04.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 5: Scorecard\n\n![Slide 5](images/05.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 6: Call to action\n\n![Slide 6](images/06.png)\n\n**Image prompt:**\n\n**Narration:**\n",
      "images": []
    },
    {
      "id": "010",
      "slug": "pay-by-weight-food-waste",
      "path": "reforms/010-pay-by-weight-food-waste",
      "title": "Pay-by-weight food waste",
      "summary": "Charge households for the food waste they throw away, and turn what is collected into feed, compost and biogas.",
      "sector": "environment",
      "scope": "city",
      "countries": [
        "South Korea"
      ],
      "status": "idea",
      "video": "",
      "impact": "medium",
      "cost": "medium",
      "difficulty": "high",
      "resistance": "medium",
      "time": "high",
      "score": 33,
      "proposal": "# Pay-by-weight food waste\n\nCharge households for the food waste they throw away, and turn what is collected into feed, compost and biogas.\n\n> Status: idea. Ratings are a first guess and the claims below still need sources.\n\n## How others solved it\n\nSouth Korea banned food waste from landfill and charges households by weight, using prepaid bags or bins that weigh and bill by card. Almost all food waste is now recycled.\n\n## Open questions\n\n- [ ] Is separate collection realistic before basic collection works everywhere?\n- [ ] Could this start with restaurants, wedding halls and wholesale markets instead of homes?\n- [ ] Who buys the compost or biogas?\n",
      "presentation": "# Pay-by-weight food waste: presentation\n\nEach slide is one image on screen plus the narration spoken over it.\nSave images in `images/` named by slide number: `01.png`, `02.png`, ...\n\n## Slide 1: Hook\n\n![Slide 1](images/01.png)\n\n**Image prompt:** What the AI image should show.\n\n**Narration:** What is said while this image is on screen.\n\n## Slide 2: The problem in Pakistan\n\n![Slide 2](images/02.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 3: How others solved it\n\n![Slide 3](images/03.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 4: The proposal\n\n![Slide 4](images/04.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 5: Scorecard\n\n![Slide 5](images/05.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 6: Call to action\n\n![Slide 6](images/06.png)\n\n**Image prompt:**\n\n**Narration:**\n",
      "images": []
    },
    {
      "id": "011",
      "slug": "universal-school-meals",
      "path": "reforms/011-universal-school-meals",
      "title": "Universal school meals",
      "summary": "Give every child in government primary schools a free cooked lunch to raise enrolment and cut malnutrition.",
      "sector": "education",
      "scope": "provincial",
      "countries": [
        "India",
        "Brazil"
      ],
      "status": "idea",
      "video": "",
      "impact": "high",
      "cost": "high",
      "difficulty": "medium",
      "resistance": "low",
      "time": "medium",
      "score": 67,
      "proposal": "# Universal school meals\n\nGive every child in government primary schools a free cooked lunch to raise enrolment and cut malnutrition.\n\n> Status: idea. Ratings are a first guess and the claims below still need sources.\n\n## How others solved it\n\nIndia's midday meal scheme feeds children in government schools every school day and is the largest programme of its kind. Brazil runs a national school feeding programme that buys part of its food from local family farms.\n\n## Open questions\n\n- [ ] How many children are out of school, and how many are stunted?\n- [ ] What have the existing school meal pilots in Pakistan found?\n- [ ] What is the cost per child per day?\n",
      "presentation": "# Universal school meals: presentation\n\nEach slide is one image on screen plus the narration spoken over it.\nSave images in `images/` named by slide number: `01.png`, `02.png`, ...\n\n## Slide 1: Hook\n\n![Slide 1](images/01.png)\n\n**Image prompt:** What the AI image should show.\n\n**Narration:** What is said while this image is on screen.\n\n## Slide 2: The problem in Pakistan\n\n![Slide 2](images/02.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 3: How others solved it\n\n![Slide 3](images/03.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 4: The proposal\n\n![Slide 4](images/04.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 5: Scorecard\n\n![Slide 5](images/05.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 6: Call to action\n\n![Slide 6](images/06.png)\n\n**Image prompt:**\n\n**Narration:**\n",
      "images": []
    },
    {
      "id": "012",
      "slug": "drip-irrigation-and-water-pricing",
      "path": "reforms/012-drip-irrigation-and-water-pricing",
      "title": "Drip irrigation and water pricing",
      "summary": "Price canal water by volume and help farmers move from flood irrigation to drip.",
      "sector": "agriculture",
      "scope": "provincial",
      "countries": [
        "Israel"
      ],
      "status": "idea",
      "video": "",
      "impact": "high",
      "cost": "high",
      "difficulty": "high",
      "resistance": "high",
      "time": "high",
      "score": 33,
      "proposal": "# Drip irrigation and water pricing\n\nPrice canal water by volume and help farmers move from flood irrigation to drip.\n\n> Status: idea. Ratings are a first guess and the claims below still need sources.\n\n## How others solved it\n\nIsrael pioneered drip irrigation and charges farmers for water by volume, with allocations and rising prices for heavier use. Farm output grew while water use per unit of crop fell.\n\n## Open questions\n\n- [ ] How much canal water is lost before it reaches the crop?\n- [ ] What is the flat water charge (abiana) today compared with the cost of delivery?\n- [ ] Why have earlier drip subsidy schemes had low uptake?\n",
      "presentation": "# Drip irrigation and water pricing: presentation\n\nEach slide is one image on screen plus the narration spoken over it.\nSave images in `images/` named by slide number: `01.png`, `02.png`, ...\n\n## Slide 1: Hook\n\n![Slide 1](images/01.png)\n\n**Image prompt:** What the AI image should show.\n\n**Narration:** What is said while this image is on screen.\n\n## Slide 2: The problem in Pakistan\n\n![Slide 2](images/02.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 3: How others solved it\n\n![Slide 3](images/03.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 4: The proposal\n\n![Slide 4](images/04.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 5: Scorecard\n\n![Slide 5](images/05.png)\n\n**Image prompt:**\n\n**Narration:**\n\n## Slide 6: Call to action\n\n![Slide 6](images/06.png)\n\n**Image prompt:**\n\n**Narration:**\n",
      "images": []
    }
  ]
};
