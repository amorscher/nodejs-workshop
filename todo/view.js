function render(data) {
  const result = `
    <h1>
      ${data.join(', ')}
    </h1>
  `;

  return result;
}

module.exports = {render};
