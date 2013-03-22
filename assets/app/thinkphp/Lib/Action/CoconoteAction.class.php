<?php 

class CoconoteAction extends Action{

    protected function _initialize() {
        header("Content-Type:text/html; charset=utf-8");
    }

    public function index(){
        $this->display();
    }
}