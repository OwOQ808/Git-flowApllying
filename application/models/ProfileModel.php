<?php
	class ProfileModel extends Model{
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
					return;
				}
			}
		}
		public function sendUserInfo(){
			$users=$this->db->getUsersTable();
			$bb=[];
			$bag=$this->db->getBagTable();
			$buy=$this->db->getBuyTable();
			$bagcount=0;
			$buycount=0;
			$allcost=0;
			for($i=0;$i<count($users);$i++){
				if($_SESSION['id']==$users[$i][3]){
					$bb[]=$users[$i];
					break;
				}
			}
			for($i=0;$i<count($bag);$i++){
				if($_SESSION['id']==$bag[$i][1]){
					$bagcount+=1;
				}
			}
			for($i=0;$i<count($buy);$i++){
				if($_SESSION['id']==$buy[$i][1]){
					$buycount+=1;
				}
			}
			$bb[]=$bagcount;
			$bb[]=$buycount;

			return $bb;
		}
	}