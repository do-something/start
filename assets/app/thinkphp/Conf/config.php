<?php
//注意，请不要在这里配置SAE的数据库，配置你本地的数据库就可以了。
return array(
    //'配置项'=>'配置值'
    'SHOW_PAGE_TRACE'=>true,
    'URL_HTML_SUFFIX'=>'.html',
    'URL_MODEL'      => 2,       // URL访问模式可选参数0、1、2、3代表以下四种模式：
    // 0 (普通模式); 1 (PATHINFO 模式); 2 (REWRITE  模式); 3 (兼容模式)  默认为PATHINFO 模式，提供最好的用户体验和SEO支持
    'URL_CASE_INSENSITIVE' =>true,  // URL大小写敏感
    'LAYOUT_ON'=>true,
    'URL_HTML_SUFFIX'=>false,  // 伪静态后缀
    'URL_ROUTER_ON'=>true,
    'URL_ROUTER_RULES'=>array(
        'home' => 'Index/index'
    ),
    'URL_MODULE_MAP'=>array(
        // 'index'=>'home'
    ),
    'URL_ROUTE_REVERSE_RULES' => array(
        // '/index\/index/' => '',
        '/(.*)\/index$/' => '$1',
        // '/home\/index/' => 'home'
    )
);
?>
