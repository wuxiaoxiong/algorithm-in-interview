function find(target, array) {
    let rows = 0; // 右上角数字所在的行
    let cols = array[0].length - 1; // 右上角数字所在的列
    let result = false;

    // 特殊情况判断. 其他特殊情况比如target不在array里,这里不在列举
    if(array.length === 0) return false;

    while(cols >= 0 && rows < array.length) {
        if(array[rows][cols] === target) {
            result = true;
            break;
        } else if(array[rows][cols] > target) {
            // 如果右上角数字比目标数字大,向左移动指针
            cols--;
        } else {
            // 如果右上角数字比目标数字小,向下移动指针
            rows++;
        }
    }

    return result;
}
