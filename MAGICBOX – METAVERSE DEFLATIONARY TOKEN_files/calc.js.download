var CRYPTOCODES={"US Dollar $ (USD)":"USD","Satoshi (SAT)":"SAT","Bitcoin (BTC)":"BTC","Ethereum (ETH)":"ETH","Litecoin (LTC)":"LTC","Great British Pound £ (GBP)":"GBP","Euro € (EUR)":"EUR","Japanese Yen ¥ (JPY)":"JPY","Monero (XMR)":"XMR","South Korean Won (KRW)":"KRW","Indian Rupee (INR)":"INR",}
var BTCPRICES={"SAT":100000000,"BTC":1}
var CRYPTOCODESTRIED=[];var TSYMMAXLENGTH=500;var CRYPTONAMES=[]
var TOPCOINS=["ETH","BCH","XRP","ICX","LSK","XLM","LTC","EOS","NEO","TRX","ELF","ETC","VEN","ADA","DASH","XMR","ZEC","IOST","HSR","QTUM","WAVES","OMG","XVG","NBT","BNB","SC","CND","IOT","BTG","GAS","PPT","STEEM","XEM","KNC","STRAT","WTC","DGD","ADX","ZCL","XDN","ZRX","DGB","BTS","SWFTC","REQ","SNT","DOGE","BRD","SUB","POE","ARDR","BAT","XRB"]
function getInitialPrices(){jQuery.getJSON("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR,GBP,JPY,KRW,INR,ETH,LTC",function(data){Object.assign(BTCPRICES,data);updateAutocomplete();calculateConversion("right");updateSummary();updateTime();getCoins();});}
function getMorePrices(){var tsymbString=""
for(var key in CRYPTOCODES){if((!BTCPRICES[CRYPTOCODES[key]])&&(tsymbString.length<(TSYMMAXLENGTH-10))&&(jQuery.inArray(CRYPTOCODES[key],CRYPTOCODESTRIED)==-1)){tsymbString+=(CRYPTOCODES[key]+",");CRYPTOCODESTRIED.push(CRYPTOCODES[key])}}
if(tsymbString.length>0){apiRequestUrl="https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms="+tsymbString
jQuery.getJSON(apiRequestUrl,function(data){Object.assign(BTCPRICES,data);updateAutocomplete();getMorePrices();});}}
function getCoins(){jQuery.getJSON("https://min-api.cryptocompare.com/data/all/coinlist",function(data){for(var key in data["Data"]){if(jQuery.inArray(data["Data"][key]["Symbol"],TOPCOINS)!=-1){CRYPTOCODES[data["Data"][key]["FullName"]]=data["Data"][key]["Symbol"];}}
updateDropdowns();updateDropdowns2();getMorePrices();});}
function updateDropdowns(){var currency1Symbol=jQuery("#currency1-name option:selected").val();var currency2Symbol=jQuery("#currency2-name option:selected").val();jQuery("#currency1-name").html("");jQuery("#currency2-name").html("");optionsHtml=""
var sortedKeys=Object.keys(CRYPTOCODES).sort();for(var i=0;i<sortedKeys.length;i++){optionsHtml+='<option value="'+CRYPTOCODES[sortedKeys[i]]+'">'+sortedKeys[i]+'</option>';}
jQuery("#currency1-name").html(optionsHtml);jQuery("#currency2-name").html(optionsHtml);jQuery("#currency1-name option[value="+currency1Symbol).attr("selected",true);jQuery("#currency2-name option[value="+currency2Symbol).attr("selected",true);}
function updateDropdowns2(){var currency1Symbol=jQuery(".nice-select .list li:selected").val();var currency2Symbol=jQuery(".nice-select .list li:selected").val();jQuery(".nice-select .list").html("");jQuery(".nice-select .list").html("");optionsHtml=""
var sortedKeys=Object.keys(CRYPTOCODES).sort();for(var i=0;i<sortedKeys.length;i++){optionsHtml+='<li data-value="'+CRYPTOCODES[sortedKeys[i]]+'" class="option ">'+sortedKeys[i]+'</li>';}
jQuery(".nice-select .list").html(optionsHtml);jQuery(".nice-select .list").html(optionsHtml);jQuery(".nice-select .list li[data-value="+currency1Symbol).attr("selected",true);jQuery(".nice-select .list li[data-value="+currency2Symbol).attr("selected",true);}
function updateAutocomplete(){CRYPTONAMES=[]
for(var key in CRYPTOCODES){if(BTCPRICES[CRYPTOCODES[key]]){CRYPTONAMES.push(key);}}
jQuery("#currency1-name").autocomplete({source:CRYPTONAMES,minLength:2,close:function(ev,ui){calculateConversion("left");}});jQuery("#currency2-name").autocomplete({source:CRYPTONAMES,minLength:2,close:function(ev,ui){calculateConversion("right");}});}
function updateSummary(){jQuery(".summary-currency1-symbol").html(jQuery("#currency1-name option:selected").val())
jQuery(".summary-currency2-symbol").html(jQuery("#currency2-name option:selected").val())
jQuery(".summary-currency1-amount").html(jQuery("#currency1-amount").val());jQuery(".summary-currency1-name").html(jQuery("#currency1-name option:selected").text());jQuery(".summary-currency2-amount").html(jQuery("#currency2-amount").val());jQuery(".summary-currency2-name").html(jQuery("#currency2-name option:selected").text());}
function updateTime(){var ts=new Date()
jQuery(".updated-time").html(ts.toLocaleTimeString());jQuery(".loading-prices").addClass("hidden");jQuery(".time-summary").removeClass("hidden");}
function convertNumber(number){return parseFloat(number.toPrecision(4))}
function calculateConversion(direction){var currency1Symbol=jQuery("#currency1-name").val()
var currency2Symbol=jQuery("#currency2-name").val()
if(currency1Symbol&&currency2Symbol){var currency1Amount=jQuery("#currency1-amount").val();var currency2Amount=jQuery("#currency2-amount").val();if(direction=="left"){if((currency2Amount!="")){var amountBTC=currency2Amount/BTCPRICES[currency2Symbol];var currency1Amount=amountBTC*BTCPRICES[currency1Symbol];jQuery("#currency1-amount").val(convertNumber(currency1Amount));updateSummary();}}else if(direction=="right"){if(currency1Amount!=""){var amountBTC=currency1Amount/BTCPRICES[currency1Symbol];var currency2Amount=amountBTC*BTCPRICES[currency2Symbol];jQuery("#currency2-amount").val(convertNumber(currency2Amount));updateSummary();}}}}
jQuery("#currency2-amount, #currency1-amount").on("keypress",function(event){if(event.keyCode==13){event.preventDefault();event.target.blur()}})
jQuery(document).ready(getInitialPrices);jQuery("#currency2-amount").on("keyup change",function(){calculateConversion("left");})
jQuery("#currency2-name").on("change",function(){calculateConversion("right");})
jQuery("#currency1-amount").on("keyup change",function(){calculateConversion("right");})
jQuery("#currency1-name").on("change",function(){calculateConversion("left");})