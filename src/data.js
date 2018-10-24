var targetData = {
    "coordinate": {
      "x":1,
      "y":2
    },
    "time": 1
};

function loop(){
    targetData.coordinate.x = targetData.coordinate.x + 1;
    targetData.time = targetData.time + 1;
}
function getData(){
    loop();
    return targetData;
}

module.exports.getData = getData;