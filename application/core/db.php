<?php
interface IDB{
	public function getLink();
	public function getCatalogTable();
	public function getTagsTable();
	public function getUsersTable();
}
class DB implements IDB{
	private $link;
	private $dbhost;
	private $dbuser;
	private $dbpassword;
	private $dbname;
	function __construct($dbhost,$dbuser,$dbpassword,$dbname){
		$this->dbhost=$dbhost;
		$this->dbuser=$dbuser;
		$this->dbpassword=$dbpassword;
		$this->dbname=$dbname;
	}
	public function getLink(){
		return $this->link;
	}
	public function getCatalogTable(){
		$this->link=mysqli_connect(
			$this->dbhost,
			$this->dbuser,
			$this->dbpassword,
			$this->dbname
		);
		$catalog=[];
		$result=mysqli_query($this->link,"select * from catalog");
		while($row=mysqli_fetch_array($result)){
			$catalog[]=[$row['name'],$row['cat_id']];
		}
		mysqli_close($this->link);
		return $catalog;
	}
	public function getTagsTable(){
		$this->link=mysqli_connect(
			$this->dbhost,
			$this->dbuser,
			$this->dbpassword,
			$this->dbname
		);
		$tags=[];
		$result=mysqli_query($this->link,"select * from tags");
		while($row=mysqli_fetch_array($result)){
			$tags[]=[$row['name'],$row['cat_id'],$row['idtags']];
		}
		mysqli_close($this->link);
		return $tags;
	}
	public function getUsersTable(){
		$this->link=mysqli_connect(
			$this->dbhost,
			$this->dbuser,
			$this->dbpassword,
			$this->dbname
		);
		$users=[];
		$result=mysqli_query($this->link,"select * from users");
		while($row=mysqli_fetch_array($result)){
			$users[]=[$row['email'],$row['login'],$row['pasw'],$row['id'],$row['phone']];
		}
		mysqli_close($this->link);
		return $users;
	}
	public function insertUser($em,$log,$pas,$ph){
		$this->link=mysqli_connect(
			$this->dbhost,
			$this->dbuser,
			$this->dbpassword,
			$this->dbname
		);
		$result=mysqli_query($this->link,"insert into users (email,login,pasw,phone) values ('$em','$log','$pas','$ph')");
		mysqli_close($this->link);
	}
	public function getMainBooksTable(){
		$this->link=mysqli_connect(
			$this->dbhost,
			$this->dbuser,
			$this->dbpassword,
			$this->dbname
		);
		$books=[];
		$result=mysqli_query($this->link,"select * from books inner join authors on books.author=authors.idauthors inner join tags on books.idtags=tags.idtags order by idbooks asc");
		while($row=mysqli_fetch_array($result)){
			$books[]=$row;
		}
		mysqli_close($this->link);
		return $books;
	}
	public function getAuthorsTable(){
		$this->link=mysqli_connect(
			$this->dbhost,
			$this->dbuser,
			$this->dbpassword,
			$this->dbname
		);
		$authors=[];
		$result=mysqli_query($this->link,"select * from authors");
		while($row=mysqli_fetch_array($result)){
			$authors[]=$row;
		}
		mysqli_close($this->link);
		return $authors;
	}
	public function getMainTagsTable(){
		$this->link=mysqli_connect(
			$this->dbhost,
			$this->dbuser,
			$this->dbpassword,
			$this->dbname
		);
		$tags=[];
		$result=mysqli_query($this->link,"select * from maintags");
		while($row=mysqli_fetch_array($result)){
			$tags[]=$row;
		}
		mysqli_close($this->link);
		return $tags;
	}
	public function getBagTable(){
		$this->link=mysqli_connect(
			$this->dbhost,
			$this->dbuser,
			$this->dbpassword,
			$this->dbname
		);
		$bag=[];
		$result=mysqli_query($this->link,"select * from bag");
		while($row=mysqli_fetch_array($result)){
			$bag[]=$row;
		}
		mysqli_close($this->link);
		return $bag;
	}
	public function insertBagTable($user,$book){
		$this->link=mysqli_connect(
			$this->dbhost,
			$this->dbuser,
			$this->dbpassword,
			$this->dbname
		);
		$result=mysqli_query($this->link,"insert into bag (iduser,idbook) values ({$user},{$book})");

		mysqli_close($this->link);
	}
	public function deleteFromBag($user,$book){
		$this->link=mysqli_connect(
			$this->dbhost,
			$this->dbuser,
			$this->dbpassword,
			$this->dbname
		);
		$result=mysqli_query($this->link,"delete from bag where iduser={$user} and idbook={$book}");

		mysqli_close($this->link);
	}
	public function addInBuy($user,$book){
		$this->link=mysqli_connect(
			$this->dbhost,
			$this->dbuser,
			$this->dbpassword,
			$this->dbname
		);
		$result=mysqli_query($this->link,"insert into buy (iduser,idbook) values ({$user},{$book})");

		mysqli_close($this->link);
	}
	public function getBuyTable(){
		$this->link=mysqli_connect(
			$this->dbhost,
			$this->dbuser,
			$this->dbpassword,
			$this->dbname
		);
		$buy=[];
		$result=mysqli_query($this->link,"select * from buy");
		while($row=mysqli_fetch_array($result)){
			$buy[]=$row;
		}
		mysqli_close($this->link);
		return $buy;
	}
}