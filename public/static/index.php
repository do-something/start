<?php 
define('APP_DEBUG', true); // 开启调试模式
// define('APP_NAME','thinkphp');

// <!-- build:js ./ -->
define('ROOT_PATH', '../../');
// <!-- endbuild -->
define('__STATIC__', ROOT_PATH.'public/static');
define('__DIST__', ROOT_PATH.'public/dist');
define('__ROOT_PATH__', ROOT_PATH);

define('APP_PATH', ROOT_PATH.'app/');

define('THINK_CORE', ROOT_PATH.'thinkphp/core/');

define('THINK_PATH', THINK_CORE.'ThinkPHP/');
define('EXTEND_PATH', THINK_CORE.'thinkphp-extend/Extend/');
define('ENGINE_PATH', EXTEND_PATH.'Engine/');
define('ENGINE_NAME', 'sae');

define('RUNTIME_PATH', ROOT_PATH.'.tmp/Runtime/');

require(THINK_PATH.'ThinkPHP.php');
// require(ENGINE_PATH.'sae.php');
