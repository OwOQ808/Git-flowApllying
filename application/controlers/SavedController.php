<?php
	class SavedController extends Controller{
		private $page1='/application/views/main.tpl.php';
		private $page2='/application/views/auth.tpl.php';
		public function __construct(){
			$this->view=new View();
			$this->model=new SavedModel();
		}
		public function index(){
			if (!isset($_SESSION['authorized'])){
				 
				$this->view->render($this->page2);
			}
			else{
				$this->view->render($this->page1);
			}
		}
		public function getSaved(){
			$this->view->sendBooksMain($this->model->sendBooksMain());
		}
		public function downloadBook(){
			$postData = $_GET['id'];
			$this->view->downloadBook($this->model->getBook($postData));
		}
		
	}