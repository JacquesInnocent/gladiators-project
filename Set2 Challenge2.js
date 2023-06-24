function checkArrays (arr){
    let nums = [1,4,7,5,8,3,4];
        for (let i = 0; i <= arr.length; i++) {
            if(nums[arr[i]] === undefined) {
                nums[arr[i]] = 1;
            }
            else {
                return true
            }
        }
        return false;
}