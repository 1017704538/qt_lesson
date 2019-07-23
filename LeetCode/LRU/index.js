/*
* @param capacity:number 容量

*/
var LRUCache = function(capacity){
    this.capacity = capacity//空间的上限
    this.arr = [];//数据结构 使用的空间 arr.length push
    this.obj = {};//3,3
};
    LRUCache.prototype.get = function(key){
        return;
    }
    LRUCache.prototype.set = function(){

    }
    // [] length push
    // [1] push
    // [1,2] 在哪端是最近最常用的?
    // get(1)读操作
    // 1所在的位置，从原来的数移除,push到队尾 不会带来空间使用量的增加
    // [2,1]
    // push(3) 带来空间的分配 是否回收空间? 最近最少使用(length>=容量)  shift push(3) 
