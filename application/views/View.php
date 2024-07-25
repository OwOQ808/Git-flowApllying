<?php
	class View{
		public function render($tpl){
			require_once root. $tpl;
		}
		public function addMenu($values){
			echo json_encode($values, JSON_UNESCAPED_UNICODE);
		}
		public function auth($status){
			echo $status;
		}
		public function loadContent($value){
			echo file_get_contents($value);
		}
		public function sendBooksMain($books){
			echo json_encode($books, JSON_UNESCAPED_UNICODE);
		}
		public function downloadBook($fpdf){
			
			$filename = file_path.$fpdf; // Путь к вашему файлу
			header("Content-type: application/octet-stream");
			header('Content-Disposition: attachment; filename="'. basename($filename) .'"');
			header('Content-Length: ' . filesize($filename));

			@readfile($filename);
			exit();
		}
	}