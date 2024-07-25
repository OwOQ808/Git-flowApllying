<?php
	class AuthModel extends Model{
		public function getSessionStatus(){
			if (!isset($_SESSION['authorized'])){
				return 0;
			}
			else{
				return 1;
			}
		}
		public function startSession($email,$pasw){
			$users=$this->db->getUsersTable();
			for($i=0;$i<count($users);$i++){
				if($users[$i][0]==$email && $users[$i][2]==$pasw){
					$_SESSION['authorized']=1;
					$_SESSION['id']=$users[$i][3];
					return;
				}
			}
		}
		public function createUser($data){
			$users=$this->db->getUsersTable();
			for($i=0;$i<count($users);$i++){
				if($users[$i][0]==$data[0] || $users[$i][1]==$data[2] || $users[$i][4]==$data[1] ||
					empty($data[0]) || empty($data[1]) || empty($data[2]) || empty($data[3])  ){
					return;
				}
			}
			$this->db->insertUser($data[0],$data[2],$data[3],$data[1]);
			$this->startSession($data[0],$data[3]);
		}
	}