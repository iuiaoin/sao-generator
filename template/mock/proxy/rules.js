module.exports = {
  local: [
    {
        paths: [
            '/api/(.*)'
        ],
        target: 'http://127.0.0.1:9090'
    }
  ],
  test: [
      {
          paths: [
              '/api/(.*)'
          ],
          target: 'http://10.177.15.214:8080'
      }
  ]
}