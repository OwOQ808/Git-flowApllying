<?php
	class SearchController extends Controller{
		public $model;
		public $view;
		private $page='/application/views/main.tpl.php';
		public function __construct(){
			$this->view=new View();
			$this->model=new SearchModel();
		}
		public function index(){
			$this->view->render($this->page);
		}
		public function getBookSearch(){
			$this->view->sendBooksMain($this->model->getBookSearch());
		}
		
	}