<?php
	class ProfileController extends Controller{
		private $page1='/application/views/main.tpl.php';
		private $page2='/application/views/auth.tpl.php';
		public function __construct(){
			$this->view=new View();
			$this->model=new ProfileModel();
		}
		public function index(){
			if (!isset($_SESSION['authorized'])){
				 
				$this->view->render($this->page2);
			}
			else{
				$this->view->render($this->page1);
			}
		}
		public function getInfo(){
			$this->view->sendBooksMain($this->model->sendUserInfo());
		}
		public function goout(){
			session_destroy();
		}
		
	}