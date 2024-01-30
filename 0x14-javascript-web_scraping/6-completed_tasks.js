#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Usage: ./6-completed_tasks.js <API-URL>');
  process.exit(1);
}

request(apiUrl, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    console.error('Error fetching data:', error || `Status code: ${response.statusCode}`);
    process.exit(1);
  }

  const completedTasksByUser = JSON.parse(body)
    .filter(todo => todo.completed)
    .reduce((acc, todo) => ((acc[todo.userId] = (acc[todo.userId] || 0) + 1), acc), {});

  console.log(completedTasksByUser);
});
