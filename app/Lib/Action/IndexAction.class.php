<?php

class IndexAction extends Action {

    protected function _initialize() {
        header("Content-Type:text/html; charset=utf-8");
    }

    public function index() {

        $this->display();
    }

    public function number2(){
        $this->display();
    }

    public function lala(){
        $this->display();
    }

    public function dump(){
        $this->success('新增成功', U('index/lala'));
    }

    public function redirect(){
        redirect(U('index/lala'), 1, '页面跳转中...');
    }

    public function verify(){
        import('ORG.Util.Image');
        Image::buildImageVerify(4,1,"png",48,20);
    }
}
