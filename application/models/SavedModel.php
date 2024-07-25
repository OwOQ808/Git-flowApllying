<?php
	class SavedModel extends Model{
		public function getSessionStatus(){
			if (!isset($_SESSION['authorized'])){
				return 0;
			}
			else{
				return 1;
			}
		}
		public function sendBooksMain(){
			$allBuy=$this->db->getBuyTable();
			$allBooks=$this->db->getMainBooksTable();
			$userBag=[];
			$userBooks=[];
			for($i=0;$i<count($allBuy);$i++){
				if($allBuy[$i]['iduser']==(int)$_SESSION['id']){
					$userBag[]=$allBuy[$i];
				}
			}
			for($i=0;$i<count($allBooks);$i++){
				for($j=0;$j<count($userBag);$j++){
					if($allBooks[$i]['idbooks']==$userBag[$j]['idbook']){
						$userBooks[]=$allBooks[$i];
					}
				}
			}
			return $userBooks;
		}
		public function getBook($value){
			$tmp=$this->sendBooksMain();
			for($i=0;$i<count($tmp);$i++){
				if($tmp[$i]['idbooks']==(int)$value){
					return $tmp[$i][9];
				}
			}
		}
	}