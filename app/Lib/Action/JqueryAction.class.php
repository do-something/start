<?php 
class JqueryAction extends Action{
    public function index(){
        $this->display();
    }

    public function chapter(){
        if ($number = $_GET['number']) {
            $this->assign('number', $number);
            $this->display("Jquery:chapter-$number");
        }else{
            $this->display();
        }
    }

    public function edit(){
        $this->display();
    }

    public function release(){
        $jquerydb = D('Jquery');
        // $data = $_POST;
        if ($jquerydb->create()){
            // $jquerydb->create_time = time();
            $result = $jquerydb->add();
            if ($result){
                $this->success('数据添加成功', __URL__.'/notebook');
            }else{
                $this->error('失败');
            }
        }else{
            $this->error($jquerydb->getError());
        }
    }

    public function notebook(){
        $jquerydb = M('Jquery');
        if ($id = $_GET['id']) {
            $result = $jquerydb->where("id=$id")->select();
            $this->assign('result', $result);
            $this->assign('previous_page', $_SERVER['HTTP_REFERER']);
            $this->display("notebook-show");
        }else{
            import('ORG.Util.Page');
            $count = $jquerydb->count();
            $page = new Page($count, 5);
            $page->setConfig('header','条笔记');
            $page->setConfig('theme', '%start% %totalPage% %upPage% %linkPage% %downPage% %close%');
            $show = $page->show();
            // $list = $jquerydb->select();
            $list = $jquerydb->order('page_number')->limit($page->firstRow.','.$page->listRows)->select();
            $this->assign('list', $list);
            $this->assign('page', $show);
            $this->display();
        }
    }
}