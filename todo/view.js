function render(data) {
  const result = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
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
  </body>
  </html>
  `;

  return result;
}

module.exports = { render };
