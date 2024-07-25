<?php
	class CatalogController extends Controller{
		public $model;
		public $view;
		private $page='/application/views/main.tpl.php';
		public function __construct(){
			$this->view=new View();
			$this->model=new CatalogModel();
		}
		public function getBook(){
			$this->view->sendBooksMain($this->model->getBookInfo());
		}
		public function index(){
			$this->view->render($this->page);
		}
		public function geyBookSearch(){
			$this->view->sendBooksMain($this->model->getBookSearch());
		}
		
	}