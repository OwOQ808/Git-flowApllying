<?php
	class BookModel extends Model{
		public function getBookInfo(){
			$books=$this->db->getMainBooksTable();
			$bb=[];
			for($i=0;$i<count($books);$i++){
				if($books[$i]['idbooks']==(int)$_GET['id']){
					$bb[]=[
					$books[$i]['idbooks'],
					$books[$i]['bookname'],
					$books[$i]['author'],
					$books[$i]['authorname'],
					$books[$i]['cost'],
					$books[$i]['img'],
					$books[$i]['mark'],
					$books[$i]['about'],
					$books[$i]['idtags'],
					$books[$i]['name']
					];		
				}
			}
			return $bb;
		}
	}