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

    public function edit(){
        $this->display();
    }

    public function release(){
        $jquerydb = D('jquery');
        // $data = $_POST;
        if ($jquerydb->create()){
            $result = $jquerydb->add();
            if ($result){
                $this->success('成功');
            }else{
                $this->error('失败');
            }
        }else{
            $this->error($jquerydb->getError());
        }
    }

    public function notebook(){
        $this->display();
    }
}