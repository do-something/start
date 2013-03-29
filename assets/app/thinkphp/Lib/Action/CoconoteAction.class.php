<?php 
class CoconoteAction extends Action{
    public function index(){
        $coconote = M("coconote");
        $note = $coconote->order('id desc')->limit(1)->select();
        $this->assign('note', $note[0]['note']);
        $this->display();
    }

    public function save(){
        // TODO: 保存数据
        $coconote = M("Coconote");

        $data['note'] = $_POST['note'];

        if ($resultId = $coconote->add($data)) {
            $this->success("插入成功，编号为：$resultId", U('coconote/index'));
        } else {
            $this->error('数据写入错误');
        }
        
    }
}