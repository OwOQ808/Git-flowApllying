<?php
	class BagModel extends Model{
		public function getSessionStatus(){
			if (!isset($_SESSION['authorized'])){
				return 0;
			}
			else{
				return 1;
			}
		}
		public function addInBag(){
			if (!isset($_SESSION['authorized'])){
				return "Для добавления книги необходима авторизация!";
			}
			else{
				$allBag=$this->db->getBagTable();
				$allBuy=$this->db->getBuyTable();
				for($i=0;$i<count($allBag);$i++){
					if($allBag[$i][1]==(int)$_SESSION['id'] and $allBag[$i][2]==(int)$_GET['id']){
						return "Данная книга уже была добавлена в корзину!";
					}
				}
				for($i=0;$i<count($allBuy);$i++){
					if($allBuy[$i][1]==(int)$_SESSION['id'] and $allBuy[$i][2]==(int)$_GET['id']){
						return "Вы уже купили эту книгу!";
					}
				}
				$this->db->insertBagTable((int)$_SESSION['id'],(int)$_GET['id']);
				return "Книга успешно добавлена в корзину!";
			}
			
		}
		public function sendBooksMain(){
			$allBag=$this->db->getBagTable();
			$allBooks=$this->db->getMainBooksTable();
			$userBag=[];
			$userBooks=[];
			for($i=0;$i<count($allBag);$i++){
				if($allBag[$i]['iduser']==(int)$_SESSION['id']){
					$userBag[]=$allBag[$i];
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
		public function deleteFromBag(){
			$this->db->deleteFromBag((int)$_SESSION['id'],(int)$_GET['book']);
		}
		public function addInBuy(){
			$this->db->addInBuy((int)$_SESSION['id'],(int)$_GET['book']);
		}
		
	}