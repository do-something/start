<?php 
class JqueryModel extends Model{
    protected $_validate = array(array('title', 'require', '标题未填写'));
}