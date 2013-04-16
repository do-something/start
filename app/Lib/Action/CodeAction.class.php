<?php 
class CodeAction extends Action{
    public function index(){
        header('Content-Type: application/json; charset=utf-8');
        $this->display();
    }
}