let time = 0
class User{
    constructor(id){
        this.id=id
        // 关注
        this.followee = new Set()
        // 推文
        this.tweet=[]
    }
    follow(id){
        if(id!=this.id&&!this.followee.has(id)){
            this.followee.add(id)
        }
    }
    unfollow(id){
        if(id!=this.id&&this.followee.has(id)){
            this.followee.delete(id)
        }
    }
    post(id){
        time++
        this.tweet.unshift({
            val : time,
            id:id
        })
    }
}
var Twitter = function() {
    this.userList = new Map()
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if(!this.userList.has(userId)){
        this.userList.set(userId,new User(userId))
    }
    this.userList.get(userId).post(tweetId)
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    if(!this.userList.has(userId)){
        return [];
    }
    let list = this.userList.get(userId).tweet.slice(0,10)
    for(x of this.userList.get(userId).followee){
        list = list.concat(this.userList.get(x).tweet.slice(0,10))
    }
    list.sort((a,b)=>b.val-a.val)
    let res = []
    res= list.slice(0,10).map(x=>x.id)
    return res
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(!this.userList.has(followerId)){
        this.userList.set(followerId,new User(followerId))
    }
    if(!this.userList.has(followeeId)){
        this.userList.set(followeeId,new User(followeeId))
    }
    this.userList.get(followerId).follow(followeeId)
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if(!this.userList.has(followerId)){
        this.userList.set(followerId,new User(followerId))
    }
    this.userList.get(followerId).unfollow(followeeId)
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */