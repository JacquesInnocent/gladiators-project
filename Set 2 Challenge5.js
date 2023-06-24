let common = ["plays", "plate", "polygon"];

let commonPrefix = function (common) {

  for (let i = 0; i < common.length; i++) {

    for (let j = 0; j < common[i].length; j++) {
      
      if (common[i][j] == common[i + 1][j] && common[i + 1][j] ==common[i + 2][j]) {

        return (common[i][j]);

      } 
      else {
        return "";
      }
    }
  }
};

commonPrefix(common);