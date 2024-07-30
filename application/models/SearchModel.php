<?php
	class SearchModel extends Model{
		protected $db;
		public function __construct(){
			$this->db=new DB(host,user,password,db);
		}
		public function getBookSearch(){
			$books=$this->db->getMainBooksTable();
			$bb=[];
			$go =  $_GET['name'];
			$bb[]=$go;
			for($i=0;$i<count($books);$i++){
				if(str_contains(mb_strtolower($books[$i][1]),mb_strtolower($go)) || 
					str_contains(mb_strtolower($books[$i][11]),mb_strtolower($go))
					|| str_contains(mb_strtolower($books[$i][13]),mb_strtolower($go))
					) 
				{
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