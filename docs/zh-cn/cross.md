## 跨域解决

1.如果图片在你自己的服务器上，配置 nginx

```bash
location / {
	 add_header Access-Control-Allow-Origin *;
  	 add_header Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept";
  	 add_header Access-Control-Allow-Methods "GET, POST, OPTIONS";
                add_header Access-Control-Allow-Credentials "true";
         if ($request_method = "OPTIONS") {
                    add_header Access-Control-Allow-Origin *;
                   add_header Access-Control-Allow-Methods "GET, POST, OPTIONS";
                   return 204;
  	}

  }
location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
  {
      add_header Access-Control-Allow-Origin *;
      expires      30d;
      error_log off;
      access_log /dev/null;
  }
```

2. CDN 图片

3. 网络图片
