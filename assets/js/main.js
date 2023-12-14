// Divider App

const divideString = () => {
  const inputString = document.getElementById("inputString").value;
  const inputDivide = document.getElementById("inputDivide").value;

  const before = document.getElementById("before").checked;
  const after = document.getElementById("after").checked;

  const inputIndex = inputString.indexOf(inputDivide);

  let resultFront;
  let resultBack;

  const outputFront = document.getElementById("outputFront");
  const outputBack = document.getElementById("outputBack");

  if (before) {
    resultFront = inputString.slice(0, inputIndex);
    resultBack = inputString.slice(inputIndex);
    outputFront.innerHTML = `<h2>First Part</h2><br><p>${resultFront}</p>`;
    outputBack.innerHTML = `<h2>Last Part</h2><br><p>${resultBack}</p>`;
    return;
  } else if (after) {
    resultFront = inputString.slice(0, inputIndex + 1);
    resultBack = inputString.slice(inputIndex + 1);
    outputFront.innerHTML = `<h2>First Part</h2><br><p>${resultFront}</p>`;
    outputBack.innerHTML = `<h2>Last Part</h2><br><p>${resultBack}</p>`;
    return;
  }
};
