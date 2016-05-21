'use strict';
angular.module('main')
.controller('MenuCtrl', function ($log, $scope, $state, $ionicModal, MainService) {
//labels custom
  this.data = {
	dataModal: {title: 'Criar Usuário'},
	form: { 
		criarUsuario: {
			'title': 'Criar Conta de Acesso',
			'nome': {placeholder: 'Seu Nome Completo', title: 'Nome Completo'},
			'email': {placeholder: 'informe.seu@email.com.br', title: 'Email'},
			'telefone': {placeholder: '(11)5555-5555', title: 'Telefone'},
			'cpf': {placeholder: 'Seu CPF', title: 'CPF'},
			'dataNascimento': {placeholder: 'Sua Data Nascimento', title: 'Data Nascimento'},
			'senha': { placeholder: 'Sua Nova Senha de 6 dígitos', title: 'Senha'},
			'btnCriar': { title: 'Criar Agora' }
	  }
	}
  };
  
  this.mock = function () {
	  this.data.form.criarUsuario.nome.value = 'Fidelis Felipe Caldas Guimarães';
	  this.data.form.criarUsuario.email.value = 'atosfiel@gmail.com';
	  this.data.form.criarUsuario.telefone.value = '6186075892';
	  this.data.form.criarUsuario.cpf.value = '99929830197';
	  this.data.form.criarUsuario.dataNascimento.value = (new Date()).toISOString();
	  this.data.form.criarUsuario.senha.value = '123456';
  }
  this.clear = function () {
	  this.data.form.criarUsuario.nome.value = null;
	  this.data.form.criarUsuario.email.value = null;
	  this.data.form.criarUsuario.telefone.value = null;
	  this.data.form.criarUsuario.cpf.value = null;
	  this.data.form.criarUsuario.dataNascimento.value = null;
	  this.data.form.criarUsuario.senha.value = null;
  }
  this.criarUsuario = function (usuarioForm) {
	  $log.log('form valid:',usuarioForm.$valid);
	  $log.log('init save user of form name:', usuarioForm.$name);
	  $log.log('nome:',this.data.form.criarUsuario.nome.value);
  }

  $log.log('Hello from your Controller: MenuCtrl in module main:. This is your controller:', this);
  
  /** Init Modal Data **/
  //createDataModal(this);
  //open data modal
  this.openDataModal = function () {$state.go('main.novo');};//this.dataModal.show();}; 
  //close data modal
  this.closeDataModal = function () {this.dataModal.hide();}
  //create data modal
  function createDataModal (ref) {
	$ionicModal.fromTemplateUrl('new-data-modal.html', {
	  scope: $scope,
	  animation: 'slide-in-up'
	}).then(function (modal) {
	//dataModal = modal;
	//push modal of service
	  $log.log('open modal with service');
	  ref.dataModal = modal;modal.show();
	});
  }
});
