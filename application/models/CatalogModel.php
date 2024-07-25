<?php
	class CatalogModel extends Model{
		protected $db;
		public function __construct(){
			$this->db=new DB(host,user,password,db);
		}
		public function getBookInfo(){
			$books=$this->db->getMainBooksTable();
			$tags=$this->db->getTagsTable();
			$bb=[];
			for($i=0;$i<count($tags);$i++){
				if($tags[$i][2]==(int)$_GET['id']){
					$bb=$tags[$i];
					break;
				}
			}
			for($i=0;$i<count($books);$i++){
				if($books[$i]['idtags']==(int)$_GET['id']){
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
		public function getBookSearch(){
			$books=$this->db->getMainBooksTable();
			$bb=[];
			for($i=0;$i<count($books);$i++){
				if($books[$i]['bookname']==(int)$_GET['id']){
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