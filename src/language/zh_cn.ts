export default {
  header: {
    explorer: "浏览器",
    browse: "浏览",
    blocks: "区块",
    transactions: "交易",
    addresses: "地址",
    assets: "资产",
    nnsevent: "NNS 项目",
    wallet: "钱包",
    mainnet: "主网",
    testnet: "测试网",
  },
  hint:{
    type1:"确定期为竞拍第一阶段，时长为3天，此期间所有的出价都有效。当确定期最后一天有人出价时将触发最大时长为2天的随机期。否则竞拍即在确定期结束。",
    type2:"随机期为竞拍第二阶段，最大时长为2天，此期间任意一个出价都有可能触发该域名竞拍的结束从而出价无效，越靠后的出价触发结束的可能性越大，因此请尽早出价以免错失该域名。",
    type3:"此次出价触发竞拍结束，出价失败。"
  },
  input: {
    placeholder: "Search for block height/hash/address or transaction id",
    domain: "请输入您想查询的域名"
  },
  btn: {
    viewAll: "查看所有",
    search: "查询",
    goback: "返回列表",
    goback2:"返回"
  },
  tableTh: {
    height: "高度",
    size: "大小",
    create: "创建时间",
    transaction: "交易数量",
    type: "类型",
    txid: "交易ID",
    version: "版本",
    asset: "资产",
    from: "转出",
    to: "转入",
    value: "金额",
    address: "地址",
    firsttime: "首次交易时间",
    lasttime: "上次交易时间",
    amount: "金额",
    id: "ID",
    available: "总量",
    precision: "小数点后位数",
    rank: "排名",
    domainName: "域名",
    highestBid: "当前最高价",
    highestBidder: "最高竞标人",
    stage: "状态",
    hammerPrice: "成交价",
    buyer: "中标人",
    expiration: "域名过期时间",
    currentOwer: "当前拥有者",
    bidder: "竞标人",
    bidderPrice: "竞标价格",
    time: "时间",
    transfer: "Transfer to",
    price: "价格",
    nodata:"没有数据"
  },
  page: {
    page: "第",
    total1: "，共 ",
    total2: " 页"
  },
  home: {
    lastBlock: "上一个区块",
    totalTrans: "交易总数",
    totalAddr: "已创建的钱包地址数",
    blocks: "最新的10个区块",
    transactions: "最新的10笔交易"
  },
  block: {
    title1: "区块列表",
    titleinfo1: "区块信息",
    titleinfo2: "交易",
    blockHeight: "区块",
    hash: "Hash",
    time: "时间",
    size: "大小",
    previous: "上一个区块",
    next: "下一个区块"
  },
  transaction: {
    title1: "交易列表",
    titleinfo1: "交易信息",
    txid: "交易ID",
    type: "类型",
    netFee: "网络费用",
    sysFee: "系统费用",
    size: "大小",
    height: "区块高度",
    time: "时间",
    input: "输入",
    output: "输出",
    nep5: "Nep5"
  },
  address: {
    title1: "地址列表",
    titleinfo1: "地址详情",
    titleinfo2: "资产",
    titleinfo3: "交易",
    titleinfo4: "UTXO",
    address: "地址",
    create: "创建时间",
    transaction: "交易总数"
  },
  asset: {
    title1: "资产",
    titleinfo1: "资产信息",
    titleinfo2: "资产排名",
    titleinfo3: "交易",
    asset: "资产",
    hash: "Hash",
    type: "类型",
    available: "总量",
    precision: "小数点后位数",
    admin: "发行商地址"
  },
  nns: {
    pool: "奖金池",
    dividends: "累计分红",
    registered: "已使用的域名数量",
    live: "正在竞拍的域名数量",
    title1: "正在竞拍的域名",
    title2: "最具价值域名排行",
    titleinfo1: "域名信息",
    titleinfo2: "竞拍信息",
    titleinfo3: "转让信息",
    titleinfo4: "竞价排行",
    titleinfo5: "竞拍信息",
    ordered: "排序",
    ordertime: "开标时间",
    orderprice: "最高竞价",
    period: "确定期",
    overtime: "随机期",
    errortip:'域名长度需要在2～32个字节之间，只能是字母和数字。请加上后缀，“例如：XXXXXX.neo”',
    isAuctioned: " 已经成交了。",
    isBeing: " 正在竞拍中。",
    isAvailable: " 可以被竞拍!",
    youcan: "您可以",
    login: " 登录 ",
    yourWallet: "您的钱包来竞拍此域名!",
    startTime: "竞拍开始时间",
    endTime: "预计结束时间",
    tips:"( 结束时间并不是确定的，为了避免您错失想要的域名，请尽早出价。 )",
    highestbid: "当前最高价",
    highestbidder: "竞标人",
    stage: "状态",
    endedTime:"竞拍结束时间",
    startBlock: "开标所属区块",
    hammerPrice: "成交价",
    buyer: "中标人",
    currentOwer: "当前拥有者",
    expiration: "域名过期时间",
    domainName: "域名",
    txid: "交易ID",
    openAuction:"开标",
    raisebid:"加价",
    endof:"竞拍结束",
    recover:"领回CGAS",
    getDomain:"领取域名"
  },
  footer: {
    aboutUs:"关于我们",
    contactUs:"联系我们",
    other:"其他项目",
    tips:"让区块链应用离人们更近",
    wallet:"Neo网页钱包",
    nns:"NNS 官网",
    neodun:"Neodun 官网",
    wechat:"微信群",
    qq:"QQ群",
    nel:"NEL官网"
  }
}