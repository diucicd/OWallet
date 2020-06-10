export default {
  common: {
    testNet: 'TestNet',
    mainNet: 'MainNet',
    copied: 'Copied!',
    confirmPwdTips: 'Please confirm and input the password your wallet.',
    confirmTips: 'Please confirm the transfer.',
    transSentSuccess: 'Transaction has been sent successfully!',
    pwdErr: 'Password error',
    ongNoEnough: 'Transaction does not have enough ONG to process',
    transferFailed: 'Transfer failed. ',
    networkErr: 'Network error!',
    normalWallet: 'Individual wallet',
    sharedWallet: 'Shared wallet',
    hardwareWallet: 'Ledger wallet',
    export: 'Export',
    ledgerNotOpen: 'Ledger not open',
    ledgerNotSupported: 'Ledger not supported',
    pluginDevice: 'Please plugin the device and login.',
    readyToSubmit: 'Ready to submit',
    waitForSign: 'Waiting for sign',
    readyToImport: 'Ready to connect',
    existLocal: 'The wallet is already in local',
    importLedgerSuccess: 'Import ledger wallet successfully.',
    readyToLogin: 'Ready to login',
    walletAddress: 'Wallet Address',
    authentication: 'Authentication',
    confirmation: 'Confirmation',
    enterWalletPassword: 'Please enter your wallet password',
    enterIdentityPassword: 'Please enter your ONT ID password',
    password: 'Password',
    invalidLedger: 'The current ledger dose not match with the wallet.Please try with another ledger device.',
    exportDat: 'Export .dat',
    exportWIF: 'Export WIF',
    changePassword: 'Change Password',
    deleteWallet: 'Delete Wallet',
    more: 'More',
    neoCompatible: 'NEO Address Compatible',
    versionUpdate: 'You can upgrade your OWallet.',
    getLatestVersion: 'Get the latest version here.',
    changePassSuccess: 'Change password successfully',
    changePassSuccessTip: 'You have already changed the password of the wallet. We recommend you to download and backup the .dat file.(Please replace or delete the old .dat file of this wallet.)',
    download: 'Download .dat',
    balanceInsufficient: 'Sorry, your balance is insufficient.',
    exportIdentity: 'Export keystore',
    deleteIdentity: 'Delete ONT ID',
    savedbFailed: 'Save to db file failed.Please make sure you have set the path to save the keystore.db file and try again.',
    selectOep4: 'Select OEP-4 token',
    contractHash: 'Contract hash: ',
    txFailed: 'The transaction failed on blockchain. ',
    availableNewVersion: 'A new version is available. In order to get a better user experience, please upgrade OWallet.',
    toUpdate: 'Upgrade now',
    cancel: 'Cancel'
  },

  FormField: {
    label: 'name',
    password: 'password',
    passwordConfirmation: 'password confirmation',
    mnemonic: 'mnemonic',
    privateKey: 'private key',
    oldPassword: 'old password',
    newPassword: 'new password',
    newPasswordConfirmation: 'new password confirmation'
  },

  TopNav: {
    new: 'New',
    edit: 'Edit'
  },

  basicInfo: {
    InvalidMnemonic: 'Invalid mnemonic.',
    errWif: 'Please enter a valid WIF.'
  },

  SetPaths: {
    name: 'Keystore File Path',
    tips: '*The keystore.db file stores your encrypted private keys. Please make sure your computer is safe and make a backup of your keystore.db file. You need to set a file path for your keystore. Please do not set to the installation location of OWallet.',
    close: 'Close',
    enter: 'Set file path'
  },

  identitys: {
    pageTit: 'ONT ID',
    createIdentity: 'Create ONT ID',
    importIdentity: 'Import ONT ID',
    identity: 'Identity',
    ontid: 'ONT ID'
  },

  createIdentity: {
    create: 'Create ONT ID',
    basicInfo: 'Basic info',
    confirmInfo: 'Confirm info',
    label: 'Name of Identity (ONT ID)',
    password: 'Password',
    rePassword: 'Repeat password',
    cancel: 'Cancel',
    next: 'Next',
    ontid: 'ONT ID',
    selectWallet: 'Select Wallet to pay for the transaction fee',
    commonWallet: 'Individual Wallet',
    ledgerWallet: 'Ledger Wallet',
    payerPassword: 'Input the password of your selected wallet',
    selectCommonWallet: 'Select local individual wallet',
    selectOneWallet: 'Please select one individual wallet',
    enterPassword: 'Please enter the password of your selected wallet',
    createSuccess: 'Create ONT ID successfully!'
  },

  importIdentity: {
    import: 'Import ONT ID',
    basicInfo: 'Basic info',
    keystore: 'ONT ID Keystore',
    ontidPassword: 'ONT ID Password',
    label: '',
    passError: 'Password error',
    ontidNotExist: 'The ONT ID to import does not exist on the blockchain',
    keystoreImport: 'ONT ID Keystore Import',
    invalidKeystore: 'The keystore you input is invalid.',
    ontidExist: 'The identity already exists in local.',
    importSuccess: 'Import Identity succeed!'
  },

  wallets: {
    all: 'All Wallets',
    common: 'Individual Wallet',
    shared: 'Shared Wallet',
    temp: 'TEMP',
    createCommonWallet: 'Create Wallet',
    importCommonWallet: 'Import Wallet',
    createSharedWallet: 'Create Wallet',
    joinSharedWallet: 'Join Wallet',
    importLedgerWallet: 'Connect Ledger',
    ledger: 'Ledger Wallet',
    comingSoon: 'Coming soon...',
    ledgerHelpLink: 'How to use?',
    deleteSucceess: 'Delete wallet successfully.',
    deleteFailed: 'Delete wallet failed.',
    deleteingWallet: 'You are about to delete wallet with address: ',
    exportingWallet: 'You are about to export the .dat file of wallet with address: ',
    exportingWIF: 'You are about to export the private key(WIF) of wallet with address: ',
    oldPassword: 'Old password',
    newPassword: 'New password',
    reNewPassword: 'Repeat new password',
    changePassSuccess: 'Change password successfully!',
    exportOntid: 'You are about to export the keystore of identity with ONT ID:',
    deleteIdentityFailed: 'Delete ONT ID failed',
    deleteIdentitySuccess: 'Delete ONT ID successfully',
    exportedWIF: 'Your private key (WIF) is:'
  },

  dashboard: {
    getTransErr: 'Fetch transaction history failed. Network error. Please try later.',
    getBalanceErr: 'Fetch balance failed. Network error. Please try later.'
  },

  createJsonWallet: {
    create: 'Create Individual Wallet',
    basicInfo: 'Basic info',
    label: 'Name of Individual Wallet',
    password: 'Password',
    rePassword: 'Repeat password',
    next: 'Next',
    cancel: 'Cancel',
    back: 'Back',
    details: '',
    confirmInfo: 'Confirm info',
    labelN: 'Label',
    addressN: 'Address',
    pubKeyN: 'Public key',
    signatureSchemeN: 'Signature scheme',
    wif: 'WIF',
    mnemonic: 'Mnemonic phrase',
    privateKey: 'Private Key',
    backupWallet: 'Please make a backup of the above information and save the .dat file. If you forget your wallet password, your private key (WIF) will be the only way for you to recover your wallet.',
    createSuccess: 'Create individual wallet successfully.',
    createFail: 'Create individual wallet failed. Please try again.',
    download: "Download .dat",
    privateKey64Hex: 'Private key (64 Hex)',
    priavteKeywif: 'Private key (WIF)',
    keystoreDat: 'Keystore (.dat)'
  },

  importJsonWallet: {
    datFile: 'Select file',
    invalidDatFile: 'Please select the valid keystore (.dat) file.',
    selectedDatFile: 'Selected file: ',
    dat: '.dat File',
    datImportPassword: 'Password to decrypt keystore (.dat)',
    create: 'Import Individual Wallet',
    basicInfo: 'Basic info',
    label: 'Set a new name for the wallet',
    wif: 'WIF',
    wifTip: 'Please enter 52-bit WIF',
    privateKeyTip: 'Please enter private key with 64 byte hex format',
    datPassword: 'New Password',
    datRePassword: 'Repeat New password',
    password: 'Password',
    rePassword: 'Repeat password',
    next: 'Import',
    cancel: 'Cancel',
    back: 'Back',
    details: '',
    confirmInfo: 'Confirm info',
    mnemonic: 'Please use a space to separate each of the words.',
    privateKey: 'Private Key',
    createSuccess: 'Create Individual wallet successfully!',
    confirmImport: 'Confirm Import',
    confirmImportExist: 'The wallet to import is already in your local. Still want to import it?',
    success: 'Import wallet successfully!',
    saveDbFailed: 'Save to keystore failed. Please try later.',
    invalidPrivateKey: 'Please enter valid private key.',
    setPassword: 'Set password',
    importFirstDefault: 'Will only import the default wallet or the first wallet in the .dat file'
  },

  createSharedWallet: {
    basicInfo: 'Basic info',
    copayers: 'Co-payers',
    processing: 'Processing',
    label: 'Name of shared wallet',
    copayers2_12: 'Co-payers(2-12)',
    address: 'Address',
    inputPks: 'Input 2 - 12 public keys\' info',
    name: 'Name',
    publicKey: 'Public key',
    add: '+ Add',
    next: 'Next',
    cancel: 'Cancel',
    back: 'Back',
    importSharedWallet: 'Import shared wallet',
    requiredSigNum: 'Number of required signatures ',
    success: 'Success',
    duplicateCreate: 'The shared wallet is already existed.Please import it.',
    createFailed: 'Failed. Please try later.',
    createSuccess: 'Create shared wallet successfully.',
    create: 'Create Shared Wallet',
    walletNameErr: 'Wallet name can not be more than 12 characters',
    emptyLabel: 'Wallet name can not be empty',
    pksLte2: 'The number of co-payers can not be less than 2. ',
    invalidPk: 'Invalid public key',
    duplicatePks: 'There must be no duplicate public key among the co-payers',
    duplicateNames: 'There must be no duplicate names key among the co-payers'
  },

  importSharedWallet: {
    import: 'Join shared wallet',
    basicInfo: 'Basic info',
    inputPass: 'Input password',
    importSuccess: 'Success',
    inputAddress: 'Address of shared wallet',
    search: 'Search',
    name: 'Shared wallet name',
    totalCopayerNumber: 'Total number of co-payers',
    requiredCopayerNumber: 'Required number of co-payers',
    allCopayers: 'Address of all Co-payers',
    noResult: 'No result',
    address: 'Address',
    chooseLocalWallet: 'Select local wallet to join',
    localWalletInfo: 'Local wallet detail',
    walletName: 'Wallet name',
    pk: 'Public key',
    next: 'Next',
    cancel: 'Cancel',
    back: 'Back',
    join: 'Join',
    inputPassword: 'Enter password to join',
    joinBefore: 'You have joined this wallet before.',
    success: 'Join shared wallet succeed!',
    passwordError: 'Password error.',
    sorry: 'Sorry!',
    notFound: 'The shared wallet you are looking for is not found.'
  },

  importLedgerWallet: {
    import: 'Connect Ledger Wallet',
    label: 'Name of Ledger Wallet',
    next: 'Connect',
    neoCompatible: 'NEO Address Compatible'
  },

  sharedWalletHome: {
    send: 'Send',
    receive: 'Receive',
    claim: 'Claim',
    rule: 'Rule',
    copayers: 'Co-payers',
    pendingTx: 'Pending transactions',
    completedTx: 'Completed transactions',
    owners: 'Owners',
    address: 'Address',
    amount: 'Amount',
    max: 'MAX',
    to: 'To',
    recipient: 'Recipient address',
    cancel: 'Cancel',
    next: "Next",
    back: 'Back',
    submit: 'Submit',
    asset: 'Asset',
    sponsor: 'Sponsor',
    dragDecide: 'Drag to decide sign sequence',
    fee: 'Fee',
    inputPassword: 'Input Password',
    inputPassToTransfer: 'Input password to complete transfer',
    walletAddress: 'Wallet address',
    createTime: 'Creation time',
    balance: 'Balance',
    confirmation: 'Confirmation',
    agreeToSend: 'I confirm the asset amount and recipient address are correct.',
    signSequence: 'Sign sequence',
    sign: 'Sign',
    checkMore: 'Check more',
    publicKey: 'Public key',
    redeemOng: 'Redeem ONG',
    paxMgmt: 'PAX management',
    unprocessed: 'Unprocessed',
    processing: 'In processing',
    completed: 'Completed',
    txMgmt: 'Transaction management',
    createTransferFailed: 'Create transfer transaction failed.',
    createTransferSuccess: 'Create transfer transaction succeed.',
    txSendingTochain: 'This transaction is sending to the blockchain now.'
  },

  pax: {
    ethAddress: 'Eth Address',
    ontAddress: 'Ont Address',
    amount: 'Amount',
    date: 'Date',
    toProcess: 'To process',
    paxStart: 'Start',
    paxSign: 'Sign',
    selectCurrentSigner: 'Select current signer: ',
    back: 'Back',
    confirm: 'Confirm',
    sponsorSign: 'Sponsor sign',
    inputPassword: 'Input the password of current signer',
    queryEthScan: 'Query Total Eth amount',
    currentSign: 'Current signer sign',
    txToSend: 'Number of transactions to send: ',
    txSent: 'Number of transactions sent succeed: ',
    sendingTx: 'Sending transactions',
    selectedNum: 'Number of selected orders: ',
    totalAmount: 'Total amount of selected orders: ',
    ethTotal: 'Total amount of received ETH: ',
    startProcessSuccess: 'Start process succeed.',
    signSuccess: 'Sign transactions succeed.',
    ledgerSignMultiTimes: 'You may have to sign multi times on your ledger device',
    hasSignedSent: 'These transactions has been signed and sent. Please review the completed data.',
    toEthScan: 'To Eth Scan',
    txCompleted: 'Transaction completed',
    txDetail: 'Detail',
    toVarify: 'Verify',
    varifySuccess: 'Verify succeed!',
    varifyFailed: 'Verify failed!',
    varifyResult: 'Verified result',
    failedTxhashes: 'Failed transaction hash:'
  },

  sharedTx: {
    startTx: 'Start multi-sign transaction',
    signTx: 'Sign multi-sign transaction',
    selectSponsor: 'Select sponsor',
    createTx: 'Create Transaction',
    contractHash: 'Contract hash',
    method: 'Method',
    parameters: 'Parameters',
    starterSign: 'Start sign',
    txSerialized: 'Signed and serialized transaction：',
    addSign: 'Add signature',
    txContent: 'Transaction data',
    currentSign: 'Current signer',
    selectSigner: 'Select wallet to sign',
    addSign: 'Add signature',
    copy: 'Copy',
    send: 'Send now',
    isSendTxTip: 'The transaction can be sent to the blockchain now. Confirm to send?',
    txSentSuccess: 'Send transaction succeed.',
    paramsError: 'Error parameters. Please check the input.'
  },

  commonWalletHome: {
    claimableOng: 'Claimable ONG',
    unboundOng: 'Unbound ONG',
    redeem: 'Redeem',
    receive: 'Receive',
    swap: 'Swap',
    walletQrCode: 'Wallet QR code',
    walletAddress: 'Wallet address',
    publicKey: 'Public key',
    redeemCharge: 'Each redeem charges 0.01 ONG',
    inputPass: 'Please input your wallet password',
    emptyPass: 'Password can not be empty',
    cancel: 'Cancel',
    submit: 'Submit',
    swapText: 'Here you can perform the MainNet ONT token swap.Users can exchange Nep-5 ONT for ONT for ONT on the Ontology MainNet.Swap takes up to 1 month, you can check the status on https://swap.ont.io',
    stepFollow: 'Just do as follows:',
    step1: '1. Import your private key(from your NEO wallet) to create a wallet',
    step2: '2. Press [Swap] button to start the swap',
    step3: '3. View the status of your token swap',
    swapAmount: 'Swap Amount',
    nep5Balance: 'Balance of NEP-5 ONT:',
    password: 'Password',
    validAmount: 'Please input valid amount',
    checkMore: 'Check more',
    balance: 'Balance',
    scriptHash: 'Script hash',
    add: '+ Add',
    addOep4: 'Add OEP-4 Token',
    enterScripthash: 'Please enter the OEP-4 token script hash',
    invalidScriptHash: 'The script hash is invalid',
    addOep4Success: 'Add OEP-44 token succeed!',
    noOep4Contract: 'The OEP-44 contract is not found',
    networkError: 'Network error! Please try later.',
    oep4Exists: 'You have already added this OEP-4 token.',
    go: 'Go'
  },

  transfer: {
    inputValidAmount: 'Please input valid transfer amount.',
    inputValidAddress: 'Please input valid receiver address.',
    exceedBalance: 'Amount of transfer can not exceed your balance.',
    ongBalanceNotEnough: 'Your ONG balance is not enough for transfer and fee.',
    warningTransferAllONG: 'Transferring this amount of ONG means you will not have enough ONG to pay\r\nfor further transaction fees (including claiming unbound ONG). \r\n\r\nContinue?'
  },

  setting: {
    name: 'Setting',
    net: 'Network',
    lang: 'Language',
    testNet: 'TestNet',
    mainNet: 'MainNet',
    en: 'English',
    zh: '中文',
    pathTit: 'Path: ',
    path: 'Save keystore file path（Please do not set to the installation location of OWallet!）',
    change: 'Change',
    setNetworkSuccess: 'The network has been set to: ',
    wallets: 'Wallets',
    ontid: 'ONT ID',
    nodeStake: 'Node Stake',
    help: 'Help',
    settings: 'Settings',
    nodeAddress: 'Node address',
    setNodeSuccess: 'The node address has been set t: ',
    notInstallationPath: 'Please do not set to the installation location of OWallet.',
    notSetPath: 'You did not set the keystore path.'
  },

  ledgerWallet: {
    nameOfLedgerWallet: 'Name of your ledger wallet',
    info: 'Ledger Info',
    connectApp: 'Please connect to your ledger device and open the ONT app on it.',
    status: 'Device Status',
    labelEmpty: 'Label can not be empty.',
    deviceError: 'Can not connect to device.Please try again.',
    signFailed: 'Sign with ledger failed.'
  },

  ledgerStatus: {
    NOT_FOUND: 'Ledger not open',
    NOT_SUPPORT: 'Ledger not supported',
    NO_DEVICE: 'Please plugin the device and login.',
    READY: 'Ledger is Ready',
    NOT_OPEN: 'The ONT app on ledger is not open.'
  },
  nodeStake: {
    iHaveKnown: 'I Have Known',
    ontid: 'ONT ID',
    nodeStake: 'Node Stake',
    stakeWalletAddress: 'Stake Wallet Address',
    nodePk: 'Node Public Key',
    contract: 'Contract',
    commitmentQuantity: 'Commitment Quantity',
    stakeQuantity: 'Stake Quantity',
    stake: 'Stake',
    feeTip: 'Stake needs 500 ONG for service fee',
    selectOntid: 'Select ONT ID',
    selectStakeWallet: 'Select stake wallet',
    next: 'Next',
    selectIdentity: 'Please select your ONT ID',
    selectIndividualWallet: 'Please select your individual wallet',
    selectLedgerWallet: 'Please connect your ledger and open ONT app on it.',
    invalidOntid: 'Invalid ONT ID ',
    invalidAddress: 'Invalid stake wallet address',
    stakeQuantityEmpty: 'Please enter valid stake quantity',
    password: 'Enter Password',
    signWithOntid: 'Sign with ONT ID',
    signWithWallet: 'Sign with stake wallet',
    enterOntidPass: 'Please enter the password of your ONT ID',
    enterWalletPass: 'Please enter the password of your stake wallet',
    back: 'Back',
    recall: 'Recall',
    refund: 'Refund',
    quitNode: 'Quit Node',
    newStake: 'New Stake',
    passwordEmpty: 'Password can not be empty',
    search: 'Search'
  },
  nodeStakeStatus: {
    transfering: 'Transferring',
    transfered: 'Transferred',
    transferFailed: 'Transfer Failed',
    audit: 'Audit',
    auditing: 'Auditing',
    audited: 'Audited',
    auditFailed: 'Audit Failed',
    stake: 'Stake',
    staked: 'Staked',
    nodeExited: 'Node Exited',
    refund: 'Refund',
    refunding: 'Refunding',
    refunded: 'Refunded',
    refundFailed: 'Refund Failed',
    stakeExited: 'Stake Exited',
    quitStake: 'Quit Stake',
    nodeExited: 'Node Exited',
    unfrozenToRefund: 'Unfreeze successfully, you can refund now',
    transferNeedTime: 'Transfer needs a period of time',
    serviceFee: 'Stake needs 500 ONG for service fee',
    auditNeedTime: 'Audit needs a period of time',
    refundNeedTime: 'Refund needs a period of time',
    txFailed: 'Transaction failed.'
  },
  redeemInfo: {
    info: 'Redeem Info',
    claimableOng: `Claimable ONG is the amount of ONG you can claim for a 0.01 ONG fee. This balance will update each time a transaction is made in your wallet address.`,
    unboundOng: `Unbound ONG is an amount of ONG which has not been added to your claimable ONG balance yet (since it only updates each you make a transaction in your wallet address). When a transaction is made in your address, the claimable ONG balance will update (adding your unbound ONG amount to your claimable ONG amount).`,
    claimableOngName: 'Claimable ONG: ',
    unboundOngName: 'Unbound ONG: ',
    noClaimableOng: 'Your claimable ONG is 0. When a transaction of ONT is made in your address, the claimable ONG balance will update'
  },

  nodeMgmt: {
    nodeUser: 'If you are a candidate node, you can stake and manage your stake here.',
    nodeStakeMgmt: 'Node Stake Management',
    normalUser: 'If you are a normal user, you can participate in stake authorization here.',
    stakeAuthorizaton: 'Stake Authorization',
    nodeStake: 'Node Stake',
    userStakeAuthorization: 'User Stake Authorization',
    newStake: 'Submit A New Stake',
    allowStakes: 'Allow stakes from other users',
    deny: 'Deny',
    permit: 'Permit',
    yourStakeAmount: 'Your node stake amount',
    stakeLimit: 'Total max stake limit',
    userNumber: 'Current number of users staking',
    userStake: 'Current total stake of users',
    rewardsPerMonth: 'Estimate total rewards per month',
    rewardsTip: 'Estimate total rewards per month includes your rewards and the rewards of other uesrs staking.',
    rewardProportion: 'Reward proportion for yourself: ',
    current: 'current',
    rewardsProportionTip: '0% indicates the node will share all transaction fees rewards to stake authorized users.',
    confirm: 'Confirm',
    changesTakeEffect: ' Changes will take effect in two consensus rounds (each round is approximately every 30 days). ',
    stakeAuthorization: 'Stake Authorization',
    toNextRound: 'Next round in',
    rank: 'Rank',
    name: 'Name',
    currentStake: 'Current total stake',
    process: 'Stake progress',
    changes: 'Changes',
    userParticipate: 'Only proceed if you want to participate in stake authorization!',
    nodeName: 'Node name',
    walletAddress: 'Your wallet address',
    inAuthorization: 'Total authorized stake',
    cancelStakeAuthorization: 'Cancel stake authorization',
    locked: 'Canceled(locked)',
    claimable: 'Redeemable',
    redeem: 'Redeem',
    profit: 'Profit',
    rewards: 'Rewards',
    newStakeAuthorization: 'Submit new stake authorization',
    cancelAuthorization: 'Cancel stake authorization',
    units: 'Units of stake authorization',
    stakeAmountTip: 'Stake amount = input number * 500 ONT/unit.',
    stakeAmount: 'Stake amount',
    submit: 'Submit',
    allowedStakeUnits: 'Allowed stake unit',
    allowedStakeAmount: 'Allowed stake amount',
    noChange: 'You did not make a change.',
    noRewards: 'No rewards to redeem.',
    switchWallet: 'Switch wallet',
    noClaimableOnt: 'No redeemable ONT',
    amountToCancel: 'Amount to cancel',
    unitToCancel: 'Units to cancel',
    invalidInput: 'Please enter valid value.',
    peerNotAllowAuthorize: 'This peer does not allow authorization now.',
    addInitPos: 'Add to stake',
    reduceInitPos: 'Reduce stake',
    amountToAdd: 'Amount To Add',
    amountToReduce: 'Amount To Reduce',
    notThanCommitment: 'Stake quantity can not be less than the commitment stake quantity.',
    notLessTotalPos: 'The initial stake amount is too small.',
    notThanMax: 'Allowed stake can not be more than the max stake limit.',
    refresh: 'Refresh',
    totalStakeAmount: 'Total Authorization Amount',
    blocks: 'Blocks',
    proportionNextRound: "Reward proportion for others",
    proportionNextRoundTip: 'This is the portion of transaction fees received the node has chosen to share with users who have authorized stakes with them in the next consensus round. Note not all nodes share the Ontology Foundation bonus with users who have authorized stakes with them. Please check the link below for more.',
    authorizationFAQ: 'OWallet Stake Authorization FAQ',
    nodeAndUser: 'Node / User',
    authorizeTip: `If new stake is cancelled it will be cancelled immediately and be shown as redeemable ONT. If authorized ONT from previous consensus rounds is cancelled it will be redeemable only at the beginning of the next consensus round for candidate nodes (or one round later for consensus nodes). If a user has both authorized ONT from this consensus round and a previous consensus round and cancels an ONT amount exceeding the amount from this consensus round, they will receive authorized ONT from this consensus round first and the remaining authorized ONT in the next consensus round.`,
    rewardTip: `All transactions fees received by Ontology are distributed to all candidate nodes and consensus nodes - 50% to each group.
Within their 50% share each candidate node will receive their share linearly according to their stake amount.
Within their 50% share each consensus node will receive their share according to their stake amount, which is subject to the incentive curve that discourages too high stakes.
`,
    unboundOng: 'Unbound ONG',
    activeT: 'Active in current round',
    activeT1: 'Active in next round',
    activeT2: 'Active in next 2 round',
    changeRewardProportion: 'Change Reward Proportion',
    edit: 'Edit',
    stakeHistory: 'My Stake',
    cancelUnits: 'units',
    stakeWalletAddress: 'Stake wallet address',
    lastUpdate: 'Last update time',
    walletRewardTip: 'This is all the reward of your wallet in current round.',
    switchMainnet: 'Please switch to MainNet.',
    consensusNode: 'Consensus node',
    candidateNode: 'Candidate consensus node',
    lockedONT: 'This is your canceled authorized stake amount currently held in a smart contract. Once it is available to be withdrawn, it will appear as redeemable ONT.',
    unboundONG: 'This is the unbound ONG amount of your authorized ONT stake.',
    profitONG: 'This is the transaction fee profit you have made. This will update at the beginning of each new consensus round.',
    getProfitPart: 'Already receiving profit portion',
    newStakePart: 'New stake portion',
    claimableONT: 'Claimable ONT',
    redeemInitPos: 'Redeem Init Pos',
    initPosInLock: "Locked",
    initPosRedeemable: 'Claimable',
    noClaimbleInitPos: 'No claimable ONT.',
    redeemInitPosOk: 'Redeem',
    hasClaimableInitPos: 'You have redeemable init pos. Please redeem this part first.',
    noClaimbleToRefund: 'No redeemable ONT to refund.'
    },
    vote: {
        node: 'Node',
        vote: 'Vote',
        voteTip: "For authorized users, vote here",
        login: 'Sign in',
        notSeeWallet: "Didn't see your wallet? Import one ",
        importHere: 'here',
        notStart: 'Not started',
        inProgress: 'In Progress',
        finished: 'Finished',
        canceled: 'Canceled',
        nodeCanVoteOnly: '*Only users from consensus nodes are allowed to vote.',
        title: 'Title',
        detail: 'Detail',
        votingStarts: 'Vote start time',
        votingEnds: 'Vote end time',
        back: 'Back',
        submit: 'Submit',
        submitVoteSuccess: 'Vote succeeded',
        submitVoteFail: 'Vote failed',
        stopVoteSuccess: 'Vote cancelled',
        stopVoteFail: 'Vote cancellation failed',
        createVoteSuccess: 'Vote created',
        createVoteFail: 'Vote creation failed',
        onlySupportEnglish: 'Only English is allowed',
        fillBlanks: 'Please fill in the blanks.',
        endTimeError: "The vote must end in a future time.",
        votingTopics: 'Voting Topics',
        votingDetail: 'Voting Detail',
        stopVote: 'Cancel Voting',
        info: 'Info',
        startTime: 'Starting time',
        endTime: 'Ending time',
        hash: 'Hash',
        creatorAddress: 'Creator address',
        votingStatus: 'Vote status',
        myVotes: 'My vote(s)',
        approval: 'Approved',
        opposition: 'Denied',
        allVotes: 'All votes',
        created: 'Created by me',
        duration: 'Duration',
        notAllowVote: 'You cannot vote now, the vote is: ',
        notAllowStop: 'You cannot stop the vote now, the vote is : ',
        name: 'Name',
        address: 'Address',
        votes: 'Number of votes',
        selectWallet: 'Select wallet',
        startTimeError: 'Start time cannot be later than end time.',
        new: 'New'
    },
  exchange: {
    exchange: 'Exchange',
    changelly: 'Changelly',
    cryptonex: 'Cryptonex',
    loading: 'Loading latest pricing information, please wait..'
  },
  dapps: {
    dapps: 'DApps',
    sesameSeed: 'Sesameseed',
    sesameseedDesc: 'Sesameseed voting management',
    notification: 'Notification',
    userPolicy: 'You will be redirected to the third party dApp. Use of the third party dApp will be subject to their User Agreement and Privacy Policy. You will be liable to the third party dApp only.',
    ontidMgmt: 'ONT ID management. This feature will be removed in the future. Please backup ONT ID related data'
  },
  sesameseed: {
    stakeAmountTip: 'Stake amount for Sesameseed is 1 unit equals 1 ONT',
    authorizeTip: 'If a new stake is canceled, it will add to the “canceled” ONT and be directly deposited in the users account within 24 hours. If authorized ONT from a previous consensus round is canceled it will be added to the “canceled” ONT and be directly deposited in the originating users account within 24 hours of the beginning of the next consensus round if Sesameseed is a candidate node (or one round later if Sesameseed is a consensus node). If a user has both authorized ONT from this consensus round and a previous round and cancels an ONT amount exceeding the amount from this round, they will receive authorized ONT from this consensus round first and the remaining authorized ONT in the next round.',
    rewardTip: 'Sesameseed rewards Ontology Stake Authorizations in SEED for both foundation rewards created as a candidate or consensus node as an OEP-4 token “SEED”. This token is rewarded directly to Staking participants. In addition to node rewards, 100% of ONG unbound while staking is pooled by all stake authorizations and added to the total “Node Reward”, as a result this node reward is also provided in the form of “SEED” Token. Rewards are distributed daily without the need to redeem. Find out more at https://sesameseed.org.',
    pendingWithdrawals: 'Pending canceled stake authorization'
  }
}
