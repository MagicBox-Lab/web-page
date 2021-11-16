let web = '';
let webWiter='';
let wallet_address = '';
let show_addr;
let token_address = "0x4ce2DB133035519F538b7849201D6D541972164c";
let usdt_address = "0x55d398326f99059ff775485246999027b3197955";
let busd_address = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
let mbt_bnb_lp_addr = "0x2a51835678B2732EA7f4dF601beD7fB3993D85b5";
let bnb_usdt_lp_addr= "0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE";
let contract_addr = '0x29D56E3889935490CB7F1AAc75063b4B6Ad7Ee5B';
let contract_abi = [{"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"getUnpaidEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stocks","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"totalExcluded","type":"uint256"},{"internalType":"uint256","name":"totalRealised","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"claimReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
let balance_abi = [{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
let pair_abi = [{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}];
let airdrop_addr="0x442CF9Ae348686D4E773815c9163652739978D01";
let airdrop_abi=[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Claim",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "claim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "mbt",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "_mbt",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "received",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
async function onConnect() {
   web = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org'));
   document.getElementById("claimbtn").style.display="none";
   try{
      if (window.ethereum) {
         window.ethereum.on('accountsChanged', function (accounts) {
            if(wallet_address!=accounts){
               location.reload();
            }
         });
         window.ethereum.on('networkChanged', async function (chainId) {
            if(chainId!="56"){
               await ethereum.request({
                  method: 'wallet_switchEthereumChain',
                  params: [{ chainId: '0x38' }],
               });
            }else{
               location.reload();
            }
         });
         let cid = await new Web3(window.ethereum).eth.net.getId()+"";
        
         if(cid!="56"){
            await ethereum.request({
               method: 'wallet_switchEthereumChain',
               params: [{ chainId: '0x38' }],
            });
            return;
         }
         let accounts = await window.ethereum.request({method:'eth_requestAccounts'});
         webWiter = new Web3(window.ethereum);
         wallet_address = accounts[0]; 
         show_addr = wallet_address;
         setTimeout(() => {
            document.getElementById("address").value = show_addr;
            document.getElementById("claim_btn").style="inline";
            changeAddr();
         }, 1000);
         
      }
   }catch(e){

   }
}

function changeAddr(){
   show_addr = document.getElementById("address").value;
   getBalance();
   getBusdBalance();
   getStocks();
   getUnpaidEarnings();
   getTotalRewards();
}

async function getBalance() {
   let contract = new web.eth.Contract(balance_abi, token_address);
   let res = await contract.methods.balanceOf(show_addr).call();
   let balanceMbt = mathDiv(res, mathPow(10, 9));
   document.getElementById("balanceMbtA").innerHTML = mathFixed(balanceMbt, 3);
   mbtPrice(balanceMbt);
   //if(balanceMbt.isLessThanOrEqualTo(0)){
   //   document.getElementById("claimbtn").style.display="inline";
   //}else{
     document.getElementById("claimbtn").style.display="none";
   //}
}

async function getBusdBalance() {
   let contract = new web.eth.Contract(balance_abi, busd_address);
   let res = await contract.methods.balanceOf(show_addr).call();
   document.getElementById("balanceBusdA").innerHTML = mathFixed(mathDiv(res, mathPow(10, 18)), 3);
   document.getElementById("balanceBusdB").innerHTML = mathFixed(mathDiv(res, mathPow(10, 18)), 3);
}

async function mbtPrice(balanceMbt) {
   let mbt_usd_price = new BigNumber(0);
   let mbt_bnb_price = new BigNumber(0);
   let pow18 = new BigNumber(10).exponentiatedBy(new BigNumber(18));
   let pow9 = new BigNumber(10).exponentiatedBy(new BigNumber(9));
   const lpContract = new web.eth.Contract(pair_abi, mbt_bnb_lp_addr);
   let reserves = await lpContract.methods.getReserves().call();
   if(reserves) {
      let reserve0 = new BigNumber(reserves[0]);
      let reserve1 = new BigNumber(reserves[1]);
      let bnb_value = new BigNumber(0);
      let mbt_value = new BigNumber(0);
      if(reserve0.isGreaterThan(0) && reserve1.isGreaterThan(0)){
         let token0 = await lpContract.methods.token0().call();
         let token1 = await lpContract.methods.token1().call();
         if(token0 && String(token0).toLowerCase() == token_address.toLowerCase()) {
            bnb_value = reserve1.dividedBy(pow18);
            mbt_value = reserve0.dividedBy(pow9);
         }
         if(token1 && String(token1).toLowerCase() == token_address.toLowerCase()) {
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
      const bnbLpContract = new web.eth.Contract(pair_abi, bnb_usdt_lp_addr);
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
   document.getElementById("balanceMbtB").innerHTML = '$' + mathFixed(balanceMbt.multipliedBy(mbt_usd_price),10);
}


async function getStocks() {
   let contract = new web.eth.Contract(contract_abi,contract_addr);
   let res = await contract.methods.stocks(show_addr).call();
   document.getElementById("totalEarnedA").innerHTML = mathFixed(mathDiv(res[2], this.mathPow(10, 18)),3);
   document.getElementById("totalEarnedB").innerHTML = '$' + mathFixed(mathDiv(res[2], this.mathPow(10, 18)),3);
}

async function getUnpaidEarnings() {
   let contract = new web.eth.Contract(contract_abi,contract_addr);
   let res = await contract.methods.getUnpaidEarnings(show_addr).call();
   document.getElementById("unpaidEarningsA").innerHTML = mathFixed(mathDiv(res, this.mathPow(10, 18)),3);
   document.getElementById("unpaidEarningsB").innerHTML = '$' + mathFixed(mathDiv(res, this.mathPow(10, 18)),3);
}
async function getTotalRewards() {
   let contract = new web.eth.Contract(contract_abi,contract_addr);
   let res = await contract.methods.totalRewards().call();
   document.getElementById("totalRewardsA").innerHTML = mathFixed(mathDiv(res, this.mathPow(10, 18)),3);
   document.getElementById("totalRewardsB").innerHTML = '$' + mathFixed(mathDiv(res, this.mathPow(10, 18)),3);
}

async function claimReward() {
   let unpaidEarnings = document.getElementById("unpaidEarningsA").innerHTML;
   if(!wallet_address) alert('Please, Connect your wallet!');
   let contract = new webWiter.eth.Contract(contract_abi,contract_addr);
   contract.methods.claimReward().send({from: wallet_address});
}

async function claimAirdop(){
   if(!wallet_address) alert('Please, Connect your wallet!');
   let contract = new webWiter.eth.Contract(airdrop_abi,airdrop_addr);
   contract.methods.claim().send({from: wallet_address});
}

function copyText(str_file) {
   var copy_val = document.getElementById(str_file).innerHTML;
   const input = document.createElement('input');
   document.body.appendChild(input);
   input.setAttribute('value', copy_val);
   input.select();
   if (document.execCommand('copy')) {
      document.execCommand('copy');
   }
   document.body.removeChild(input);
}

function mathDiv(a,b){
   let x = new BigNumber(a);
   let y = new BigNumber(b);
   if(y==0 || x==NaN || y==NaN)return 0;
   return x.dividedBy(y);
}

function mathMul(a,b){
   let x = new BigNumber(a);
   let y = new BigNumber(b);
   if(x==NaN || y==NaN)return 0;
   return x.multipliedBy(y);
}

function mathPow(a,b){
   let x = new BigNumber(a);
   let y = new BigNumber(b);
   if(x==NaN || y==NaN)return 0;
   return x.exponentiatedBy(y);
}

function mathFixed(val,decimals) {
   let x = new BigNumber(val);
   if(x==NaN)return 0;
   return x.toFixed(decimals,1);
}

window.onload = function(){
   onConnect();
}