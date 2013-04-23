<?php 
class CodeAction extends Action{
    public function index(){
        header('Content-Type: application/json; charset=utf-8');
        if ($pageNumber = $_GET['page']) {
            $this->display(p.$pageNumber);
        }else{
            $this->display();
        }
    }
}