/** @format */
const sandbox = true
const configOriginal = {
  client_id: "Af4wFhhRkGZE1WZ4F_g49Bw6A1r94Y_o4xlCszm7e6KXMxX_sFefUp1lVS4hdUhelCh-cCvj_VSTwBI4",
  BasicPayPalUrl: "https://api-m.paypal.com"
}
const configTest = {
  client_id: "AejlTNKKUJdFZoCyqyMzjjX607bK1YbsSFGSAzNcF97C8nFTNSDWTT1H54hjCXEYn5olgb8QtL90x8Bs",
  BasicPayPalUrl: "https://www.sandbox.paypal.com"
}

const config = sandbox ? configTest : configOriginal
module.exports = {
  ...config
}
