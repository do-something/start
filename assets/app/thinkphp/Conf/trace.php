<?php
return array( 
    '当前页面'=>$_SERVER['PHP_SELF'], 
    '通信协议'=>$_SERVER['SERVER_PROTOCOL'],
    'LAYOUT_NAME'=> C('LAYOUT_NAME'),
    'LAYOUT_ON'=> C('LAYOUT_ON'),
    'APP_NAME'=> APP_NAME,
    '__URL__'=> __URL__,
    '__APP__'=> __APP__,
    'URL_HTML_SUFFIX'=> C('URL_HTML_SUFFIX'),
    'ThinkPHP版本'=>C('THINK_VERSION')
); 