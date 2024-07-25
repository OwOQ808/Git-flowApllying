<?php
	class BookController extends Controller{
		private $page='/application/views/main.tpl.php';
		public function __construct(){
			$this->model=new BookModel();
			$this->view=new View();
		}
		public function index(){
			$this->view->render($this->page);
		}
		public function page(){
			$this->view->render($this->page);
		}
		public function getBook(){
			$this->view->sendBooksMain($this->model->getBookInfo());
		}
	}
	