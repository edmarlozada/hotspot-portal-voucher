/* jsConfig.js */

// true  = the voucher name will be the MAC address of the device
// false = the voucher name will be given by the vendo machine
cfg_MacAsVoucher = false; //( NOT-IMPLEMENTED )

// true  = multivendo
// false = singlevendo
cfg_MultiVendo = false;

// 0 = manual vendo   ( user selects vendo manually ) ( NOT-IMPLEMENTED )
// 1 = auto select vendo ( by hotspot address ) ( NOT-IMPLEMENTED )
// 2 = auto select vendo ( by Interface Name  )
cfg_MultiVendoBy = 2;

// true  = login requires voucher only ( no password )
// false = login requires voucher & password ( password = voucher )
cfg_NameOnly = true; // will be overruled if multivendo

// default single vendo display name ( displayed in portal )
cfg_VendoName = "VendoName"; // will be overruled if multivendo

// default single vendo ip address for coin acceptor
cfg_VendoIP = "10.0.0.2"; // will be overruled if multivendo

// auto pick vendo list config ( by: Interface )
// VendoIP   per vendo will overrule cfg_VendoIP
// NameOnly  per vendo will overrule cfg_NameOnly
// VendoName per vendo will overrule cfg_VendoName
cfg_VendoList = [
  {
    VendoIP   : "10.10.10.2", // vendo ip address for coin acceptor
    NameOnly  : false,        // login name only or password = voucher
    Interface : "vlan-XX",    // auto pick vendo list config ( by: Interface )
    VendoName : "SAMPLE CFG"  // vendo display name ( displayed in portal )
  },
  {
    VendoIP   : "10.30.10.2",
    NameOnly  : false,
    Interface : "vlan-10",
    VendoName : "Vendo v10"
  },
  {
    VendoIP   : "10.30.11.2",
    Interface : "vlan-11",
    VendoName : "Vendo v11"
  },
  {
    Interface : "vlan-12",
    VendoIP   : "10.30.12.2",
    VendoName : "Vendo v12"
  },
  {
    Interface : "vlan-99",
    VendoIP   : "10.30.99.2",
    VendoName : "Vendo v99"
  }
];

/* ============================== */
/* change and translate messages  */
/* below to your native language  */
/* ============================== */

cfg_MsgMap = {

/* Portal Messages */
  "v.login"          : "Please fill out Voucher Code\nthen click [ LOGIN ]",
  "m.login"          : "Please fill out Member Name & Password\nthen click [ LOGIN ]",
  "user.expire"      : "User has expired\nThank you for using our hotspot service",
  "user.connect"     : "Connecting to Server.\nPlease wait...",
  "user.active"      : "You could be an Active User\nPlease click [ RESUME ]",

/* Mikrotik Messages */
  "session.limit"    : "Already Logged-in with another device\nMaximum connections reached",
  "invalid.mac.user" : "Unauthorized device's MAC address\nDevice MAC may be randomized",
  "invalid.user"     : "User and/or Password is invalid\nEnter a different User/Password",
  "invalid.mac"      : "Unauthorized to log in\nDevice MAC may be randomized",
  "uptime.limit"     : "User has expired\nThank you for using our hotspot service",
  "traffic.limit"    : "User has expired\nThank you for using our hotspot service",
  "internal.error"   : "Internal error",
  "config.error"     : "Configuration error",
  "not.logged.in"    : "You are not logged-in",
  "ippool.empty"     : "Cannot assign ip address.\nNo more free addresses from pool",
  "shutting.down"    : "Hotspot service is shutting down",
  "license.limit"    : "License session limit reached",
  "chap.missing"     : "Web browser did not get challenge response",
  "radius.timeout"   : "RADIUS server is not responding",
  "auth.in.progress" : "Already authorizing.\nRetry later",
  "radius.reply"     : "RADIUS error",

/* JuanFi Messages */
  "vendo.buy"              : "Click [ INSERT COIN ] to buy voucher\nEnsure the vendo is available",
  "vendo.extend"           : "Click [ INSERT COIN ] to extend time\nEnsure the vendo is available",

  "vendo.connect"          : "Connecting to Vendo Device.\nPlease wait...",
  "vendo.connect.error"    : "Unable to connect to Vendo Device\nVendo Device is OFFLINE!",
  "coinslot.busy"          : "DON'T INSERT COIN!!! Try again later\nVendo Device Busy at the moment",
  "coin.slot.banned"       : "You are BANNED for not inserting coin!!!\nPlease click [ INSERT COIN ] again later",
  "coin.slot.notavailable" : "Vendo Device not available.\nPlease click [ INSERT COIN ] again later",
  "vendo.insert.coin"      : "Please Insert Coin Now!\nVendo is ready to accept coin(s)",
  "no.internet.detected"   : "No Internet Connection\nPlease click [ INSERT COIN ] again later",
  "invalid.username"       : "There has been an Invalid Voucher!\nPlease contact the owner",
  "undefined"              : "There has been an Undefined Error!\nPlease contact the owner",

  "coinslot.cancelled0"    : "Insert coin has ended, no coin inserted\nClick [ INSERT COIN ] to buy voucher",
  "coinslot.cancelled1"    : "Insert coin has ended, no coin inserted\nClick [ INSERT COIN ] to extend voucher",
  "coinslot.cancelled2"    : "NOTE:\nTo keep using the service, please insert a coin when requested. "+
                             "Multiple attempts without inserting a coin may temporarily or pemanently suspend you.",

  "coin.not.inserted"      : "Coin not inserted",
  "coins.wait.expired"     : "Coin slot expired",

  "vendo.modal.shown"      : "Click [ INSERT COIN ] to begin.\nPlease insert coin(s) or get BANNED.",
  "vendo.offline"          : "Vendo Device offline.\nPower on the Vendo Device\nand click [ INSERT COIN ] again.",
  "vendo.buy.done"         : "Insert Coin Successful.\nExecuting Autologin.\nPlease wait...",
  "vendo.timeout"          : "Insert Coin Time-out.\nyou will be BANNED\nif you don\'t insert coin next time.",
  "vendo.timeout.active"   : "Insert Coin Time-out.\nActive Code Saved.\nPlease click \"LOGIN\".",
  "vendo.timeout.login"    : "Insert Coin Time-out.\nExecuting Autologin.\nPlease wait...",
  "vendo.undefined"        : "Vendo Device Undefined Error.\nPlease contact the owner!\nclick [ INSERT COIN ] again.",

  "vendo.error"            : "Internal Error!\nPlease contact the owner.\n",
  "vendo.error.undefined"  : "Internal [undefined] Error.\nPlease contact the owner!\nclick [ INSERT COIN ] again.",

  "vendo.auto.login"       : "Thank you for the purchase!\nwill do auto login shortly",

  "undefined.error"  : "There has been an undefined error!\nPlease contact the owner",
  "copyright"              : "Edmar Lozada"
};
