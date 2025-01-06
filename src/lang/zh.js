export default {
  common: {
    testNet: 'TestNet',
    mainNet: 'Main Net',
    copied: '已复制！',
    confirmPwdTips: '请确认并输入钱包密码。',
    confirmTips: '请确认转账',
    transSentSuccess: '交易已成功发送',
    pwdErr: '密码错误',
    ongNoEnough: 'ONG不足，无法支付转账手续费。',
    transferFailed: '交易失败。',
    networkErr: '网络错误！',
    normalWallet: '普通钱包',
    sharedWallet: '共享钱包',
    hardwareWallet: 'Ledger钱包',
    export: '导出',
    ledgerNotOpen: 'Ledger未打开',
    ledgerNotSupported: 'Ledger不支持',
    pluginDevice: '请连接设备并登录.',
    readyToSubmit: '可以提交',
    waitForSign: '等待签名',
    readyToImport: '可以连接Ledger钱包',
    existLocal: '本地已有此钱包',
    importLedgerSuccess: '导入Ledger钱包成功',
    readyToLogin: '可以登录',
    walletAddress: '钱包地址',
    authentication: '验证',
    confirmation: '确认',
    enterWalletPassword: '请输入钱包密码',
    enterIdentityPassword: '请输入ONT ID密码',
    password: '密码',
    invalidLedger: '当前Ledger设备与要打开的钱包不匹配，请尝试正确的ledger设备。',
    exportDat: '导出.dat',
    exportWIF: '导出WIF',
    changePassword: '修改密码',
    deleteWallet: '删除钱包',
    more: '更多',
    neoCompatible: '兼容NEO地址',
    versionUpdate: '您可以升级OWallet。',
    getLatestVersion: '下载最新版本。',
    changePassSuccess: '修改密码成功',
    changePassSuccessTip: '您已经修改了钱包密码。我们建议您下载并备份钱包的.dat文件。(旧的.dat文件可以被替换或者删除)',
    download: 'Download',
    balanceInsufficient: '抱歉，您的余额不足',
    exportIdentity: '导出keystore',
    deleteIdentity: '删除ONT ID',
    savedbFailed: '保存到keystore.db文件失败。请确保已设置keystore.db保存路径后重新尝试。',
    selectOep4: '选择OEP-4 Token',
    contractHash: '合约哈希：',
    txFailed: '该交易在区块链上失败。',
    availableNewVersion: '有新版本可用。为了获得更好的使用体验，请升级OWallet。',
    toUpdate: '立即升级',
    cancel: '取消'
  },

  FormField: {
    label: '名称',
    password: '密码',
    passwordConfirmation: '确认密码',
    mnemonic: '助记词',
    privateKey: '私钥',
    oldPassword: '旧密码',
    newPassword: '新密码',
    newPasswordConfirmation: '确认新的密码'
  },

  TopNav: {
    new: '新建',
    edit: '编辑'
  },

  basicInfo: {
    InvalidMnemonic: '无效的助记词。',
    errWif: '无效的WIF'
  },

  SetPaths: {
    name: '钱包文件存储路径',
    tips: '* 钱包文件keystore.db保存着您的加密私钥，请确保您的PC安全和做好keystore.db文件的备份。您需要设置keystore文件的保存路径。请不要设置到OWallet的安装位置以免更新时被覆盖。',
    close: '关闭',
    enter: '去设置'
  },

  identitys: {
    pageTit: 'ONT ID',
    createIdentity: '创建ONT ID账户',
    importIdentity: '导入ONT ID账户',
    identity: 'Identity',
    ontid: 'ONT ID'
  },

  createIdentity: {
    create: '创建ONT ID账户',
    basicInfo: '基本信息',
    confirmInfo: '确认信息',
    label: 'ONT ID账户昵称',
    password: '账户密码',
    rePassword: '确认密码',
    cancel: '取消',
    next: '继续',
    ontid: 'ONT ID',
    selectWallet: '请选择钱包来支付交易费用',
    commonWallet: '普通钱包',
    ledgerWallet: 'Ledger钱包',
    payerPassword: '输入所选钱包的密码',
    selectCommonWallet: '选择本地普通钱包',
    selectOneWallet: '请选择一个本地钱包',
    enterPassword: '请输入钱包密码',
    createSuccess: '创建ONT ID成功！'
  },

  importIdentity: {
    import: '导入ONT ID',
    basicInfo: '基本信息',
    keystore: 'ONT ID Keystore',
    ontidPassword: 'ONT ID 密码',
    label: '',
    passError: '密码错误',
    ontidNotExist: '要导入的ONT ID不存在于区块链上',
    keystoreImport: '导入ONT ID Keystore',
    invalidKeystore: '您输入的keystore不正确。',
    ontidExist: '要导入的ONT ID本地已存在。',
    importSuccess: '导入ONT ID成功。'
  },

  wallets: {
    all: '全部钱包',
    common: '普通钱包',
    shared: '共享钱包',
    temp: '之前的临时功能',
    createCommonWallet: '创建钱包',
    importCommonWallet: '导入钱包',
    createSharedWallet: '创建钱包',
    joinSharedWallet: '加入钱包',
    importLedgerWallet: '连接Ledger钱包',
    ledger: 'Ledger钱包',
    comingSoon: '敬请期待',
    ledgerHelpLink: '如何使用',
    deleteSucceess: '删除钱包成功.',
    deleteFailed: '删除钱包失败.',
    deleteingWallet: '您正在删除钱包，钱包地址是：',
    exportingWallet: '您正在导出钱包.dat文件，钱包地址是：',
    exportingWIF: '您正在导出钱包的私钥(WIF), 钱包地址是：',
    oldPassword: '旧密码',
    newPassword: '新密码',
    reNewPassword: '重复新密码',
    changePassSuccess: '修改密码成功！',
    exportOntid: '您正要导出ONT ID的keystore:',
    deleteIdentityFailed: '删除ONT ID失败',
    deleteIdentitySuccess: '删除ONT ID成功。',
    exportedWIF: '您的私钥（WIF）是：'
  },

  dashboard: {
    getTransErr: '交易记录获取失败，网络错误。请稍后重试。',
    getBalanceErr: '余额获取失败。网络错误，请稍后重试。'
  },

  createJsonWallet: {
    create: '新建普通钱包',
    basicInfo: '基本信息',
    label: '钱包名称',
    password: '输入密码',
    rePassword: '重复密码',
    next: '继续',
    cancel: '取消',
    back: '返回',
    details: '详情',
    confirmInfo: '确认信息',
    labelN: '名称',
    addressN: '地址',
    pubKeyN: '公钥',
    signatureSchemeN: '签名算法',
    wif: 'WIF',
    mnemonic: '助记词',
    privateKey: '私钥',
    backupWallet: '请备份好以上数据并保存好.dat文件。如果您忘记了钱包密码，您的私钥（WIF）将会是恢复钱包的唯一方式。',
    createSuccess: '创建普通钱包成功！',
    createFail: '创建普通钱包失败。请重试。',
    download: '下载.dat文件',
    privateKey64Hex: '私钥(64 Hex格式)',
    priavteKeywif: '私钥(WIF格式)',
    keystoreDat: 'Keystore(.dat)'
  },

  importJsonWallet: {
    datFile: '选择文件',
    invalidDatFile: '请选择正确的keystore(.dat)文件',
    selectedDatFile: '已选择文件： ',
    dat: '.dat文件',
    datImportPassword: '解密keystore文件(.dat)的密码',
    create: '导入普通钱包',
    basicInfo: '基本信息',
    label: '钱包名称',
    wif: 'WIF',
    wifTip: '请输入52位的WIF文本',
    privateKeyTip: '请输入64位HEX格式的密钥',
    datPassword: '输入新密码',
    datRePassword: '重复新密码',
    password: '输入密码',
    rePassword: '重复密码',
    next: '继续',
    cancel: '取消',
    back: '返回',
    details: '详情',
    confirmInfo: '确认信息',
    mnemonic: '请用空格分隔助记词',
    privateKey: '私钥',
    confirmImport: '确认导入',
    confirmImportExist: '要导入的钱包本地已存在。仍然要导入？',
    success: '导入钱包成功',
    saveDbFailed: '保存到Keystore失败。请稍后重试。',
    invalidPrivateKey: '请输入正确的私钥',
    setPassword: '设置密码',
    importFirstDefault: '只导入.dat文件中的默认钱包或第一个钱包'
  },

  createSharedWallet: {
    basicInfo: '基本信息',
    copayers: '联合支付人',
    processing: '处理中',
    label: '共享钱包名称',
    copayers2_12: '联合支付人(2-12)',
    address: '地址',
    inputPks: '输入 2 - 12 公钥\' 信息',
    name: '名字',
    publicKey: '公钥',
    add: '+ 增加',
    next: '继续',
    cancel: '取消',
    back: '返回',
    importSharedWallet: '导入共享钱包',
    requiredSigNum: '选择签名数量',
    success: '成功',
    duplicateCreate: '共享钱包已存在，请导入.',
    createFailed: '错误，请稍后重试。',
    createSuccess: '创建共享钱包成功',
    create: '创建共享钱包',
    walletNameErr: '钱包名称长度不可超过12个字符。',
    emptyLabel: '钱包名称不能为空.',
    pksLte2: '联合支付人数量不能少于2人。',
    invalidPk: '输入的公钥不正确',
    duplicatePks: '联合支付人中不能有重复的公钥',
    duplicateNames: '联合支付人中不能有重复的名称'
  },

  importSharedWallet: {
    import: '加入共享钱包',
    basicInfo: '基本信息',
    inputPass: '输入密码',
    importSuccess: '成功',
    inputAddress: '共享钱包地址',
    search: '查询',
    name: 'Shared Wallet 名字',
    totalCopayerNumber: '联合支付人数',
    requiredCopayerNumber: '最少签名数',
    allCopayers: '全部联合支付人地址',
    noResult: '没有结果',
    address: '地址',
    chooseLocalWallet: '选择本地钱包加入',
    localWalletInfo: '本地钱包详情',
    walletName: '钱包名字',
    pk: '公钥',
    next: '继续',
    cancel: '取消',
    back: '返回',
    join: '加入',
    inputPassword: '输入密码加入',
    joinBefore: '你已经加入过这个钱包。',
    success: '已经成功加入钱包！',
    passwordError: '密码错误。',
    sorry: '对不起！',
    notFound: '找不到该共享钱包。'
  },

  importLedgerWallet: {
    import: '连接Ledger钱包',
    label: '钱包名称',
    next: '连接',
    neoCompatible: '兼容NEO地址'
  },

  sharedWalletHome: {
    send: '发送',
    receive: '接收',
    claim: '认领',
    rule: '规则',
    copayers: '联合支付人',
    pendingTx: '待处理交易',
    completedTx: '已完成交易',
    owners: '所属人',
    address: '地址',
    amount: '数量',
    max: '最大',
    to: '接收',
    recipient: '接收方地址',
    cancel: '取消',
    next: '继续',
    back: '返回',
    submit: '提交',
    asset: '资产',
    sponsor: '发起人',
    dragDecide: '拖动序号决定顺序',
    fee: '费用',
    inputPassword: '输入密码',
    inputPassToTransfer: '输入密码完成转账',
    walletAddress: '钱包地址',
    createTime: '创建时间',
    balance: '余额',
    confirmation: '确认',
    agreeToSend: '我同意发送资产',
    signSequence: '签名顺序',
    sign: '签名',
    checkMore: '查看更多',
    publicKey: '公钥',
    redeemOng: '提取ONG',
    paxMgmt: 'PAX管理',
    unprocessed: '未处理',
    processing: '处理中',
    completed: '已完成',
    txMgmt: '多签交易管理',
    createTransferFailed: '创建转账交易失败',
    createTransferSuccess: '创建转账交易成功',
    txSendingTochain: '该交易正在发送上链。'
  },

  pax: {
    ethAddress: 'Eth 地址',
    ontAddress: 'ONT 地址',
    amount: '数额',
    date: '日期',
    toProcess: '去处理',
    paxStart: '发起',
    paxSign: '签名',
    selectCurrentSigner: '选择当前签名钱包: ',
    back: '返回',
    confirm: '确认',
    sponsorSign: '发起人签名',
    inputPassword: '输入当前签名钱包密码',
    queryEthScan: '查询Eth转出总额',
    currentSign: '当前签名者签名',
    txToSend: '要发送上链的交易个数:',
    txSent: '已发送上链的交易个数: ',
    sendingTx: '正在发送交易上链:',
    selectedNum: '已选择条目数量: ',
    totalAmount: '已选择条目的PAX总额: ',
    ethTotal: '已收到的ETH总额: ',
    startProcessSuccess: '发起处理流程成功',
    signSuccess: '签名交易成功',
    ledgerSignMultiTimes: '您可能需要在ledger设备上进行多次签名',
    hasSignedSent: '注意！这些交易已经被签名并已发送到链上。请检查已完成的数据。',
    toEthScan: '查看ETH Scan',
    txCompleted: '已上链',
    txDetail: '查看交易',
    toVarify: '验证',
    varifySuccess: '验证通过',
    varifyFailed: '验证失败',
    varifyResult: '验证结果',
    failedTxhashes: '验证失败的交易哈希'
  },

  sharedTx: {
    startTx: '发起多签交易',
    signTx: '签名多签交易',
    selectSponsor: '选择发起人',
    createTx: '构建多签交易',
    contractHash: '合约哈希',
    method: '方法名',
    parameters: '参数列表',
    starterSign: '发起人签名',
    txSerialized: '签名后的交易：',
    addSign: '增加签名',
    txContent: '交易内容',
    currentSign: '当前签名地址',
    selectSigner: '选择签名地址',
    copy: '复制',
    send: '立即发送',
    isSendTxTip: '该交易的签名数量已满足要求。是否立即发送交易上链？',
    txSentSuccess: '发送交易上链成功。',
    paramsError: '输入参数有误。请检查。'
  },

  commonWalletHome: {
    claimableOng: '可提取的ONG',
    unboundOng: '未绑定的ONG',
    redeem: '提取',
    receive: '接收',
    swap: '映射',
    walletQrCode: '钱包地址二维码',
    walletAddress: '钱包地址',
    publicKey: '公钥',
    redeemCharge: '提取ONG需要支付0.05ONG',
    inputPass: '请输入钱包密码',
    emptyPass: '密码不能为空',
    cancel: '取消',
    submit: '提交',
    swapText: '欢迎使用“一站式”主网ONT切换。用户可以在这里将NEP-5 ONT映射成主网ONT。映射将在一个月内完成，您可以登录swap.ont.io查询映射状态。',
    stepFollow: '您只需要使用以下步骤执行操作：',
    step1: '导入NEO钱包的私钥创建钱包',
    step2: '点击映射按钮发起映射',
    step3: '查看映射进度',
    swapAmount: '映射数额',
    nep5Balance: 'NEP-5 ONT 余额:',
    password: '密码',
    validAmount: "请输入正确数额",
    checkMore: '查看更多',
    balance: '余额',
    scriptHash: '合约哈希',
    add: '+ 添加',
    addOep4: '添加OEP-4 Token',
    enterScripthash: '请输入OEP-4的合约哈希',
    invalidScriptHash: '请输入正确的合约哈希',
    addOep4Success: '添加OEP-4 token成功！',
    noOep4Contract: '在链上找不到该OEP4合约',
    networkError: '网络错误！请稍后重试。',
    oep4Exists: '您已经添加过该OEP-4 Token。',
    go: '查看详情'
  },

  transfer: {
    inputValidAmount: '请输入有效的转账金额。',
    inputValidAddress: '请输入有效的转账地址。',
    exceedBalance: '转账金额不能超余额',
    ongBalanceNotEnough: '您的ONG余额不足以支付转账和手续费。',
    //Needs translation
    warningTransferAllONG: 'Transferring this amount of ONG means you will not have enough ONG to pay\r\nfor further transaction fees (including claiming unbound ONG). \r\n\r\nContinue?'
  },
  setting: {
    name: '设置',
    net: '网络',
    lang: '语言',
    testNet: 'ONT测试网络',
    mainNet: 'ONT主网',
    en: 'English',
    zh: '中文',
    pathTit: '当前路径： ',
    path: '钱包保存路径(请不要设到OWallet的安装位置！)',
    change: '修改',
    setNetworkSuccess: '网络成功设置为：',
    wallets: '钱包',
    ontid: 'ONT ID',
    nodeStake: '节点质押',
    help: '帮助',
    settings: '设置',
    nodeAddress: '节点',
    setNodeSuccess: '节点成功设置为：',
    notInstallationPath: '请不要设置到Owallet的安装位置。',
    notSetPath: '未设置keystore保存路径。'
  },
  ledgerWallet: {
    nameOfLedgerWallet: 'Ledger钱包名称',
    info: 'Ledger钱包信息',
    connectApp: '请连接您的ledger设备并打开ONT app.',
    status: '设备状态',
    labelEmpty: '钱包名称不能为空.',
    deviceError: '不能连接到设备，请重试.',
    signFailed: '使用ledger签名交易失败。',
    selectAccount:"请选择您Ledger设备里的账户（可多选）",
    normalMode:'普通模式',
    advancedMode:'高级模式',
    alreadyImported:"部分选中账户已导入",
    specifyPath:"请选择并指定导入帐户的路径",
  },
  ledgerStatus: {
    NOT_FOUND: 'Ledger没有打开',
    NOT_SUPPORT: 'Ledger不支持',
    NO_DEVICE: '请连接Ledger并打开',
    READY: 'Ledger准备就绪',
    NOT_OPEN: 'Ledger上的ONT app没有打开'
  },
  nodeStake: {
    iHaveKnown: '我已知晓',
    ontid: 'ONT ID',
    nodeStake: '节点质押',
    stakeWalletAddress: '质押钱包地址',
    nodePk: '节点公钥',
    contract: '质押合约',
    commitmentQuantity: '承诺质押数量',
    stakeQuantity: '实际质押数量',
    claimableQuantity: '可提取质押数量',
    stake: '质押',
    feeTip: '质押需要收取500ONG作为服务费',
    selectOntid: '选择ONT ID',
    selectStakeWallet: '选择质押钱包',
    next: '下一步',
    selectIdentity: '选择你的ONT ID',
    selectIndividualWallet: '请选择普通钱包',
    selectLedgerWallet: '请连接您的ledger设备并打开ONT',
    invalidOntid: '无效的ONT ID',
    invalidAddress: '无效的质押钱包地址',
    stakeQuantityEmpty: '请输入质押数量',
    password: '输入密码',
    signWithOntid: '使用ONT ID签名',
    signWithWallet: '选择钱包',
    enterOntidPass: '请输入ONT ID的密码',
    enterWalletPass: '请输入钱包的密码',
    quitWarmMsg: '选择退出节点，则可退回所有初始质押。候选节点退出后一周期可以退回质押，共识节点需要两周期。退出节点后，如果想要再次运行节点，需要重新注册。',
    back: '返回',
    recall: '撤销',
    refund: '退款',
    quitNode: '退出节点',
    newStake: '新质押',
    passwordEmpty: '密码不能为空',
    search: 'Search'

  },
  nodeStakeStatus: {
    transfering: '转账中',
    transfered: '转账完成',
    transferFailed: '转账失败',
    audit: '审核',
    auditing: '审核中',
    audited: '审核完成',
    auditFailed: '审核失败',
    stake: '质押',
    staked: '质押完成',
    nodeExited: '节点退出',
    refund: '退款',
    refunding: '退款中',
    refunded: '退款完成',
    refundFailed: '退款失败',
    stakeExited: '质押退出',
    quitStake: '退出质押',
    unfrozenToRefund: '解除冻结成功，可以申请退款',
    transferNeedTime: '转账需要一定时间',
    serviceFee: '质押需要收取500ONG作为服务费',
    auditNeedTime: '审核需要一定时间',
    refundNeedTime: '退款需要一定时间',
    txFailed: '交易失败'

  },
  redeemInfo: {
    info: '提取ONG',
    claimableOng: '可提取ONG是您可以提取的ONG的数量，手续费为0.05个ONG。每次钱包中完成一笔交易后，该余额会更新。',
    unboundOng: '已解绑的ONG是指尚未添加到您的可提取ONG余额（仅会在您钱包做出一笔ONT交易后更新）中的ONG。当您的地址完成一笔交易后，您可提取的ONG余额将会更新（即将已解绑的ONG数额将添加到您可提取的ONG余额中去。）',
    claimableOngName: '可提取ONG：',
    unboundOngName: '已解绑的ONG：',
    noClaimableOng: '您没有可提取的ONG。当您地址上完成一笔ONT转出交易后，可提取的ONG余额将会更新。'
  },
  nodeMgmt: {
    nodeUser: '您是节点用户，从这里可以管理节点质押',
    nodeStakeMgmt: '节点质押管理',
    normalUser: '您是普通用户，从这里可以参加授权质押',
    stakeAuthorizaton: '节点授权质押',
    nodeStake: '节点质押',
    userStakeAuthorization: '用户授权质押',
    newStake: '提交新的节点质押',
    allowStakes: '允许其他用户授权质押',
    deny: '拒绝',
    permit: '允许',
    yourStakeAmount: '您的节点质押数额',
    stakeLimit: '节点质押数额上限',
    userNumber: '当前参与授权质押的用户数量',
    userStakeAmount: '当前用户授权质押数额',
    rewardsPerMonth: '预计每月收益总额',
    rewardsTip: '预计每月收益总额包括节点的和参与授权质押用户的收益总额',
    rewardProportion: '收益分配比例: ',
    nodeRewardProportion: '节点质押收益分配比例',
    userRewardProportion: '用户质押收益分配比例',
    current: '当前',
    nodeRewardProportionTip: '节点质押收益分配比例：表示节点获得节点质押部分的ONT收到的交易手续费和解绑ONG收益的百分比。',
    userRewardProportionTip: '用户质押收益分配比例：表示节点获得用户质押部分的ONT收到的交易手续费和解绑ONG收益的百分比。',
    confirm: '确认',
    changesTakeEffect: '更改需在经过两轮共识周期后生效(每轮周期大约30天)。',
    stakeAuthorization: '授权质押',
    toNextRound: '到下一轮还有',
    rank: '排名',
    name: '节点名称',
    currentStake: '当前质押总额',
    process: '进度',
    changes: '排名变化',
    userParticipate: '请确保您是想要参与授权质押的用户。',
    nodeName: '节点名称',
    walletAddress: '您的钱包地址',
    inAuthorization: '授权质押中',
    cancelStakeAuthorization: '取消授权质押',
    locked: '取消的授权质押（锁定中）',
    claimable: '可提取',
    redeem: '提取',
    profit: '收益',
    rewards: '收益',
    newStakeAuthorization: '提交新的授权质押',
    cancelAuthorization: '取消授权质押',
    units: '授权质押份数',
    stakeAmountTip: '质押数额 = 份数 * 1 ONT/每份.',
    stakeAmount: '质押数额',
    submit: '提交',
    allowedStakeUnits: '允许授权质押份数',
    allowedStakeAmount: '允许授权质押数额',
    noChange: '您没有修改',
    noRewards: '没有可提取的收益',
    switchWallet: '切换钱包',
    noClaimableOnt: '没有可提取的ONT',
    amountToCancel: '要取消的质押数额',
    unitToCancel: '要取消的质押份数',
    invalidInput: '请输入合理的值',
    peerNotAllowAuthorize: '此节点当前不允许授权质押',
    addInitPos: '增加初始质押',
    reduceInitPos: '减少初始质押',
    amountToAdd: '要增加的质押数额',
    amountToReduce: '要减少的质押数额',
    notThanCommitment: '质押数额不能少于承诺质押数额。',
    notLessTotalPos: '初始质押数太小。',
    notThanMax: '允许授权质押数额不能超过节点质押数额上限。',
    refresh: '刷新',
    totalStakeAmount: '授权质押总额',
    blocks: '区块',
    proportionNextRound: '质押用户收益分配比例（节点/用户）',
    proportionNextRoundTip: '这是节点选择的在下一轮共识中，分享给授权质押用户的节点自身质押部分ONT和用户质押部分ONT收到的手续费收益和解绑ONG收益的比例。\n请注意，并非所有节点都与授权质押用户分享本体基金会的奖励。点击下面的链接查看更多相关信息。',
    authorizationFAQ: '节点授权质押常见问题解答',
    nodeAndUser: '节点 / 用户',
    authorizeTip: '用户对该节点的授权抵押金额，包括本轮新授权的ONT和已生效的授权ONT，取消授权会优先取消本轮新授权的ONT，取消后进入用户的可提取ONT中。本轮新授权的ONT不足则会取消已生效的授权ONT，按照节点是候选/共识状态分别锁定1轮或2轮，之后进入用户的可提取ONT中。',
    rewardTip: '本体网络收到的所有手续费按照50%/50%的比例分给所有候选节点和共识节点，其中候选节点部分按照节点总抵押大小线性分配到每个候选节点，每个候选节点先拿走自己的部分（百分比），剩下的按照每个地址授权ONT的多少线性分配到每个地址。其中共识节点部分按照分润曲线分配到每个共识节点，每个共识节点先拿走自己的部分（百分比），剩下的按照每个地址授权ONT的多少线性分配到每个地址。',
    unboundOng: '解绑的 ONG',
    activeT: '本轮生效',
    activeT1: '下一轮生效',
    activeT2: '下下轮生效',
    changeRewardProportion: '修改收益分配比例',
    edit: '修改',
    stakeHistory: '我的质押',
    cancelUnits: '份',
    stakeWalletAddress: '质押钱包地址',
    lastUpdate: '上次更新时间',
    walletRewardTip: '这是当前周期内您的钱包所有的授权质押收益',
    switchMainnet: '请切换到主网。',
    consensusNode: '共识节点',
    candidateNode: '候选节点',
    lockedONT: '当前锁定的ONT是由智能合约暂时持有的用户授权质押数额。锁定期满后，会在可提取的ONT中显示并可提取',
    unboundONG: '这是用户授权质押的ONT所解绑的ONG。',
    profitONG: '这是您已获得的交易费收益。该收益会在每轮共识周期开始时更新。',
    getProfitPart: '产生收益中',
    newStakePart: '新的质押',
    claimableONT: '可提取ONT',
    redeemInitPos: '提取可提取质押',
    initPosInLock: "锁定中",
    initPosRedeemable: '可提取',
    noClaimbleInitPos: '没有可提取的初始质押。',
    redeemInitPosOk: '确认提取',
    hasClaimableInitPos: '您还有可提取的初始质押。请先提取该部分ONT。',
    noClaimbleToRefund: '没有可提取的ONT。无法提款。',
    newNodeApply: '注册新节点',
    nodeApplyTip: '注册成为本体的节点',
  },
  vote: {
    node: 'Node',
    vote: '治理投票',
    voteTip: "如果您是已授权的用户，从这里可以参与Ontology的治理投票",
    login: '登录',
    notSeeWallet: '没有看到您的钱包？导入一个。',
    importHere: '由此导入',
    notStart: '未开始',
    inProgress: '进行中',
    finished: '已结束',
    canceled: '已取消',
    nodeCanVoteOnly: '当前仅北斗共识节点用户可以参与投票',
    title: '标题',
    detail: '内容',
    votingStarts: '投票开始时间',
    votingEnds: '投票结束时间',
    back: '返回',
    submit: '提交',
    submitVoteSuccess: '投票成功!',
    submitVoteFail: '投票失败!',
    stopVoteSuccess: '取消投票成功!',
    stopVoteFail: '取消投票失败!',
    createVoteSuccess: '创建投票成功!',
    createVoteFail: '创建投票失败!',
    onlySupportEnglish: '目前仅支持输入英文内容',
    fillBlanks: '请填写空白',
    endTimeError: "投票结束时间必须是将来时间",
    votingTopics: '投票主题',
    votingDetail: '投票内容',
    stopVote: '停止投票',
    info: '信息',
    startTime: '开始时间',
    endTime: '结束时间',
    hash: 'Hash',
    creatorAddress: '创建者地址',
    votingStatus: '投票状态',
    myVotes: '我的投票',
    approval: '赞成',
    opposition: '反对',
    allVotes: '所有投票',
    created: '我创建的',
    duration: '持续时间',
    notAllowVote: '您现在不能投票。该项投票现在是: ',
    notAllowStop: '您现在不能结束投票。该项投票现在是: ',
    name: '名称',
    address: '地址',
    votes: '投票数',
    selectWallet: '请选择节点运营钱包',
    startTimeError: '投票开始时间不能晚于结束时间',
    new: '新建'
  },
  nodeApply: {
    newNodeApply: '注册新节点',
    stakeWallet: '节点质押钱包',
    operationWallet: '节点运营钱包',
    selectOperationWallet: '选择运营钱包',
    operationPk: '运营钱包公钥',
    enterOperationPk: '输入运营钱包公钥',
    invalidOperationPk: '错误的运营钱包',
    stakeAmount: '质押金额',
    inputStakeAmount: '输入质押金额',
    next: '下一步',
    ok: '确认',
    cancel: '取消',
    operationWalletPublickey: '运营钱包公钥',
    registerSuccess: '恭喜注册节点成功',
    completeNodeInfo: '立刻完善节点信息',
    later: '稍后再说',
    sameWalletNotAllowed: '运营钱包和质押钱包不能是同一个钱包',
    operationWalletRequired: '运营钱包是必需的',
    stakeWalletRequired: '质押钱包是必需的',
    stakeAmountRequired: '质押金额是必需的',
    minStateAmount: '质押金额至少是10,000 ONT',
    proxyServiceTip: '本体社区提供了节点代运营服务。',
    proxyServiceLink: '点击这里查看详情。'
  },
  myNode: {
    myNode: '我的节点',
    stakeWalletAddress: '质押钱包地址',
    operationWalletPk: '运营钱包公钥',
    manage: '管理',
    applyNode: '注册新节点'
  },
  nodeInfo: {
    nodeInfo: '节点信息',
    name: '名称',
    enterName: '节点名称',
    logo: 'Logo',
    enterLogo: 'Logo链接',
    location: '地区',
    enterLocation: '节点所在地区',
    ip: 'IP',
    enterIp: '节点的IP',
    description: '描述',
    enterDesc: '节点的描述',
    website: '网站',
    enterWebsite: '节点网站',
    telegram: 'Telegram',
    enterTelegram: '节点的Telegram',
    twitter: 'Twitter',
    enterTwitter: '节点的Twitter',
    facebook: 'Facebook',
    enterFacebook: '节点的Facebook',
    contactOntologyEmail: '联系Ontology的邮箱',
    enterContactEmail: '联系邮箱',
    openEmail: '公开的邮箱',
    enterOpenEmail: '公开的邮箱',
    ifOpenInfo: '是否公开节点信息',
    submit: '提交',
    updateSuccess: '更新成功',
    updateFailed: '更新失败',
    ledgerWalletNotSupportForNow: '使用Ledger注册的节点，暂时不支持更新节点相关信息.请发送邮件至：'
  },
  exchange: {
    exchange: 'Exchange',
    changelly: 'Changelly',
    cryptonex: 'Cryptonex',
    loading: 'Loading latest pricing information, please wait..'
  },
  dapps: {
    dapps: 'DApps',
    sesameSeed: '芝麻籽',
    sesameseedDesc: 'Sesameseed voting management',
    notification: '注意',
    userPolicy: '您将跳转至第三方dApp页面，在第三方dApp上的使用行为将适用该第三方dApp的《用户协议》和《隐私政策》，由该第三方dApp直接并单独向您承担责任',
    ontidMgmt: '管理ONT ID。该功能以后会被移除。请备份ONT ID相关数据。'
  },
  sesameseed: {
    stakeAmountTip: 'Stake amount for Sesameseed is 1 unit equals 1 ONT',
    authorizeTip: 'If a new stake is canceled, it will add to the “canceled” ONT and be directly deposited in the users account within 24 hours. If authorized ONT from a previous consensus round is canceled it will be added to the “canceled” ONT and be directly deposited in the originating users account within 24 hours of the beginning of the next consensus round if Sesameseed is a candidate node (or one round later if Sesameseed is a consensus node). If a user has both authorized ONT from this consensus round and a previous round and cancels an ONT amount exceeding the amount from this round, they will receive authorized ONT from this consensus round first and the remaining authorized ONT in the next round.',
    rewardTip: 'Sesameseed rewards Ontology Stake Authorizations in SEED for both foundation rewards created as a candidate or consensus node as an OEP-4 token “SEED”. This token is rewarded directly to Staking participants. In addition to node rewards, 100% of ONG unbound while staking is pooled by all stake authorizations and added to the total “Node Reward”, as a result this node reward is also provided in the form of “SEED” Token. Rewards are distributed daily without the need to redeem. Find out more at https://sesameseed.org.',
    pendingWithdrawals: 'Pending canceled stake authorization'
  }
}
