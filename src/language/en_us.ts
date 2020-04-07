export default {
  header: {
    explorer: "Explorer",
    browse: "Browse",
    blocks: "Blocks",
    transactions: "Transactions",
    addresses: "Addresses",
    assets: "Assets",
    nnsevent: "NNS Events",
    wallet: "Wallet",
    mainnet: "MainNet",
    testnet: "TestNet",
    neo3test: "NEO3.0 TestNet",
    lang: "Language"
  },
  hint: {
    type1: "The auction period is the first stage of the auction and its duration is 3 days, during which all bids are valid. An overtime bidding of up to 2 days will be triggered when someone bids on the last day of the auction period. Otherwise the auction ends at the end of the auction period.",
    type2: "The overtime bidding is the second stage of the auction. Its maximum duration is 2 days. During this period, any bid may trigger the end of the bidding of this domain and the bid will be invalid. The latter one bids, the more likely it triggers the end of the bidding. So it's advised to place a bid as early as possible to avoid missing this domain.",
    type3: "This bid triggered the closing of the domain auction and was not successful."
  },
  input: {
    placeholder: "Search for block height/hash/address/transaction id or domainname",
    placeholder1: "Search for block height/hash/address/transaction id",
    domain: "Search for domain name"
  },
  btn: {
    viewAll: "View all",
    search: "Search",
    goback: "Back to list",
    goback2: "Go back"
  },
  tableTh: {
    height: "Height",
    size: "Size(bytes)",
    create: "Created on",
    transaction: "Transactions",
    type: "Type",
    txid: "TXID",
    version: "Version",
    asset: "Asset",
    from: "From",
    to: "To",
    value: "Value",
    address: "Address",
    firsttime: "First transaction time",
    lasttime: "Last transaction time",
    amount: "Amount",
    id: "ID",
    available: "Available",
    precision: "Precision",
    rank: "Rank",
    domainName: "Domain name",
    highestBid: "Highest bid",
    highestBidder: "Highest bidder",
    stage: "Stage",
    hammerPrice: "Hammer price",
    buyer: "Buyer",
    expiration: "Expiration time",
    currentOwer: "Current owner",
    bidder: "Bidder",
    bidderPrice: "Bidder price",
    time: "Time",
    transfer: "Transfer to",
    price: "Price",
    transfertime: "Time",
    nodata: "There is no data.",
    owner: "Owner",
    listingtime: "Listing time",
    expirationtime: "Expiration time",
    tradetime: "Trade time",
    buyer2: "Buyer",
    price2: "Price",
    from2: "From",
    to2: "To",
    value2: "Value",
    fee: "Fee",
    number: "Value",
    sender: "Sender",
    index:"Trace",
    transid:"Parent Tx Hash"
  },
  page: {
    page: "Page",
    total1: ",",
    total2: " pages in total"
  },
  home: {
    lastBlock: "Last Block",
    totalTrans: "Total Transactions",
    totalAddr: "Wallet Address Created",
    blocks: "Blocks",
    transactions: "Transactions"
  },
  block: {
    title1: "Blocks",
    titleinfo1: "Block information",
    titleinfo2: "Transactions",
    blockHeight: "Block height",
    hash: "Hash",
    time: "Time",
    size: "Size",
    previous: "Previous Block",
    next: "Next Block"
  },
  transaction: {
    title1: "Transactions",
    titleinfo1: "Transaction information",
    txid: "TXID",
    type: "Type",
    netFee: "Network Fee",
    sysFee: "System Fee",
    size: "Size",
    height: "Height",
    time: "Time",
    input: "Input",
    output: "Output",
    nep5: "Nep5",
    alltx: 'Call TX',
    nep5tx: 'Nep5 TX',
    transfer: 'Token Transfer',
    intx:"Internal TX",
    tips1:"The contract call From ",
    tips2:" To ",
    tips3:" produced ",
    tips4:" Internal Transaction",
    contract:"Call "
  },
  address: {
    title1: "Addresses",
    titleinfo1: "Address information",
    titleinfo2: "Balance",
    titleinfo3: "Transactions",
    titleinfo4: "UTXO",
    address: "Address",
    create: "Created on",
    transaction: "Transactions",
    binddomain: "Bound domain",
    alltx: 'Call TX',
    nep5tx: 'Nep5 TX',
    transfer: 'Token Transfer',
    intx:"Internal TX"
  },
  asset: {
    title1: "Assets",
    titleinfo1: "Asset information",
    titleinfo2: "Balance rank",
    titleinfo3: "Transactions",
    asset: "Asset",
    hash: "Hash",
    type: "Type",
    available: "Available",
    precision: "Precision",
    admin: "Admin"
  },
  nns: {
    pool: "Distribution pool",
    dividends: "Distributed dividends",
    registered: "Domains registered",
    live: "Live auctions",
    title1: "Live auctions",
    title2: "Most valuable domain name rank",
    titleinfo1: "Domain name information",
    titleinfo2: "Auction information",
    titleinfo3: "Transfer information",
    titleinfo4: "Bid rank",
    titleinfo5: "Bid information",
    ordered: "Ordered by",
    ordertime: "Auction-starting time",
    orderprice: "Highest bid prices",
    period: "Auction period",
    overtime: "Overtime bidding",
    errortip: `Domain names must be English characters or numbers, and can only be 2 to 32 characters in length.  Please don't forget to add ".neo"  suffix to the domain, e.g.“xxx.neo”`,
    isAuctioned: " is already auctioned off.",
    isBeing: " is being auctioned.",
    isAvailable: " is available!",
    isOnSaleAuction: " is on sale!",
    youcan: "You can",
    login: " login ",
    yourWallet: "your wallet and start an auction!",
    yourWallet2: "your wallet and purchase it!",
    startTime: "Auction start time",
    endTime: "Estimated end time",
    tips: "( This end time is uncertain. Please bid early to avoid missing domain names. )",
    highestbid: "Highest bid",
    highestbidder: "Highest Bidder",
    stage: "Stage",
    endedTime: "Auction end time",
    startBlock: "Auction-starting block",
    hammerPrice: "Hammer Price",
    buyer: "Buyer",
    currentOwer: "Current owner",
    expiration: "Expiration date",
    domainName: "Domain name",
    txid: "TXID",
    openAuction: "Open Auction",
    raisebid: "Raise Bid",
    endof: "End of Auction",
    recover: "Recover CGAS",
    getDomain: "Get Domain",
    price: "Price",
    onsale: "（on sale）",
    saletitle: "Domains on sale",
    listingtime: "Listing time",
    heightprice: "Highest price",
    lowprice: "Lowest price",
    soldtitle: "Domains sold",
    tradetime: "Trade time"
  },
  footer: {
    aboutUs: "About Us",
    contactUs: "Contact Us",
    other: "Other Products",
    tips: "Making blockchain applications closer to people",
    wallet: "Neo Web Wallet",
    nns: "NNS Official Website",
    neodun: "Neodun Official Website",
    wechat: "WeChat Subscription",
    qq: "QQ Group",
    nel: "NEL Official Website"
  },
  nodata: {
    msg: "This is no result!",
    waiting: "Transaction sent, pending confirmation...",
    waitcount: "(transaction pending count: ",
    waitcount2: ")"
  },
  contract: {
    title1: "Contract Details",
    title2: "Contract Asset",
    title3: "TX",
    title4: "NEP5 TX",
    name: "Name",
    hash: "Contract Hash",
    author: "Author",
    createtime: "Deployed",
    version: "Version",
    des: "Description",
    tx24: "TX in 24h",
    usr24: "Users in 24h",
    all: "All ",
    contract: " Contract",
    copy: "Copy"
  },
  other:{
    call:"call",
    create:"create",
    update:"update",
    destory:"destruct"
  }
}