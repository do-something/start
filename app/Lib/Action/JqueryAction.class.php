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
            $page->setConfig('prev','< 上一页');
            $page->setConfig('next','下一页 >');
            $page->setConfig('theme', '%upPage% %first% %prePage% %linkPage% %nextPage% %end% %downPage% ');
            $show = $page->show();
            // $list = $jquerydb->select();
            $list = $jquerydb->order('page_number')->limit($page->firstRow.','.$page->listRows)->select();
            $this->assign('list', $list);
            $this->assign('page', $show);
            $this->display();
        }
    }
}