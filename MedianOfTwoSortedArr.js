var findMedianSortedArrays = function(nums1, nums2) {
    // we first use 2 sorted array 
    // then find the median if length is even or odd according to it
      
        let res = []
        let i = 0
        let j = 0
        let k = 0
  
        while(i <= nums1.length && j < nums2.length){
  
          if(nums1[i] < nums2[j]){
            res[k] = nums1[i];
            i++;
            k++;
  
          }else{
            res[k] = nums2[j];
            j++;
            k++;
          }
        }
  
        while(i < nums1.length){
            res[k] = nums1[i];
            i++;
            k++;
        }
        while(j < nums2.length){
            res[k] = nums2[i];
            j++;
            k++;
        }
  
        let len = res.length;
        let mid = len / 2.0
  
        if(len % 2 == 1){
          return res[Math.floor(mid)]
        }else{
          return (res[mid]+ res[mid -1])/2
        }
    
    
  };