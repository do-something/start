<?php 
class JqueryModel extends Model{
    protected $_validate = array(
        array('title', 'require', '标题没有填写'),
        array('page_number', 'number', '页码必须是数字'),
        array('code', 'require', '代码没有填写')
    );
}