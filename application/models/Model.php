<?php
	class Model{
		protected $db;
		public function __construct(){
			$this->db=new DB(host,user,password,db);
		}
	}