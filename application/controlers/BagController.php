<?php
	class BagController extends Controller{
		private $page1='/application/views/main.tpl.php';
		private $page2='/application/views/auth.tpl.php';
		public function __construct(){
		$this->view=new View();
		$this->model=new BagModel();
		}
		public function index(){
			if (!isset($_SESSION['authorized'])){
				 
				$this->view->render($this->page2);
			}
			else{
				$this->view->render($this->page1);
			}
		}
		public function addInBag(){
			$this->view->auth($this->model->addInBag());
		}
		public function getBag(){
			$this->view->sendBooksMain($this->model->sendBooksMain());
		}
		public function deleteBook(){
			$this->model->deleteFromBag();
		}
		public function buyBook(){
			$this->model->addInBuy();
		}
		
	}