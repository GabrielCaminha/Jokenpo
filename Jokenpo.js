if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Jokenpo'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Jokenpo'.");
}var Jokenpo = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Random = Kotlin.kotlin.random.Random;
  var pontosJ;
  var pontosC;
  function pedra() {
    var partida = document.getElementById('partida');
    var pontos = document.getElementById('pontos');
    var vencedor = document.getElementById('vencedor');
    if (partida == null) {
      println('Erro');
      return;
    }if (vencedor == null) {
      return;
    }var computador = Random.Default.nextInt_vux9f0$(1, 4);
    if (computador === 1) {
      partida.innerHTML = 'Pedra vs Pedra';
      vencedor.innerHTML = 'Empate';
    }if (computador === 2) {
      partida.innerHTML = 'Pedra vs Papel';
      pontosC = pontosC + 1 | 0;
      vencedor.innerHTML = 'Computador Ganhou';
    }if (computador === 3) {
      partida.innerHTML = 'Pedra vs Tesoura';
      pontosJ = pontosJ + 1 | 0;
      vencedor.innerHTML = 'Jogador Ganhou';
    }if (pontos != null)
      pontos.innerHTML = 'Jogador:' + pontosJ + ' Computador:' + pontosC + '<br>';
  }
  function papel() {
    var partida = document.getElementById('partida');
    var pontos = document.getElementById('pontos');
    var vencedor = document.getElementById('vencedor');
    if (partida == null) {
      println('Erro');
      return;
    }if (vencedor == null) {
      return;
    }var computador = Random.Default.nextInt_vux9f0$(1, 4);
    if (computador === 1) {
      partida.innerHTML = 'Papel vs Pedra';
      pontosJ = pontosJ + 1 | 0;
      vencedor.innerHTML = 'Jogador Ganhou';
    }if (computador === 2) {
      partida.innerHTML = 'Papel vs Papel';
      vencedor.innerHTML = 'Empate';
    }if (computador === 3) {
      partida.innerHTML = 'Papel vs Tesoura';
      pontosC = pontosC + 1 | 0;
      vencedor.innerHTML = 'Computador Ganhou';
    }if (pontos != null)
      pontos.innerHTML = 'Jogador:' + pontosJ + ' Computador:' + pontosC + '<br>';
  }
  function tesoura() {
    var partida = document.getElementById('partida');
    var pontos = document.getElementById('pontos');
    var vencedor = document.getElementById('vencedor');
    if (partida == null) {
      println('Erro');
      return;
    }if (vencedor == null) {
      return;
    }var computador = Random.Default.nextInt_vux9f0$(1, 4);
    if (computador === 1) {
      partida.innerHTML = 'Tesoura vs Pedra';
      pontosC = pontosC + 1 | 0;
      vencedor.innerHTML = 'Computador Ganhou';
    }if (computador === 2) {
      partida.innerHTML = 'Tesoura vs Papel';
      pontosJ = pontosJ + 1 | 0;
      vencedor.innerHTML = 'Jogador Ganhou';
    }if (computador === 3) {
      partida.innerHTML = 'Tesoura vs Tesoura';
      vencedor.innerHTML = 'Empate';
    }if (pontos != null)
      pontos.innerHTML = 'Jogador:' + pontosJ + ' Computador:' + pontosC + '<br>';
  }
  Object.defineProperty(_, 'pontosJ', {
    get: function () {
      return pontosJ;
    },
    set: function (value) {
      pontosJ = value;
    }
  });
  Object.defineProperty(_, 'pontosC', {
    get: function () {
      return pontosC;
    },
    set: function (value) {
      pontosC = value;
    }
  });
  _.pedra = pedra;
  _.papel = papel;
  _.tesoura = tesoura;
  pontosJ = 0;
  pontosC = 0;
  Kotlin.defineModule('Jokenpo', _);
  return _;
}(typeof Jokenpo === 'undefined' ? {} : Jokenpo, kotlin);
