import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Sudoku } from './sudoku.js';

$(document).ready(function() {
  $('form#sudoku-form').submit(function(event) {
    event.preventDefault();

    var row1 = $('#row1').val().split(" ");
    for(var i = 0; i < row1.length; i++){
      row1[i] = parseInt(row1[i]);
    }

    var row2 = $('#row2').val().split(" ");
    for(var i = 0; i < row2.length; i++){
      row2[i] = parseInt(row2[i]);
    }

    var row3 = $('#row3').val().split(" ");
    for(var i = 0; i < row3.length; i++){
      row3[i] = parseInt(row3[i]);
    }

    var row4 = $('#row4').val().split(" ");
    for(var i = 0; i < row4.length; i++){
      row4[i] = parseInt(row4[i]);
    }

    var row5 = $('#row5').val().split(" ");
    for(var i = 0; i < row5.length; i++){
      row5[i] = parseInt(row5[i]);
    }

    var row6 = $('#row6').val().split(" ");
    for(var i = 0; i < row6.length; i++){
      row6[i] = parseInt(row6[i]);
    }

    var row7 = $('#row7').val().split(" ");
    for(var i = 0; i < row7.length; i++){
      row7[i] = parseInt(row7[i]);
    }

    var row8 = $('#row8').val().split(" ");
    for(var i = 0; i < row8.length; i++){
      row8[i] = parseInt(row8[i]);
    }

    var row9 = $('#row9').val().split(" ");
    for(var i = 0; i < row9.length; i++){
      row9[i] = parseInt(row9[i]);
    }

    var sudokuBoard = [row1, row2, row3, row4, row5, row6, row7, row8, row9];
    var sudokuGame = new Sudoku(sudokuBoard);
    $("#solution").text(sudokuGame.boardIsValid());
  });
});
