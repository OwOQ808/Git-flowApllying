<?php
	class AuthController extends Controller{
		private $page1='/application/views/auth.tpl.php';
		private $page2='/application/views/error.tpl.php';
		public function __construct(){
			$this->model=new AuthModel();
			$this->view=new View();
		}
		public function check(){
			if($this->model->getSessionStatus()==0){
				$this->view->render($this->page1);
			}
		}
		public function checkAuth(){
			$this->view->auth($this->model->getSessionStatus());
		}
		public function startSession(){
			$postData = file_get_contents('php://input');
			$data = json_decode($postData, true);
			$this->model->startSession($data[0],$data[1]);
			$this->view->auth($this->model->getSessionStatus());
		}
		public function createUser(){
			$postData = file_get_contents('php://input');
			$data = json_decode($postData, true);
			$this->model->createUser($data);
			$this->view->auth($this->model->getSessionStatus());
		}
	}