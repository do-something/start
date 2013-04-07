<?php 
class JqueryAction extends Action{
    public function index(){
        $this->display();
    }

    public function chapter(){
        $number = $_GET['number'];
        $this->assign('number', $number);
        $this->display("Jquery:chapter-$number");
    }

    public function release(){
        $this->display();
    }
}