<?php
	class IndexController extends Controller{
		private $page='/application/views/main.tpl.php';
		private $page1= view_path.'bodycontent.tpl.php';
		public function __construct(){
			$this->model=new IndexModel();
			$this->view=new View();
		}
		public function index(){
			$this->view->render($this->page);
		}
		public function menu(){
			$this->view->addMenu($this->model->getALLMenu());
		}
		public function loadContent(){
			$this->view->loadContent($this->page1);
		}
		public function indexBooks(){
			$postData = file_get_contents('php://input');
			$this->view->sendBooksMain($this->model->selectBooksMain($postData));
		}
		public function indexBs(){
			$postData = file_get_contents('php://input');
			$this->view->sendBooksMain($this->model->selectBooks($postData));
		}
	}