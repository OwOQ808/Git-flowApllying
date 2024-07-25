<?php
	class Routing{
		public static function buildRoute(){
			$controllerName='IndexController';
			$modelName='IndexModel';
			$action='index';
			$route=explode('/',$_SERVER['REQUEST_URI']);


			if($route[1]!=''){
				$controllerName=ucfirst(explode('?',$route[1])[0]. 'Controller');
				$modelName=ucfirst(explode('?',$route[1])[0]. 'Model');
			}
			require_once controller_path . $controllerName . '.php';
			require_once model_path . $modelName . '.php';
			
			if (isset($route[2])){
				$action=explode('?',$route[2])[0];

			}
			$controller= new $controllerName();
			$controller->$action();
		}
		
	}