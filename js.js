var web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org'));
var abi = [{"inputs":[{"internalType":"address","name":"_swapRouter","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountBNB","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountBOG","type":"uint256"}],"name":"AutoLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"}],"name":"BuybackMultiplierActive","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"BUSD","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MASK","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"approveMax","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"admin","type":"address"}],"name":"authorize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"autoBuybackEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"clearBuybackMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"distributorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCirculatingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"accuracy","type":"uint256"}],"name":"getLiquidityBacking","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMultipliedFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"selling","type":"bool"}],"name":"getTotalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"admin","type":"address"}],"name":"isAuthorized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"target","type":"uint256"},{"internalType":"uint256","name":"accuracy","type":"uint256"}],"name":"isOverLiquified","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"launch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"launchedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"launchedAtTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingFeeReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract ISwapRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"},{"internalType":"uint256","name":"_cap","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_period","type":"uint256"}],"name":"setAutoBuybackSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"numerator","type":"uint256"},{"internalType":"uint256","name":"denominator","type":"uint256"},{"internalType":"uint256","name":"length","type":"uint256"}],"name":"setBuybackMultiplierSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minPeriod","type":"uint256"},{"internalType":"uint256","name":"_minDistribution","type":"uint256"}],"name":"setDistributionCriteria","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"setDistributorSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_liquidityReceiver","type":"address"},{"internalType":"address","name":"_marketingFeeReceiver","type":"address"}],"name":"setFeeReceivers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_liquidityFee","type":"uint256"},{"internalType":"uint256","name":"_buybackFee","type":"uint256"},{"internalType":"uint256","name":"_reflectionFee","type":"uint256"},{"internalType":"uint256","name":"_marketingFee","type":"uint256"},{"internalType":"uint256","name":"_feeDenominator","type":"uint256"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exclude","type":"bool"}],"name":"setIsExcludedFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exclude","type":"bool"}],"name":"setIsExcludedStock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exclude","type":"bool"}],"name":"setIsExcludedTxLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_reserved","type":"bool"}],"name":"setReserved","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setSwapBackSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_target","type":"uint256"},{"internalType":"uint256","name":"_denominator","type":"uint256"}],"name":"setTargetLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setTxLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"triggerBuybackMultiplier","type":"bool"}],"name":"triggerZeusBuyback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"admin","type":"address"}],"name":"unauthorize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
var token = "0x4ce2db133035519f538b7849201d6d541972164c";
let contract_addr = '0x29D56E3889935490CB7F1AAc75063b4B6Ad7Ee5B';
let contract_abi = [{"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"getUnpaidEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stocks","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"totalExcluded","type":"uint256"},{"internalType":"uint256","name":"totalRealised","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"claimReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
let mbt_bnb_lp_addr = "0x2a51835678B2732EA7f4dF601beD7fB3993D85b5";
let bnb_usdt_lp_addr= "0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE";
let pair_abi = [{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}];
let usdt_address = "0x55d398326f99059ff775485246999027b3197955";



window.onload = function(){
   init();
}

async function init(){
   let contract = new web3.eth.Contract(abi, token);
   let burn = await contract.methods.balanceOf("0x000000000000000000000000000000000000dead").call();
   burn = BigNumber(burn).dividedBy(1000000000).dividedBy(1000000000);
   document.getElementById("total_burn").innerText=burn.toFixed(0)+"";

   let bcontract = new web3.eth.Contract(contract_abi,contract_addr);
   let busd = await bcontract.methods.totalRewards().call();
   busd = BigNumber(busd).dividedBy(1000000000000000000);
   document.getElementById("total_busd").innerText=busd.toFixed(0)+"";

   mbtPrice();
}

async function mbtPrice() {
   let mbt_usd_price = new BigNumber(0);
   let mbt_bnb_price = new BigNumber(0);
   let pow18 = new BigNumber(10).exponentiatedBy(new BigNumber(18));
   let pow9 = new BigNumber(10).exponentiatedBy(new BigNumber(9));
   const lpContract = new web3.eth.Contract(pair_abi, mbt_bnb_lp_addr);
   let reserves = await lpContract.methods.getReserves().call();
   let mbt_value = new BigNumber(0);
   if(reserves) {
      let reserve0 = new BigNumber(reserves[0]);
      let reserve1 = new BigNumber(reserves[1]);
      let bnb_value = new BigNumber(0);
     
      if(reserve0.isGreaterThan(0) && reserve1.isGreaterThan(0)){
         let token0 = await lpContract.methods.token0().call();
         let token1 = await lpContract.methods.token1().call();
         if(token0 && String(token0).toLowerCase() == token.toLowerCase()) {
            bnb_value = reserve1.dividedBy(pow18);
            mbt_value = reserve0.dividedBy(pow9);
         }
         if(token1 && String(token1).toLowerCase() == token.toLowerCase()) {
            bnb_value = reserve0.dividedBy(pow18);
            mbt_value = reserve1.dividedBy(pow9);
         }
      }
      if(bnb_value.isGreaterThan(0)){
         if(mbt_value.isGreaterThan(0)){
            mbt_bnb_price = (bnb_value).dividedBy(mbt_value);
         }
      }
   }
   let bnb_price = new BigNumber(0);
   if(mbt_bnb_price.isGreaterThan(0)){
      const bnbLpContract = new web3.eth.Contract(pair_abi, bnb_usdt_lp_addr);
      let bnbReserves = await bnbLpContract.methods.getReserves().call();
      let reserve0 = new BigNumber(bnbReserves[0]);
      let reserve1 = new BigNumber(bnbReserves[1]);
      let token0 = await bnbLpContract.methods.token0().call();
      let token1 = await bnbLpContract.methods.token1().call();
      let bnb_value = new BigNumber(0);
      let usdt_value = new BigNumber(0);
      if(token0 && String(token0).toLowerCase() == usdt_address.toLowerCase()) {
         bnb_value = reserve1.dividedBy(pow18);
         usdt_value = reserve0.dividedBy(pow18);
      }
      if(token1 && String(token1).toLowerCase() == usdt_address.toLowerCase()) {
         bnb_value = reserve0.dividedBy(pow18);
         usdt_value = reserve1.dividedBy(pow18);
      }
      bnb_price = (usdt_value).dividedBy(bnb_value);
   }
   mbt_usd_price = mbt_bnb_price.multipliedBy(bnb_price);
   mbt_bnb_price = mbt_usd_price.dividedBy(2);
   document.getElementById("total_cap").innerText=mbt_bnb_price.multipliedBy(1000000000000000).toFixed(0)+"";
   let lqt = mbt_value.multipliedBy(mbt_bnb_price).multipliedBy(2);
   document.getElementById("total_lqt").innerText=lqt.toFixed(0)+"";
}