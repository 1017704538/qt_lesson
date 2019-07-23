var minEatingSpeed = function(pile,H = 8){
    let lo = 1,//min
        hi =Math.max(...pile);//max
    while(lo <= hi){
        if(canEatAllBananas(piles,H,lo)){
            hi--;
        }
        lo++;
    }
    return lo;
}
function canEatAllBananas(piles,H,low){
    let h = 0;
    for(let pile of piles){
        h += Math.ceil(pile/low);
    }
    return h <= H;
}
console.log(minEatingSpeed([3, 6, 7 ,11]))