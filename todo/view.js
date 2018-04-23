function render(data) {
  const result = `
  <table>
    <thead>
      <tr>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
    ${data
      .map(
        todo => `
      <tr>
        <td>${todo}</td>
      </tr>
      `,
      )
      .join('')}
      
    </tbody>
  </table>
  `;

  return result;
}

module.exports = { render };
