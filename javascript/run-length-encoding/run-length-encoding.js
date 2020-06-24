export const encode = (data) => {
  let encodedData = ""
  for (let i=0; i < data.length; i++){
    let start = i;
    let count = 1;
    let isNewToken = false;

    while(data[start]===data[start + count]) {
      count++;
      isNewToken = true;
    }
    i = start + count-1;
    if (isNewToken) {
      encodedData = `${encodedData}${count}${data[start]}`;
    } else {
      encodedData = `${encodedData}${data[start]}`
    }
  }
  return encodedData;
};

export const decode = data => {
  let decodedData = "";
  let count = "";

  data.split('').forEach(element => {
    if (Number.isInteger(parseInt(element))) {
      count += element;
    }
    else {
      decodedData = `${decodedData}${element.repeat(count) || element}`;
      count = "";
    }
  });

  return decodedData
}
