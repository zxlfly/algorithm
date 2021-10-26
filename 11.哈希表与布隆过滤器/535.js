/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
 let str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
 let map =new Map()
 function getRan(str){
     let showUrl = ""
     for(let i = 0 ;i<6;i++){
         showUrl+=str[Math.floor(Math.random()*61)]
     }
     return showUrl
 }
 var encode = function(longUrl) {
     let res = getRan(str)
     while(map.has[res]){
         res = getRan(str)
     }
     map[res] = longUrl
     return "https://leetcode.com/problems/"+res
 };
 
 /**
  * Decodes a shortened URL to its original URL.
  *
  * @param {string} shortUrl
  * @return {string}
  */
 var decode = function(shortUrl) {
     let key = shortUrl.slice(-6)
     return map[key]
 };
 
 /**
  * Your functions will be called as such:
  * decode(encode(url));
  */