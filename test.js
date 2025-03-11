const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function find_last_person(numbers, M) {
  // 遍历数字数组
  for (let i = 1; i <= numbers.length; i++) {
    // 当索引等于M时，执行操作
    if (i === M) {
      // 构造新数组：从第M个元素开始到数组结束，再拼接从数组开始到第M-1个元素
      const temp = [...numbers.slice(M), ...numbers.slice(0, M - 1)];
      // 递归调用，以新的数组和M为参数
      return find_last_person(temp, M);
    }
  }
  // 当数组遍历完成，返回最终数组
  return numbers;
}

// 监听用户输入
rl.on('line', (M) => {
  M = parseInt(M); // 将输入转换为整数

  // 如果输入的M小于等于1或大于等于100，输出错误信息
  if (M <= 1 || M >= 100) {
    console.log("ERROR!");
  } else {
    // 否则，创建一个从1到100的数组
    const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

    // 调用find_last_person函数处理numbers数组
    const result = find_last_person(numbers, M);
    // 对结果进行排序
    result.sort((a, b) => a - b);

    // 使用逗号将数组元素连接成一个字符串，并打印输出
    console.log(result.join(','));
  }

  // 完成输入后关闭readline接口
  rl.close();
});
