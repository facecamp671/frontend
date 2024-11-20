var remark_config = {
  host: 'https://facecamp671.ru/remark42',
  url: 'https://facecamp671.ru',
  site_id: 'remark',
  theme: 'dark',
  no_footer: true
};

(function () {
  var host = 'https://facecamp671.ru/remark42'; // Your remark42 host
  var components = ['embed']; // Your choice of remark42 components

  (function (c) {
    for (let i = 0; i < c.length; i++) {
      const d = document
      const s = d.createElement('script')
      s.src = remark_config.host + '/web/' + c[i] + '.js'
      s.defer = true
      ;(d.head || d.body).appendChild(s)
    }
  })(components)
})()