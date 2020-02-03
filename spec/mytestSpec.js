function returnLargest(arr){
    temp=arr[arr.length-1]
    for(var i=arr.length-1;i>=0;i--){
        if(arr[i]>temp){
            temp=arr[i]
    }
}
    return temp
}


describe("returnLargest", function() {
    it("should return 2 when [2,1,3] is passed as an argument", function(){
        expect(returnLargest([4,1,3])).toEqual(4);
    });
    it("should return 7 when [2,4,7] is passed as an argument", function() {
        expect(returnLargest([2,4,7])).toEqual(7);
    });
    it("should return -5 when [-155,-24,-5] is passed as an argument", function(){
        expect(returnLargest([-155,-24,-5])).toEqual(-5);
    });
});
