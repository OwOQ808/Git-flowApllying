<?php
	class IndexModel extends Model{
		public function getALLMenu(){
			$menu=[];
			$catalog=$this->db->getCatalogTable();
			$tags=$this->db->getTagsTable();
			for($i=0;$i<count($catalog);$i++){
				$menu[$i]=[$catalog[$i]];
				for($j=0;$j<count($tags);$j++){
					if($catalog[$i][1]==$tags[$j][1]){
						$menu[$i][]=$tags[$j];
					}
				}
			}
			return $menu;
		}
		public function selectBooksMain($maintag){
			$allBooks=$this->db->getMainBooksTable();
			$books=[];
			for($i=0;$i<count($allBooks);$i++){
				if($allBooks[$i]['maintag']==$maintag)
					$books[]=[
					$allBooks[$i]['idbooks'],
					$allBooks[$i]['bookname'],
					$allBooks[$i]['author'],
					$allBooks[$i]['authorname'],
					$allBooks[$i]['cost'],
					$allBooks[$i]['img'],
					$allBooks[$i]['mark']
					];					
			}
			return $books;
		}
		public function selectBooks($idtags){
			$allBooks=$this->db->getMainBooksTable();
			$books=[];
			for($i=0;$i<count($allBooks);$i++){
				if($allBooks[$i]['idtags']==$idtags)
					$books[]=[
					$allBooks[$i]['idbooks'],
					$allBooks[$i]['bookname'],
					$allBooks[$i]['author'],
					$allBooks[$i]['authorname'],
					$allBooks[$i]['cost'],
					$allBooks[$i]['img'],
					$allBooks[$i]['mark'],
					$allBooks[$i]['idtags']
					];					
			}
			return $books;
		}
	}