// ==UserScript==
// @name         New sugoi
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
let mwurl = location.href
console.log(mwurl);
////この下maruhatu

//////////////////////////////////////////【まる初くんのみ】//////////////////////////////
if (mwurl.match(/^(?=.*parties)(?=.*search)/)) {
 $('.text-left:eq(0)').append($('<input type="button" id="id001102" value="凄いボタン" style="width:80px;height:27px;font-size:10px;background:#FF6633;" >').click(function () {

var NameAndjoinnum = []

 for (var pidi = 0; pidi < document.getElementsByClassName('col-sm-7 text-left').length; pidi++) {

var full = document.getElementsByClassName('col-sm-7 text-left')[pidi].textContent
    var cusnoId1 = document.getElementsByClassName('party_floor span-separate-sentences')[pidi].textContent
    var cusnoId2 = document.getElementsByClassName('party_start_at')[pidi].textContent
    var cusidinp1 = document.getElementsByClassName('party_id')[pidi].textContent
    var cusidinp2 = document.getElementsByClassName('party_floor span-separate-sentences')[pidi].textContent
    var cusidinp3 = document.getElementsByClassName('party_start_at')[pidi].textContent
    var cusparty_id = document.getElementsByClassName('party_id')[pidi].textContent


var PnameIDin = document.getElementsByClassName('col-sm-7 text-left')[pidi].textContent
var kikakunum = document.getElementsByClassName('table table-sm table-bordered')[pidi].textContent.match(/\d+(?=対)/)
var joinman = document.getElementsByClassName('capacity_man')[pidi].previousElementSibling.textContent
var joinwoman = document.getElementsByClassName('capacity_woman')[pidi].previousElementSibling.textContent
var womanAge = document.getElementsByClassName('table table-sm table-bordered')[pidi].textContent.match(/(?<=年齢・条件\（女性\）\d+[〜～])\d+(?=歳)/)
var womanJsPass = document.querySelector(`#edit_party_${cusparty_id} > table > tbody > tr:nth-child(10) > td:nth-child(2) > div`).innerHTML.match(/(.*?)(?=<br>)/)[0]
womanAge = womanAge || womanJsPass;

NameAndjoinnum.push(`${cusidinp1}${cusidinp2}${cusidinp3} ${joinman}-${joinwoman}(${kikakunum}-${kikakunum}) ${womanAge}`);

}
console.log(NameAndjoinnum .join('\n'));
navigator.clipboard.writeText(NameAndjoinnum .join('\n'));

}))
}